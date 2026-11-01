import React, { useState } from 'react';
import { 
  MapPin, 
  Plane, 
  Car, 
  Navigation, 
  Compass, 
  Sparkles, 
  ChevronRight, 
  Search, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar,
  Users
} from 'lucide-react';

export default function HeroSection({ onSelectDestinationCard, onSearchSubmit, onOpenCustomPlanner }) {
  const [regionFilter, setRegionFilter] = useState('all');
  const [themeFilter, setThemeFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  const heroCards = [
    {
      id: "manali",
      location: "Manali & Solang",
      state: "Himachal",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=80",
      alt: "Snow capped pine peaks of Solang Valley in Manali",
      price: "From ₹13,999",
      rotation: "-rotate-3 hover:rotate-0",
      tag: "Snow & Adventure"
    },
    {
      id: "spiti",
      location: "Spiti Valley",
      state: "Himachal",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=700&q=80",
      alt: "High altitude cold desert and Chandratal lake in Spiti Valley",
      price: "From ₹24,999",
      rotation: "rotate-0 hover:rotate-1",
      tag: "Cold Desert Safari"
    },
    {
      id: "rishikesh",
      location: "Rishikesh & Auli",
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1600100397608-f010e421c60b?auto=format&fit=crop&w=700&q=80",
      alt: "Emerald Ganga river and lush Himalayan foothills in Rishikesh",
      price: "From ₹17,499",
      rotation: "rotate-2 hover:rotate-0",
      tag: "Rafting & Skiing"
    },
    {
      id: "kedarnath",
      location: "Kedarnath Dham",
      state: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=700&q=80",
      alt: "Sacred Kedarnath Temple framed by snow clad Garhwal peaks",
      price: "From ₹16,999",
      rotation: "rotate-3 hover:rotate-0",
      tag: "Sacred Pilgrimage"
    }
  ];

  const handleSearchClick = () => {
    onSearchSubmit({
      region: regionFilter,
      theme: themeFilter,
      duration: durationFilter
    });
  };

  return (
    <section id="hero" className="relative pt-4 pb-16 px-3 sm:px-6 lg:px-8">
      {/* Outer Card Enclosure strictly mirroring the reference image aesthetic */}
      <div className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.8rem] bg-gradient-to-b from-[#0c3221] via-[#09291b] to-[#071f14] border border-white/15 p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/50 relative overflow-hidden">
        
        {/* Subtle decorative glowing mesh */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#f5b700]/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Hero Top Row: Big Headline & Tagline */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6 lg:mb-10">
          
          {/* Left Title: Reference image typography */}
          <div className="lg:col-span-8 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-emerald-200 text-xs sm:text-sm font-medium mb-4 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#f5b700]" />
              <span>Himachal & Uttarakhand Tour Specialists</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-serif-luxury">
              Your Next{' '}
              <span className="font-script text-[#f5b700] text-5xl sm:text-7xl lg:text-8xl font-normal not-italic inline-block tracking-normal transform -rotate-1 select-none pr-2">
                Unforgettable
              </span>
              <br className="hidden sm:inline" />
              Journey <span className="text-white/95">Starts Here</span>
            </h1>
          </div>

          {/* Right Subtitle: Tagline like reference image */}
          <div className="lg:col-span-4 lg:text-right flex flex-col lg:items-end justify-center pt-2 lg:pt-8">
            <p className="text-emerald-100/90 text-lg sm:text-xl font-normal leading-relaxed max-w-sm">
              Adventure, culture, and comfort all in one Himalayan journey.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-emerald-300/80 font-medium">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#f5b700]" /> 100% Customized
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#f5b700]" /> Local Drivers
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-[#f5b700]" /> 24/7 Support
              </span>
            </div>
          </div>
        </div>

        {/* Curved Dashed Journey Trajectory with Transport Icons */}
        <div className="relative w-full h-14 sm:h-20 my-2 select-none pointer-events-none hidden md:block">
          {/* SVG curved path */}
          <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 70" fill="none">
            <path 
              d="M 50 50 Q 250 5, 450 35 T 850 20 Q 930 45, 980 50" 
              stroke="rgba(255, 255, 255, 0.35)" 
              strokeWidth="2.5" 
              strokeDasharray="8 8" 
            />
          </svg>

          {/* Floating Travel Icons positioned along the trajectory */}
          <div className="absolute left-[12%] top-[30%] -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0a2e1e] shadow-md shadow-black/30 transform -rotate-12 animate-float-slow" style={{ '--rot': '-12deg' }}>
            <Plane className="w-4 h-4" />
          </div>

          <div className="absolute left-[38%] top-[15%] -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0a2e1e] shadow-md shadow-black/30 transform rotate-6 animate-float-slow" style={{ '--rot': '6deg', animationDelay: '1.5s' }}>
            <Car className="w-4 h-4" />
          </div>

          <div className="absolute left-[70%] top-[18%] -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#0a2e1e] shadow-md shadow-black/30 transform -rotate-6 animate-float-slow" style={{ '--rot': '-6deg', animationDelay: '2.5s' }}>
            <Navigation className="w-4 h-4" />
          </div>

          <div className="absolute right-[8%] top-[45%] -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-[#f5b700] text-[#092317] shadow-md shadow-black/30 transform rotate-12 animate-float-slow" style={{ '--rot': '12deg', animationDelay: '3s' }}>
            <Compass className="w-4 h-4" />
          </div>
        </div>

        {/* Bottom Floating Polaroid-Style Cards from Reference Image */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 pb-2">
          {heroCards.map((card, idx) => (
            <div
              key={card.id}
              onClick={() => onSelectDestinationCard(card.id)}
              className={`group cursor-pointer transform transition-all duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:z-20 ${card.rotation}`}
            >
              {/* White Polaroid Border */}
              <div className="bg-white p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#f5b700]/20 transition-all flex flex-col">
                {/* Photo container */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading={idx < 2 ? "eager" : "lazy"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

                  {/* Coral Location Pin Badge matching reference image */}
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold bg-[#ff5238] text-white shadow-md shadow-black/40 backdrop-blur-sm">
                      <MapPin className="w-3 h-3 fill-white" />
                      {card.location}
                    </span>
                  </div>

                  {/* Top State Badge */}
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-md">
                      {card.state}
                    </span>
                  </div>
                </div>

                {/* Subtitle / Price footer on hover */}
                <div className="pt-2 px-1 flex items-center justify-between text-slate-800">
                  <span className="text-[11px] font-bold text-slate-500 truncate">
                    {card.tag}
                  </span>
                  <span className="text-xs font-extrabold text-[#0d3826]">
                    {card.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Search & Filter Bar Bar directly anchored to bottom */}
        <div className="relative z-10 mt-8 sm:mt-12 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/40 border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center">
            
            {/* Region Select */}
            <div className="flex flex-col text-left">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#0d3826]" /> Where To Go?
              </label>
              <select
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
              >
                <option value="all">All Himalayas (HP & UK)</option>
                <option value="himachal">Himachal Pradesh (Manali, Spiti, Shimla)</option>
                <option value="uttarakhand">Uttarakhand (Rishikesh, Kedarnath, Auli)</option>
              </select>
            </div>

            {/* Travel Theme */}
            <div className="flex flex-col text-left">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#0d3826]" /> Travel Style / Theme
              </label>
              <select
                value={themeFilter}
                onChange={(e) => setThemeFilter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
              >
                <option value="all">All Experiences</option>
                <option value="Family">Family Vacations</option>
                <option value="Honeymoon">Romantic & Honeymoon</option>
                <option value="Adventure & Treks">Adventure & Snow Treks</option>
                <option value="Spiritual / Chardham">Spiritual & Chardham Yatra</option>
              </select>
            </div>

            {/* Duration */}
            <div className="flex flex-col text-left">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0d3826]" /> Duration
              </label>
              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d3826]"
              >
                <option value="all">Any Duration</option>
                <option value="short">Short Getaway (4-5 Days)</option>
                <option value="medium">Standard Holiday (6-7 Days)</option>
                <option value="long">Grand Circuit (8+ Days)</option>
              </select>
            </div>

            {/* Search Submit Button */}
            <div className="flex flex-col justify-end pt-1 sm:pt-0">
              <button
                onClick={handleSearchClick}
                className="w-full h-[46px] rounded-xl bg-[#0d3826] hover:bg-[#072418] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#0d3826]/30 hover:shadow-xl transition-all cursor-pointer"
              >
                <Search className="w-4 h-4 text-[#f5b700]" />
                Explore Available Packages
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
