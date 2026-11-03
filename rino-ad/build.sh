#!/usr/bin/env bash
# Assembles the bblüv Rinö Pro Amazon video ad from rino-ad/assets into rino-ad/out.
set -euo pipefail
cd "$(dirname "$0")"

A=assets
OUT=out
TMP=out/tmp
mkdir -p "$OUT" "$TMP"

FONT=/usr/share/fonts/opentype/inter/Inter-Bold.otf
FONT_SUB=/usr/share/fonts/opentype/inter/Inter-Medium.otf
W=1920; H=1080; FPS=30
XF=0.3
GREEN='0x4F8A6B'
VERSION=${VERSION:-draft_v1}

ENC=(-c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -r $FPS -an)

overlay_text() {
  local txtfile=$1 style=$2 delay=${3:-0.25}
  if [[ $style == light ]]; then
    echo "drawtext=fontfile=$FONT:textfile=$txtfile:fontsize=64:fontcolor=white:shadowcolor=black@0.55:shadowx=0:shadowy=3:x=(w-tw)/2:y=h*0.80-th/2:alpha='min(1,max(0,(t-$delay)/0.35))'"
  else
    echo "drawtext=fontfile=$FONT:textfile=$txtfile:fontsize=64:fontcolor=$GREEN:x=(w-tw)/2:y=h*0.86-th/2:alpha='min(1,max(0,(t-$delay)/0.35))'"
  fi
}

clip() {
  local name=$1 start=$2 dur=$3 text=$4 grade=${5:-null} delay=${6:-0.25}
  local vf="trim=start=$start:duration=$dur,setpts=PTS-STARTPTS,scale=$W:$H:flags=lanczos,fps=$FPS,$grade"
  if [[ -n $text ]]; then
    printf '%s' "$text" > "$TMP/$name.txt"
    vf="$vf,$(overlay_text "$TMP/$name.txt" light "$delay")"
  fi
  ffmpeg -v error -y -i "$A/$name.mp4" -vf "$vf" "${ENC[@]}" "$TMP/$name.mp4"
}

photo() {
  local name=$1 crop=$2 boxw=$3 boxh=$4 dur=$5 text=$6 x=${7:-(W-w)/2} y=${8:-(H-h)/2-40}
  local frames; frames=$(awk "BEGIN{print int($dur*$FPS)}")
  printf '%s' "$text" > "$TMP/$name.txt"
  ffmpeg -v error -y -loop 1 -i "$A/product_box.webp" -filter_complex "
    color=white:s=${W}x${H}:d=1[bg];
    [0:v]crop=$crop,scale=$boxw:$boxh:force_original_aspect_ratio=decrease:flags=lanczos[p];
    [bg][p]overlay=x='$x':y='$y',format=yuv420p,
    scale=$((W*2)):$((H*2)),zoompan=z='1+0.08*on/$frames':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=$frames:s=${W}x${H}:fps=$FPS,
    $(overlay_text "$TMP/$name.txt" dark)" -frames:v "$frames" "${ENC[@]}" "$TMP/$name.mp4"
}

endcard() {
  local dur=$1 frames; frames=$(awk "BEGIN{print int($dur*$FPS)}")
  printf '%s' "bblüv" > "$TMP/end1.txt"
  printf '%s' "Rinö Pro" > "$TMP/end2.txt"
  printf '%s' "Battery-operated nasal aspirator · 0m+" > "$TMP/end3.txt"
  ffmpeg -v error -y -loop 1 -i "$A/product_box.webp" -filter_complex "
    color=white:s=${W}x${H}:d=$dur:r=$FPS[bg];
    [0:v]scale=-1:1000:flags=lanczos[p];
    [bg][p]overlay=x=W-w-60:y=(H-h)/2,format=yuv420p,
    drawtext=fontfile=$FONT:textfile=$TMP/end1.txt:fontsize=120:fontcolor=$GREEN:x=120:y=330,
    drawtext=fontfile=$FONT:textfile=$TMP/end2.txt:fontsize=96:fontcolor=0x333333:x=120:y=480,
    drawtext=fontfile=$FONT_SUB:textfile=$TMP/end3.txt:fontsize=38:fontcolor=0x555555:x=124:y=620" -t "$dur" -frames:v "$frames" "${ENC[@]}" "$TMP/endcard.mp4"
}

# Visual start time of each shot (seconds); VO lines start 0.2s after their shot.
S=(0 1.6 5.25 9.95 12.95 17.1 19.4 21.0); TOTAL_TARGET=24.0
dur_of() { awk "BEGIN{n=${S[$(($1+1))]:-$TOTAL_TARGET}; x=($1<7)?$XF:0; print n-${S[$1]}+x}"; }

SEGS=()
add() { SEGS+=("$1|$2"); }

d=$(dur_of 0); clip 01_nightstand 0.3 "$d" "bblüv Rinö Pro";                                        add 01_nightstand "$d"
d=$(dur_of 1); clip 02_mother 1.1 "$d" "For stuffy little noses at bedtime" "eq=brightness=0.04:gamma=1.18"; add 02_mother "$d"
d=$(dur_of 2); clip 03_display 0.0 "$d" "5 adjustable suction levels" null 2.1;                      add 03_display "$d"
d=$(dur_of 3); clip 04_glow 1.0 "$d" "Soothing melody & light";                                      add 04_glow "$d"
d=$(dur_of 4); photo tips "1254:560:0:694" 1700 720 "$d" "4 interchangeable tips · from birth (0m+)"; add tips "$d"
d=$(dur_of 5); photo product "300:1030:820:115" 1000 760 "$d" "USB-C rechargeable";                   add product "$d"
d=$(dur_of 6); clip 05_baby 0.4 "$d" "" "eq=brightness=0.01";                                        add 05_baby "$d"
d=$(dur_of 7); endcard "$d";                                                                         add endcard "$d"

# Chain crossfades
inputs=(); filter=""; prev="0:v"; offset=0
for i in "${!SEGS[@]}"; do
  IFS='|' read -r f d <<<"${SEGS[$i]}"
  inputs+=(-i "$TMP/$f.mp4")
  if (( i == 0 )); then offset=$(awk "BEGIN{print $d-$XF}"); continue; fi
  label="v$i"
  filter+="[$prev][$i:v]xfade=transition=fade:duration=$XF:offset=$offset[$label];"
  prev=$label
  offset=$(awk "BEGIN{print $offset+$d-$XF}")
done
TOTAL=$(awk "BEGIN{print $offset+$XF}")
filter+="[$prev]fade=t=out:st=$(awk "BEGIN{print $TOTAL-0.4}"):d=0.4[vout]"

ffmpeg -v error -y "${inputs[@]}" -filter_complex "$filter" -map "[vout]" "${ENC[@]}" "$TMP/video.mp4"

# Audio: the 6 VO lines (source in/out times) placed 0.2s after their shot starts.
VO=$A/voiceover.wav
MUSIC=$(ls $A/music.* 2>/dev/null | head -1 || true)
LINES=("0.00 3.30 1" "4.98 9.50 2" "10.62 13.36 3" "14.38 18.28 4" "19.48 21.55 5" "23.12 25.29 7")
if [[ -f $VO ]]; then
  af=""; mix=""
  for i in "${!LINES[@]}"; do
    read -r a b shot <<<"${LINES[$i]}"
    ms=$(awk "BEGIN{print int((${S[$shot]}+0.2)*1000)}")
    af+="[0:a]atrim=$a:$b,asetpts=PTS-STARTPTS,afade=t=in:d=0.03,afade=t=out:st=$(awk "BEGIN{print $b-$a-0.05}"):d=0.05,adelay=${ms}|${ms}[l$i];"
    mix+="[l$i]"
  done
  af+="${mix}amix=inputs=${#LINES[@]}:normalize=0,apad,atrim=0:$TOTAL[vo];"
  if [[ -n $MUSIC ]]; then
    af+="[1:a]aresample=48000,volume=0.18,atrim=0:$TOTAL,afade=t=out:st=$(awk "BEGIN{print $TOTAL-1.5}"):d=1.5[m];[vo][m]amix=inputs=2:normalize=0[mx];[mx]"
    in2=(-i "$MUSIC")
  else
    af+="[vo]"; in2=()
  fi
  af+="loudnorm=I=-16:TP=-1.5:LRA=11,aresample=48000[a]"
  ffmpeg -v error -y -i "$VO" "${in2[@]}" -filter_complex "$af" -map "[a]" -c:a pcm_s16le "$TMP/audio.wav"
else
  ffmpeg -v error -y -f lavfi -i anullsrc=r=48000:cl=stereo -t "$TOTAL" -c:a pcm_s16le "$TMP/audio.wav"
fi

ffmpeg -v error -y -i "$TMP/video.mp4" -i "$TMP/audio.wav" -map 0:v -map 1:a -c:v copy \
  -c:a aac -b:a 192k -ar 48000 -movflags +faststart -shortest "$OUT/rino_pro_${VERSION}.mp4"

echo "Built $OUT/rino_pro_${VERSION}.mp4 (${TOTAL}s)"
