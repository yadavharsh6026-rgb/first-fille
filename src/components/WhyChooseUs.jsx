import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  Clock, 
  Sparkles, 
  Award, 
  Users, 
  CheckCircle2, 
  HeartHandshake,
  Compass
} from 'lucide-react';
import { whyChooseUsData } from '../data/travelData';

export default function WhyChooseUs() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Car: Car,
    Clock: Clock,
    Sparkles: Sparkles,
    Award: Award,
    Users: Users
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
          <HeartHandshake className="w-3.5 h-3.5 text-[#f5b700]" />
          <span>The Local Himachali Edge</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight leading-tight">
          Why 12,000+ Travelers Choose <br />
          <span className="text-[#f5b700] italic font-script text-4xl sm:text-6xl font-normal">
            Himshikhar Escapes
          </span>
        </h2>
        <p className="mt-3 text-emerald-100/70 text-sm sm:text-base leading-relaxed">
          We don't outsource your trip to middlemen or third-party brokers. We live in Himachal Pradesh and operate our own fleet of vehicles, handpicked mountain cottages, and local guides.
        </p>
      </div>

      {/* 6 Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {whyChooseUsData.map((item, idx) => {
          const Icon = iconMap[item.icon] || ShieldCheck;
          return (
            <div
              key={idx}
              className="bg-[#0b291c] border border-white/10 hover:border-[#f5b700]/40 rounded-3xl p-6 sm:p-7 shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#071c13] border border-white/15 text-[#f5b700] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#f5b700] group-hover:text-[#082016] transition-all">
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-[#f5b700] transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Trust Counter Banner */}
      <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="pt-3 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#f5b700]">12,000+</div>
            <div className="text-xs text-emerald-200/80 mt-1 font-semibold uppercase tracking-wider">
              Happy Travelers
            </div>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#f5b700]">4.9 / 5.0</div>
            <div className="text-xs text-emerald-200/80 mt-1 font-semibold uppercase tracking-wider">
              Verified Rating
            </div>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#f5b700]">45+ Fleet</div>
            <div className="text-xs text-emerald-200/80 mt-1 font-semibold uppercase tracking-wider">
              Mountain Vehicles
            </div>
          </div>

          <div className="pt-3 md:pt-0">
            <div className="text-3xl sm:text-4xl font-black text-[#f5b700]">100% Local</div>
            <div className="text-xs text-emerald-200/80 mt-1 font-semibold uppercase tracking-wider">
              Himachali Operations
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
