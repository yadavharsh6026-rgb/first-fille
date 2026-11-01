import React, { useState } from 'react';
import { 
  X, 
  Clock, 
  MapPin, 
  Star, 
  Check, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Bed,
  Utensils,
  ChevronDown,
  AlertCircle
} from 'lucide-react';

export default function ItineraryModal({ pkg, isOpen, onClose, onBookNow }) {
  const [activeTab, setActiveTab] = useState('itinerary');
  const [openDay, setOpenDay] = useState(1);

  if (!isOpen || !pkg) return null;

  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-md cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className="relative aspect-[16/7] sm:aspect-[21/8] overflow-hidden bg-slate-900 flex-shrink-0">
          <img
            src={pkg.coverImage}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          {/* Header Content */}
          <div className="absolute bottom-4 left-4 right-14 sm:bottom-6 sm:left-6 sm:right-16 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#f5b700] text-[#0b2b1d]">
                {pkg.badge || 'Featured'}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md">
                {pkg.region === 'himachal' ? 'Himachal Pradesh' : 'Uttarakhand'}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#f5b700] font-bold">
                <Star className="w-3.5 h-3.5 fill-[#f5b700]" /> {pkg.rating} ({pkg.reviewsCount} reviews)
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-extrabold font-serif-luxury leading-tight text-white line-clamp-2">
              {pkg.title}
            </h2>

            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-200">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#f5b700]" /> {pkg.duration}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#f5b700]" /> {pkg.startEnd}
              </span>
            </div>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex items-center gap-2 px-6 pt-3 pb-2 border-b border-slate-200 bg-slate-50 overflow-x-auto scrollbar-none flex-shrink-0">
          <button
            onClick={() => setActiveTab('itinerary')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'itinerary'
                ? 'bg-[#0d3826] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Day-by-Day Itinerary ({pkg.itinerary.length} Days)
          </button>
          <button
            onClick={() => setActiveTab('inclusions')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'inclusions'
                ? 'bg-[#0d3826] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Inclusions & Exclusions
          </button>
          <button
            onClick={() => setActiveTab('batches')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'batches'
                ? 'bg-[#0d3826] text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            Dates & Batches
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-slate-700">
          
          {/* TAB 1: Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-xs sm:text-sm text-emerald-900">
                <span className="font-bold">Trip Overview: </span>
                {pkg.overview}
              </div>

              <div className="space-y-3">
                {pkg.itinerary.map((dayItem) => {
                  const isExpanded = openDay === dayItem.day;
                  return (
                    <div 
                      key={dayItem.day}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                    >
                      <button
                        onClick={() => setOpenDay(isExpanded ? null : dayItem.day)}
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-[#0d3826] text-[#f5b700] text-xs font-black flex items-center justify-center flex-shrink-0">
                            D{dayItem.day}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-slate-900">
                            {dayItem.title}
                          </span>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {isExpanded && (
                        <div className="px-4 pb-4 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-3">
                          <p className="leading-relaxed">
                            {dayItem.desc}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-slate-100 text-xs">
                            <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                              <Utensils className="w-3.5 h-3.5" />
                              Meals: {dayItem.meals}
                            </span>
                            <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                              <Bed className="w-3.5 h-3.5" />
                              Stay: {dayItem.stay}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Inclusions */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                <h4 className="text-sm font-bold text-emerald-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700" /> What's Included
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                  {pkg.inclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80">
                <h4 className="text-sm font-bold text-rose-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <X className="w-4 h-4 text-rose-700" /> What's Not Included
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950">
                  {pkg.exclusions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-[10px] font-bold mt-0.5 flex-shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {/* TAB 3: Batches & Dates */}
          {activeTab === 'batches' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Upcoming Departure Batches
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.departureDates.map((date, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-[#0d3826]" />
                      <span className="text-sm font-bold text-slate-800">{date}</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                      Seats Available
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3 mt-4">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Custom Dates:</strong> Traveling with friends or family on private dates? We run private departures any day of the week with no surcharge! Click "Book This Package" to choose your custom date.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-4 flex-shrink-0">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xs text-slate-400 line-through">
                {formatINR(pkg.originalPrice)}
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#0d3826]">
                {formatINR(pkg.price)}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Reserve today with 25% token deposit
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="hidden sm:inline-block px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#092317] bg-[#f5b700] hover:bg-[#ffc107] shadow-lg shadow-[#f5b700]/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              Book This Package
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
