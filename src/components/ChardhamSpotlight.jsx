import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Check, 
  ShieldCheck, 
  Clock, 
  Phone, 
  ArrowRight,
  Plane,
  HeartHandshake
} from 'lucide-react';

export default function ChardhamSpotlight({ onBookChardham }) {
  const highlights = [
    {
      title: "Kedarnath Dham (11,755 ft)",
      desc: "One of the 12 sacred Jyotirlingas of Lord Shiva framed by snowy Kedarnath dome."
    },
    {
      title: "Badrinath Dham (10,279 ft)",
      desc: "The sacred abode of Lord Vishnu on the banks of Alaknanda, with Tapt Kund hot springs."
    },
    {
      title: "Gangotri Dham (10,200 ft)",
      desc: "Seat of Goddess Ganga, birthplace of the sacred river Bhagirathi from the Gangotri glacier."
    },
    {
      title: "Yamunotri Dham (10,804 ft)",
      desc: "Source of holy River Yamuna with cooking rice in the natural hot waters of Surya Kund."
    }
  ];

  return (
    <section id="chardham" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="rounded-[2.5rem] bg-gradient-to-r from-[#112d20] via-[#092418] to-[#071c13] border border-amber-500/20 p-6 sm:p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#f5b700]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5b700]/10 border border-[#f5b700]/30 text-[#f5b700] text-xs sm:text-sm font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sacred Garhwal Pilgrimage & Helicopter Desk</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury leading-tight">
              Devbhumi Chardham Yatra & <br />
              <span className="text-[#f5b700] italic font-script text-4xl sm:text-6xl font-normal">
                Kedarnath Helicopter Darshan
              </span>
            </h2>

            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
              Experience the divine grace of Uttarakhand's holy dhams with utmost comfort. We specialize in hassle-free pilgrimage arrangements for families and senior citizens with certified mountain drivers, hot water guaranteed rooms, and helicopter ticket assistance.
            </p>

            {/* 4 Dhams Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#f5b700] text-[#082016] text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{h.title}</h4>
                    <p className="text-[11px] text-emerald-200/70 mt-0.5">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inclusions ticks */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-emerald-200">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#f5b700]" /> Biometric Yatra Registration
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#f5b700]" /> Phata / Sersi Helipad Shuttle
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#f5b700]" /> Pure Satvik Veg Meals
              </span>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookChardham}
                className="px-6 py-3.5 rounded-2xl bg-[#f5b700] hover:bg-[#ffc107] text-[#082016] font-extrabold text-sm shadow-xl shadow-[#f5b700]/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                Book Kedarnath / Chardham Package
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="tel:+919816022345"
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#f5b700]" />
                Talk to Yatra Specialist
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80"
                alt="Kedarnath Temple framed by snow mountains"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Helicopter badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-xs font-bold text-white flex items-center gap-1.5">
                <Plane className="w-3.5 h-3.5 text-[#f5b700]" />
                Helicopter Shuttle Available
              </div>

              {/* Overlay quote */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-[#f5b700] text-xs font-bold uppercase tracking-wider mb-1">
                  Pilgrimage Assistance
                </div>
                <div className="text-lg font-bold font-serif-luxury">
                  "Har Har Mahadev — Complete devotion, total comfort."
                </div>
                <p className="text-xs text-slate-200 mt-1">
                  Verified hotels in Sitapur, Guptkashi, Badrinath with hot geyser guarantee.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
