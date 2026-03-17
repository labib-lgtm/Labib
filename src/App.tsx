import React from 'react';
import { Check, ChevronDown, MousePointer2, ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] relative overflow-hidden font-sans text-[#111]">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#F4FCE3] rounded-full blur-[120px] opacity-50 pointer-events-none"></div>

      {/* Floating Decorations */}
      <DecorationLines />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#D4FF00] rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-black">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight leading-none">LYNX<br/>MEDIA</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">Services</a>
          <a href="#" className="hover:text-black">Case Studies</a>
          <a href="#" className="hover:text-black">About Us</a>
          <a href="#" className="flex items-center gap-1 hover:text-black">
            Free Audit <ChevronDown className="w-4 h-4" />
          </a>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Get a Free Audit
        </button>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 pt-16 pb-24 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Pill */}
        <div className="bg-[#D4FF00] rounded-full px-4 py-2 flex items-center gap-3 mb-8 shadow-sm">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-6 h-6 rounded-full border-2 border-[#D4FF00]" />
            <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-6 h-6 rounded-full border-2 border-[#D4FF00]" />
            <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-6 h-6 rounded-full border-2 border-[#D4FF00]" />
          </div>
          <span className="text-sm font-semibold">Join 170+ Satisfied Brands</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl mb-6 leading-[1.1]">
          Grow Faster on Amazon, without Guesswork
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          We'll take you from stuttering <strong className="text-black font-semibold">sales to #1 in your product category</strong>. All while maintaining your brand identity and integrity.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full">
          <button className="bg-[#D4FF00] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#c2eb00] transition-colors w-full sm:w-auto">
            Grow Your Amazon Sales
          </button>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold border border-gray-200 hover:border-gray-300 transition-colors shadow-sm w-full sm:w-auto">
            Book a Consultation
          </button>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-semibold text-gray-700 mb-20">
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-black" /> Better Ads
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-black" /> Better Traffic
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-black" /> Sky-High Profits
          </div>
        </div>

        {/* Image Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Orange Asterisk Decoration */}
          <div className="absolute -top-8 right-8 text-[#FF5C00] z-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/>
            </svg>
          </div>

          <div className="rounded-[2rem] border-4 border-[#D4FF00] overflow-hidden shadow-2xl bg-gray-100 aspect-[16/9] relative">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2000" 
              alt="Amazon Office Building" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Amazon Logo Overlay (Mock) */}
            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg hidden md:block">
               <span className="font-bold text-2xl tracking-tighter">amazon</span>
            </div>
          </div>
        </div>

      </main>

      {/* Trusted By Section */}
      <section className="relative z-10 py-16 text-center">
        <div className="px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by major brands and<br />Amazon FBA sellers
          </h2>
          <p className="text-gray-600 mb-16 text-lg">
            Join a growing group of satisfied customers who have made the switch.
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden flex">
          <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            <div className="flex items-center gap-x-16 lg:gap-x-24 px-8">
              <LogoGroup />
            </div>
            <div className="flex items-center gap-x-16 lg:gap-x-24 px-8">
              <LogoGroup />
            </div>
          </div>
        </div>
      </section>

      {/* Is This You Section */}
      <section className="relative z-10 py-40 md:py-64 flex items-center justify-center overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[400px] bg-[#F4FCE3] rounded-full blur-[100px] opacity-80"></div>
        </div>
        
        <h2 className="relative z-10 text-6xl md:text-8xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#F2A900] via-[#D4FF00] to-[#82D99E]">
          Is This You?
        </h2>
      </section>

      {/* Struggling Sections */}
      <section className="relative z-10 py-24 px-4 max-w-7xl mx-auto flex flex-col gap-y-[336px]">
        {/* Item 1 (Left) */}
        <div className="flex justify-start">
          <div className="relative inline-block ml-4 md:ml-12 lg:ml-24">
            {/* Top Right Bracket */}
            <div className="absolute -top-4 -right-6 w-6 h-6 border-t-4 border-r-4 border-[#FFC107]"></div>
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-4 -left-6 w-6 h-6 border-b-4 border-l-4 border-[#FFC107]"></div>
            <h2 className="text-[30px] font-extrabold tracking-tight leading-[1.1] text-black text-center ml-0 h-[60px] w-[390px]">
              Struggling to stay Visible or<br />
              Competitive?
            </h2>
          </div>
        </div>

        {/* Item 2 (Right) */}
        <div className="flex justify-end">
          <div className="relative inline-block mr-4 md:mr-12 lg:mr-24">
            {/* Top Right Bracket */}
            <div className="absolute -top-4 -right-6 w-6 h-6 border-t-4 border-r-4 border-[#FFC107]"></div>
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-4 -left-6 w-6 h-6 border-b-4 border-l-4 border-[#FFC107]"></div>
            <h2 className="text-[30px] font-extrabold tracking-tight leading-[1.1] text-black text-center ml-0 h-[60px] w-[390px]">
              Struggling to stay Visible or<br />
              Competitive?
            </h2>
          </div>
        </div>

        {/* Item 3 (Left) */}
        <div className="flex justify-start">
          <div className="relative inline-block ml-4 md:ml-12 lg:ml-24">
            {/* Top Right Bracket */}
            <div className="absolute -top-4 -right-6 w-6 h-6 border-t-4 border-r-4 border-[#FFC107]"></div>
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-4 -left-6 w-6 h-6 border-b-4 border-l-4 border-[#FFC107]"></div>
            <h2 className="text-[30px] font-extrabold tracking-tight leading-[1.1] text-black text-center ml-0 h-[60px] w-[390px]">
              Struggling to stay Visible or<br />
              Competitive?
            </h2>
          </div>
        </div>

        {/* Item 4 (Right) */}
        <div className="flex justify-end">
          <div className="relative inline-block mr-4 md:mr-12 lg:mr-24">
            {/* Top Right Bracket */}
            <div className="absolute -top-4 -right-6 w-6 h-6 border-t-4 border-r-4 border-[#FFC107]"></div>
            {/* Bottom Left Bracket */}
            <div className="absolute -bottom-4 -left-6 w-6 h-6 border-b-4 border-l-4 border-[#FFC107]"></div>
            <h2 className="text-[30px] font-extrabold tracking-tight leading-[1.1] text-black text-center ml-0 h-[60px] w-[390px]">
              Struggling to stay Visible or<br />
              Competitive?
            </h2>
          </div>
        </div>
      </section>

      {/* Our Proven Process Section */}
      <section className="relative z-10 py-24 px-4 max-w-5xl mx-auto flex flex-col items-center text-center mt-24">
        <div className="bg-[#D4FF00] text-black font-semibold px-6 py-2 rounded-full mb-8 inline-block text-lg">
          Here's How We Fix It
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-black mb-8">
          Our Proven Process to Solve<br />
          these Amazon Headaches
        </h2>
        <p className="text-gray-700 text-lg md:text-xl max-w-4xl leading-relaxed">
          At Lynx Media, we don't offer random services — we solve Amazon seller headaches with a clear,
          proven process designed to grow your store and ease your workload.
        </p>
      </section>

      {/* Services Cards */}
      <section className="relative z-10 px-4 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm h-full hover:shadow-md transition-all">
            <div className="p-8 sm:p-10 flex flex-col flex-grow w-full sm:w-[55%] z-10">
              <h3 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-black mb-4 leading-[1.1]">
                PPC Management<br />for Amazon
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 pr-4">
                Our expert Amazon PPC strategies are crafted to supercharge your sales and maximize your ROI.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center font-bold text-black text-[15px] hover:text-[#FF5C00] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[45%] relative min-h-[250px] sm:min-h-0">
              <img src="https://storage.googleapis.com/macaulay-vision-images/19c72054-0539-445e-b873-1f19069902b6_20.png" alt="PPC Management" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm h-full hover:shadow-md transition-all">
            <div className="p-8 sm:p-10 flex flex-col flex-grow w-full sm:w-[55%] z-10">
              <h3 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-black mb-4 leading-[1.1]">
                Creatives<br />Services for<br />Amazon
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 pr-4">
                We craft compelling visuals, engaging content, and optimized listings that drive conversions
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center font-bold text-black text-[15px] hover:text-[#FF5C00] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[45%] relative min-h-[250px] sm:min-h-0">
              <img src="https://storage.googleapis.com/macaulay-vision-images/19c72054-0539-445e-b873-1f19069902b6_14.png" alt="Creatives Services" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Card 3: Product Launch */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm h-full hover:shadow-md transition-all">
            <div className="p-8 sm:p-10 flex flex-col flex-grow w-full sm:w-[55%] z-10">
              <h3 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-black mb-4 leading-[1.1]">
                Product<br />Launch for<br />Amazon
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 pr-4">
                Navigating Amazon Vendor Central can be complex, but we make it simple. we focus on growing your brand
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center font-bold text-black text-[15px] hover:text-[#FF5C00] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[45%] relative min-h-[250px] sm:min-h-0">
              <img src="https://storage.googleapis.com/macaulay-vision-images/19c72054-0539-445e-b873-1f19069902b6_16.png" alt="Product Launch" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Card 4: Brand Management */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm h-full hover:shadow-md transition-all">
            <div className="p-8 sm:p-10 flex flex-col flex-grow w-full sm:w-[55%] z-10">
              <h3 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-black mb-4 leading-[1.1]">
                Brand Management<br />for Amazon
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 pr-4">
                Our dedicated team ensures every aspect of your Amazon account runs smoothly
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center font-bold text-black text-[15px] hover:text-[#FF5C00] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[45%] relative min-h-[250px] sm:min-h-0">
              <img src="https://storage.googleapis.com/macaulay-vision-images/19c72054-0539-445e-b873-1f19069902b6_15.png" alt="Brand Management" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Card 5: Listing Optimization */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm h-full hover:shadow-md transition-all">
            <div className="p-8 sm:p-10 flex flex-col flex-grow w-full sm:w-[55%] z-10">
              <h3 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-black mb-4 leading-[1.1]">
                Listing Optimization<br />for Amazon
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 pr-4">
                Compellingly develop the cost effective infrastructures with intuitivism.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center font-bold text-black text-[15px] hover:text-[#FF5C00] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[45%] relative min-h-[250px] sm:min-h-0">
              <img src="https://storage.googleapis.com/macaulay-vision-images/19c72054-0539-445e-b873-1f19069902b6_17.png" alt="Listing Optimization" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Card 6: Catalogue Management */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm h-full hover:shadow-md transition-all">
            <div className="p-8 sm:p-10 flex flex-col flex-grow w-full sm:w-[55%] z-10">
              <h3 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-black mb-4 leading-[1.1]">
                Catalogue<br />Management<br />for Amazon
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 pr-4">
                Dynamically recapitalize bleeding-edge leadership skills for all apps.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center font-bold text-black text-[15px] hover:text-[#FF5C00] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[45%] relative min-h-[250px] sm:min-h-0">
              <img src="https://storage.googleapis.com/macaulay-vision-images/19c72054-0539-445e-b873-1f19069902b6_18.png" alt="Catalogue Management" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Card 7: TikTok Shop */}
          <div className="flex flex-col sm:flex-row bg-white rounded-[32px] border border-gray-200 overflow-hidden shadow-sm h-full hover:shadow-md transition-all">
            <div className="p-8 sm:p-10 flex flex-col flex-grow w-full sm:w-[55%] z-10">
              <h3 className="text-3xl sm:text-[32px] font-extrabold tracking-tight text-black mb-4 leading-[1.1]">
                TikTok Shop
              </h3>
              <p className="text-gray-600 text-[15px] leading-[1.6] mb-8 pr-4">
                Drive consistent sales on TikTok Shop with a structured approach to product positioning, content alignment, and conversion-focused optimization.
              </p>
              <div className="mt-auto">
                <a href="#" className="inline-flex items-center font-bold text-black text-[15px] hover:text-[#FF5C00] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
            <div className="w-full sm:w-[45%] relative min-h-[250px] sm:min-h-0">
              <img src="https://storage.googleapis.com/macaulay-vision-images/19c72054-0539-445e-b873-1f19069902b6_19.png" alt="TikTok Shop" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24">
        <div className="bg-[#CFF029] rounded-[40px] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-12">
          {/* Decorative Grid */}
          <div className="absolute top-8 right-[25%] w-48 h-48 opacity-60 pointer-events-none hidden md:block">
            <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse">
                  <path d="M 15 0 L 0 0 0 15" fill="none" stroke="white" strokeWidth="2"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" transform="rotate(15)" />
            </svg>
          </div>
          
          {/* Decorative Wavy Lines */}
          <div className="absolute -bottom-8 left-[35%] w-64 h-32 opacity-80 pointer-events-none hidden md:block">
             <svg width="100%" height="100%" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
               <path d="M0,100 Q25,20 50,100 T100,100 T150,100 T200,100" fill="none" stroke="white" strokeWidth="4" />
             </svg>
          </div>

          {/* Left Content */}
          <div className="flex-1 z-10 w-full overflow-hidden">
            <div className="inline-block bg-white px-6 py-2.5 rounded-full font-bold text-black mb-8 shadow-sm">
              Why Lynx Media
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.05] mb-6">
              Why top brands<br/>trust us.
            </h2>
            <p className="text-black text-lg max-w-md mb-12 font-medium leading-relaxed">
              It's all about results. Our success is directly tied to the growth and expansion of our amazing clients.
            </p>

            {/* Stat Cards Slider */}
            <style>
              {`
                @keyframes marquee {
                  0% { transform: translateX(0%); }
                  100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                  animation: marquee 25s linear infinite;
                }
                .marquee-container:hover .animate-marquee {
                  animation-play-state: paused;
                }
              `}
            </style>
            <div className="w-full overflow-hidden mb-12 marquee-container relative -mx-4 sm:-mx-0 px-4 sm:px-0">
              {/* Fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#CFF029] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#CFF029] to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex w-max animate-marquee gap-6 pt-10 pb-4">
                {[
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>,
                    value: "500+",
                    label: "Amazon Stores\nManaged"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M15 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-3-4c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm10.47 1.41l-2.42-.35-1.08-2.19-1.08 2.19-2.42.35 1.75 1.71-.41 2.41 2.16-1.14 2.16 1.14-.41-2.41 1.75-1.71z"/></svg>,
                    value: "93%",
                    label: "Client Retention\nRate"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11.5l-10-5V17l10 5 10-5V8.5l-10 5z"/></svg>,
                    value: "650+",
                    label: "Product Listings\nOptimized"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.1 0-2 .9-2 2 0 .74.4 1.39 1 1.73V7h-2c-2.76 0-5 2.24-5 5v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7c0-2.76-2.24-5-5-5h-2V5.73c.6-.34 1-.99 1-1.73 0-1.1-.9-2-2-2zm-1 8h2v2h2v2h-2v2h-2v-2H9v-2h2v-2z"/></svg>,
                    value: "$1.2M+",
                    label: "in Client Sales\nGenerated"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20h16v2H4zM6 16h3v4H6zm5-5h3v9h-3zm5-7h3v16h-3z"/><path d="M18 2l1.5 1.5L17 6l-2-2-4.5 4.5 1.5 1.5L15 7l2 2 2.5-2.5L21 8V2z"/></svg>,
                    value: "avg. 3x",
                    label: "Increase in\nOrganic Rank"
                  }
                ].map((stat, i) => (
                  <div key={`stat-1-${i}`} className="w-[340px] h-[200px] bg-white rounded-[32px] flex-shrink-0 relative shadow-sm flex">
                    {/* Left Section */}
                    <div className="flex-1 p-8 flex flex-col justify-center relative border-r-2 border-dashed border-gray-200">
                      <div className="absolute -top-8 left-8 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white shadow-md">
                        {stat.icon}
                      </div>
                      <div className="text-5xl font-black text-black mb-2 tracking-tight mt-4">{stat.value}</div>
                      <div className="text-[16px] text-black leading-snug font-medium whitespace-pre-line">{stat.label}</div>
                    </div>
                    
                    {/* Right Section */}
                    <div className="w-[80px] flex items-center justify-center">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      </div>
                    </div>

                    {/* Cutouts */}
                    <div className="absolute top-0 right-[64px] w-8 h-4 bg-[#CFF029] rounded-b-full"></div>
                    <div className="absolute bottom-0 right-[64px] w-8 h-4 bg-[#CFF029] rounded-t-full"></div>
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {[
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>,
                    value: "500+",
                    label: "Amazon Stores\nManaged"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M15 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-3-4c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm10.47 1.41l-2.42-.35-1.08-2.19-1.08 2.19-2.42.35 1.75 1.71-.41 2.41 2.16-1.14 2.16 1.14-.41-2.41 1.75-1.71z"/></svg>,
                    value: "93%",
                    label: "Client Retention\nRate"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 11.5l-10-5V17l10 5 10-5V8.5l-10 5z"/></svg>,
                    value: "650+",
                    label: "Product Listings\nOptimized"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c-1.1 0-2 .9-2 2 0 .74.4 1.39 1 1.73V7h-2c-2.76 0-5 2.24-5 5v7c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-7c0-2.76-2.24-5-5-5h-2V5.73c.6-.34 1-.99 1-1.73 0-1.1-.9-2-2-2zm-1 8h2v2h2v2h-2v2h-2v-2H9v-2h2v-2z"/></svg>,
                    value: "$1.2M+",
                    label: "in Client Sales\nGenerated"
                  },
                  {
                    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M4 20h16v2H4zM6 16h3v4H6zm5-5h3v9h-3zm5-7h3v16h-3z"/><path d="M18 2l1.5 1.5L17 6l-2-2-4.5 4.5 1.5 1.5L15 7l2 2 2.5-2.5L21 8V2z"/></svg>,
                    value: "avg. 3x",
                    label: "Increase in\nOrganic Rank"
                  }
                ].map((stat, i) => (
                  <div key={`stat-2-${i}`} className="w-[340px] h-[200px] bg-white rounded-[32px] flex-shrink-0 relative shadow-sm flex">
                    {/* Left Section */}
                    <div className="flex-1 p-8 flex flex-col justify-center relative border-r-2 border-dashed border-gray-200">
                      <div className="absolute -top-8 left-8 w-16 h-16 bg-black rounded-full flex items-center justify-center text-white shadow-md">
                        {stat.icon}
                      </div>
                      <div className="text-5xl font-black text-black mb-2 tracking-tight mt-4">{stat.value}</div>
                      <div className="text-[16px] text-black leading-snug font-medium whitespace-pre-line">{stat.label}</div>
                    </div>
                    
                    {/* Right Section */}
                    <div className="w-[80px] flex items-center justify-center">
                      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                      </div>
                    </div>

                    {/* Cutouts */}
                    <div className="absolute top-0 right-[64px] w-8 h-4 bg-[#CFF029] rounded-b-full"></div>
                    <div className="absolute bottom-0 right-[64px] w-8 h-4 bg-[#CFF029] rounded-t-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 pl-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-[#00B67A]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <span className="font-extrabold text-xl text-black ml-1 tracking-tight">Trustpilot</span>
                </div>
                <div className="flex flex-col">
                  <div className="font-black text-xl text-black leading-none mb-1">4.5★</div>
                  <div className="text-[11px] text-black font-bold tracking-wide">351 Reviews</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <span className="font-extrabold text-xl text-black tracking-tight"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span></span>
                </div>
                <div className="flex flex-col">
                  <div className="font-black text-xl text-black leading-none mb-1">4.7★</div>
                  <div className="text-[11px] text-black font-bold tracking-wide">103 Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - iPhone Mockup */}
          <div className="w-full lg:w-[380px] flex-shrink-0 relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-[300px] sm:w-[320px] h-[600px] sm:h-[650px] bg-white rounded-[45px] sm:rounded-[50px] border-[10px] sm:border-[12px] border-gray-300 shadow-2xl relative overflow-hidden flex flex-col transform lg:translate-y-8">
              {/* Inner black border */}
              <div className="absolute inset-0 border-[5px] sm:border-[6px] border-black rounded-[35px] sm:rounded-[38px] pointer-events-none z-50"></div>
              
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] sm:w-[100px] h-[26px] sm:h-[30px] bg-black rounded-full z-50 flex items-center justify-end px-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-gray-800 border border-gray-700"></div>
              </div>

              {/* Status Bar */}
              <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-[11px] font-bold z-40 bg-white">
                <span>21:37</span>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12h20v2H2z"/></svg>
                </div>
              </div>

              {/* App Header */}
              <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-4 bg-gray-200 rounded-sm overflow-hidden flex">
                    <div className="w-1/2 h-full bg-red-500"></div>
                    <div className="w-1/2 h-full bg-white"></div>
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </div>
                <div className="font-bold text-lg tracking-tighter flex items-center gap-1">
                  amazon seller
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3h18v18H3zM12 8v8M8 12h8"/></svg>
              </div>

              {/* Tabs */}
              <div className="flex px-4 py-3 border-b border-gray-100 gap-5 text-[13px] font-medium">
                <span className="text-orange-500 border-b-2 border-orange-500 pb-1">Performance</span>
                <span className="text-blue-500">Actions</span>
                <span className="text-blue-500">Stay Informed</span>
              </div>

              {/* Store Status */}
              <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[13px] font-bold">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  Your store is healthy
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </div>

              {/* Chart Section */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-gray-500 text-[11px] mb-1 flex items-center gap-1">Product sales <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></div>
                    <div className="font-black text-xl leading-none mb-1">28.92M <span className="text-[10px] font-bold text-gray-500">USD</span></div>
                    <div className="text-[9px] text-gray-400">Aug 1, 2024 to today</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-500 text-[11px] mb-1 flex items-center gap-1 justify-end">Last 12 months <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></div>
                    <div className="font-bold text-green-500 text-[13px] leading-none mb-1">145% ↑</div>
                    <div className="text-[9px] text-gray-400">Previous period</div>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="flex-1 relative flex items-end justify-between gap-1 pb-5 border-b border-gray-100 mt-2">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-5 flex flex-col justify-between text-[9px] text-gray-400 font-medium">
                    <span>5m</span><span>4m</span><span>3m</span><span>2m</span><span>1m</span><span>0</span>
                  </div>
                  {/* Grid lines */}
                  <div className="absolute left-5 right-0 top-1 bottom-5 flex flex-col justify-between">
                    <div className="w-full border-t border-gray-100"></div>
                    <div className="w-full border-t border-gray-100"></div>
                    <div className="w-full border-t border-gray-100"></div>
                    <div className="w-full border-t border-gray-100"></div>
                    <div className="w-full border-t border-gray-100"></div>
                    <div className="w-full border-t border-gray-100"></div>
                  </div>
                  
                  {/* Bars */}
                  <div className="w-full h-full ml-5 flex items-end justify-between gap-[2px] z-10">
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '15%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '14%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '16%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '15%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '18%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '20%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '25%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '30%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '35%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '45%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '60%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '80%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '90%'}}></div>
                    <div className="w-full bg-[#FF9900] rounded-t-[1px]" style={{height: '10%'}}></div>
                  </div>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-5 right-0 flex justify-between text-[9px] text-gray-400 font-medium">
                    <span>Aug</span><span>Oct</span><span>Dec</span><span>Feb</span><span>Apr</span><span>Jun</span><span>Aug</span>
                  </div>
                </div>
                
                <div className="text-[9px] text-gray-400 text-right mt-1.5 mb-3">Updated 4:21 AM PKT</div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-2 gap-2 mt-auto pb-4">
                  <div className="border border-gray-200 rounded-lg p-2.5">
                    <div className="text-[10px] text-blue-500 font-medium mb-0.5">Sales</div>
                    <div className="font-bold text-sm mb-0.5">$70,352</div>
                    <div className="text-[9px] text-gray-400">Today so far</div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-2.5">
                    <div className="text-[10px] text-blue-500 font-medium mb-0.5">Global Sales</div>
                    <div className="font-bold text-sm mb-0.5">$70,352</div>
                    <div className="text-[9px] text-gray-400">Today so far</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Make It Happen Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-32 relative flex items-center justify-center min-h-[40vh]">
        {/* Background Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[800px] h-[400px] bg-gradient-to-r from-[#FFD700]/15 to-[#FF6B00]/15 blur-[100px] rounded-full"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-6xl sm:text-7xl lg:text-[100px] font-black tracking-tight leading-[1.05]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF6B00]">
              How We Make It<br/>Happen
            </span>
          </h2>
        </div>
      </section>
    </div>
  );
}

function DecorationLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Grey dashes */}
      <div className="absolute top-16 left-[25%] w-8 h-1.5 bg-gray-400 rounded-full rotate-[70deg] opacity-60"></div>
      <div className="absolute top-40 left-[10%] w-6 h-1.5 bg-gray-300 rounded-full -rotate-12 opacity-60"></div>
      <div className="absolute top-[30%] left-[12%] w-8 h-1.5 bg-gray-400 rounded-full rotate-12 opacity-60"></div>
      <div className="absolute top-[45%] left-[5%] w-6 h-1.5 bg-gray-300 rounded-full -rotate-12 opacity-60"></div>
      <div className="absolute top-[60%] left-[8%] w-8 h-1.5 bg-gray-400 rounded-full rotate-[20deg] opacity-60"></div>
      <div className="absolute bottom-[20%] left-[15%] w-6 h-1.5 bg-gray-300 rounded-full -rotate-45 opacity-60"></div>
      
      <div className="absolute top-32 right-[15%] w-8 h-1.5 bg-gray-300 rounded-full -rotate-12 opacity-60"></div>
      <div className="absolute top-[35%] right-[18%] w-6 h-1.5 bg-gray-400 rounded-full rotate-[60deg] opacity-60"></div>
      <div className="absolute top-[50%] right-[5%] w-8 h-1.5 bg-gray-400 rounded-full -rotate-45 opacity-60"></div>
      <div className="absolute bottom-[30%] right-[10%] w-6 h-1.5 bg-gray-300 rounded-full rotate-45 opacity-60"></div>

      {/* Yellow zigzag */}
      <div className="absolute top-32 right-[25%] opacity-80">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FFC107" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14L10 8L16 14L22 8" />
        </svg>
      </div>
    </div>
  );
}

function LogoGroup() {
  return (
    <>
      {/* ACUPLUSH */}
      <span className="text-[#82D99E] font-black text-2xl tracking-tighter font-sans transform scale-y-110">ACUPLUSH</span>
      
      {/* Aldebran */}
      <div className="flex items-center gap-1.5">
        <svg className="w-7 h-7 text-[#F2A900]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 22h20L12 2z" />
          <path d="M12 10v8" />
          <path d="M8 16h8" />
        </svg>
        <span className="font-bold text-xl tracking-tight text-gray-800">Aldebran</span>
      </div>
      
      {/* WILLS & ELM */}
      <span className="font-light text-xl tracking-[0.2em] text-gray-800">WILLS & ELM</span>
      
      {/* Generation ecom */}
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-bold text-[#00529B] tracking-wider mb-0.5">Generation</span>
        <span className="text-2xl font-extrabold text-[#00529B] tracking-tighter">ecom</span>
      </div>
      
      {/* LEMON JELLY */}
      <div className="flex flex-col items-center leading-none">
        <div className="w-3 h-3 bg-[#F2A900] rounded-full mb-1 flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
        </div>
        <div className="border-y border-gray-800 py-1 my-0.5">
          <span className="font-serif font-bold text-sm tracking-widest text-gray-800">LEMON JELLY</span>
        </div>
        <span className="text-[8px] italic text-gray-500">Quality Product</span>
      </div>
      
      {/* Leaf Logo */}
      <div className="flex items-center text-[#8DC63F]">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M12 22V12" />
          <path d="M12 12C8 12 5 9 5 5" />
          <path d="M12 12C16 12 19 9 19 5" />
        </svg>
      </div>
      
      {/* WHITE ANGEL */}
      <div className="flex flex-col items-center leading-none text-[#2C3E50]">
        <svg className="w-10 h-5 mb-1" viewBox="0 0 24 12" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 6c-3-3-8-4-10-2 4 0 8 2 10 2zm0 0c3-3 8-4 10-2-4 0-8 2-10 2z" />
          <circle cx="12" cy="3" r="1" />
        </svg>
        <span className="font-serif text-[10px] tracking-widest">WHITE ANGEL</span>
      </div>
      
      {/* OMNI FACTORY */}
      <div className="flex items-center gap-0.5">
        <span className="text-3xl font-light text-gray-400">O</span>
        <div className="flex flex-col leading-none">
          <span className="text-xl font-bold text-gray-400 tracking-tight">MNI</span>
          <span className="text-[8px] text-gray-300 tracking-[0.3em] mt-0.5">FACTORY</span>
        </div>
      </div>
    </>
  );
}
