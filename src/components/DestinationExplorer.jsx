import React, { useState } from 'react';
import { 
  MapPin, 
  Compass, 
  Mountain, 
  Sun, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Clock
} from 'lucide-react';
import { destinationsData } from '../data/travelData';

export default function DestinationExplorer({ onSelectDestination }) {
  const [activeState, setActiveState] = useState('himachal');

  const currentDestinations = destinationsData[activeState];

  return (
    <section id="destinations" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
            <Mountain className="w-3.5 h-3.5 text-[#f5b700]" />
            <span>Himachal & Uttarakhand Destination Guides</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight leading-tight">
            Discover Top Destinations in <br />
            <span className="text-[#f5b700] italic font-script text-4xl sm:text-6xl font-normal">
              Devbhumi Himalayas
            </span>
          </h2>
        </div>

        {/* State Toggle Pills */}
        <div className="flex items-center bg-black/40 p-1.5 rounded-full border border-white/10 self-start md:self-auto">
          <button
            onClick={() => setActiveState('himachal')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeState === 'himachal'
                ? 'bg-[#f5b700] text-[#082016] shadow-lg shadow-[#f5b700]/20'
                : 'text-emerald-200/80 hover:text-white'
            }`}
          >
            Himachal Pradesh ({destinationsData.himachal.length})
          </button>
          <button
            onClick={() => setActiveState('uttarakhand')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeState === 'uttarakhand'
                ? 'bg-[#f5b700] text-[#082016] shadow-lg shadow-[#f5b700]/20'
                : 'text-emerald-200/80 hover:text-white'
            }`}
          >
            Uttarakhand ({destinationsData.uttarakhand.length})
          </button>
        </div>
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {currentDestinations.map((dest) => (
          <div
            key={dest.id}
            className="group bg-[#0c2f20]/90 rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-400/40 shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1.5"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={dest.image}
                alt={dest.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c2f20] via-black/30 to-transparent"></div>

              {/* State pill */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#ff5238] text-white shadow-md flex items-center gap-1">
                  <MapPin className="w-3 h-3 fill-white" />
                  {dest.name}
                </span>
              </div>

              {/* Altitude pill */}
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/60 text-white backdrop-blur-md flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-[#f5b700]" />
                  {dest.altitude}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-[#f5b700] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-emerald-300/80 font-medium italic mt-0.5">
                  "{dest.tagline}"
                </p>

                <p className="mt-3 text-xs sm:text-sm text-emerald-100/70 leading-relaxed line-clamp-3">
                  {dest.description}
                </p>

                {/* Popular spots badges */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-wider block mb-2">
                    Must-Visit Attractions:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {dest.popularSpots.slice(0, 4).map((spot, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-white/5 border border-white/10 text-emerald-200/90"
                      >
                        {spot}
                      </span>
                    ))}
                    {dest.popularSpots.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] bg-white/5 text-[#f5b700] font-bold">
                        +{dest.popularSpots.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Best time & Action */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-emerald-200/70 flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-[#f5b700]" />
                  <span>Best: {dest.bestTime.split('(')[0]}</span>
                </div>

                <button
                  onClick={() => onSelectDestination(dest.id)}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#082016] bg-[#f5b700] hover:bg-[#ffc107] transition-all flex items-center gap-1 cursor-pointer"
                >
                  View Packages
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
