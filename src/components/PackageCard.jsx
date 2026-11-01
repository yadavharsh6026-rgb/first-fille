import React from 'react';
import { 
  Clock, 
  MapPin, 
  Star, 
  Check, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  Users
} from 'lucide-react';

export default function PackageCard({ pkg, onViewItinerary, onBookNow }) {
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1">
      
      {/* Cover Image Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={pkg.coverImage}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {pkg.badge && (
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#f5b700] text-[#0b2b1d] shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {pkg.badge}
            </span>
          )}
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md uppercase tracking-wider text-[10px]">
            {pkg.region === 'himachal' ? 'Himachal' : 'Uttarakhand'}
          </span>
        </div>

        {/* Duration Pill on top right */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-slate-800 shadow-md flex items-center gap-1.5 backdrop-blur-md">
            <Clock className="w-3.5 h-3.5 text-[#0d3826]" />
            {pkg.duration}
          </span>
        </div>

        {/* Bottom overlay: Pickup & Rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1 bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-sm">
            <MapPin className="w-3 h-3 text-[#f5b700]" />
            <span className="truncate max-w-[180px]">{pkg.startEnd}</span>
          </div>

          <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full backdrop-blur-sm font-semibold">
            <Star className="w-3.5 h-3.5 fill-[#f5b700] text-[#f5b700]" />
            <span>{pkg.rating}</span>
            <span className="text-white/70">({pkg.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0d3826] transition-colors leading-snug line-clamp-2">
            {pkg.title}
          </h3>

          {/* Quick hotel & meal badge */}
          <div className="mt-2.5 flex items-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
            <span className="truncate">{pkg.hotelCategory} • {pkg.mealPlan}</span>
          </div>

          {/* Highlights checklist */}
          <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
            {pkg.highlights.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          {/* Price */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xs text-slate-400 line-through">
                {formatINR(pkg.originalPrice)}
              </span>
              <span className="text-xl sm:text-2xl font-black text-[#0d3826]">
                {formatINR(pkg.price)}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              per person (taxes incl.)
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewItinerary(pkg)}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Itinerary
            </button>
            <button
              onClick={() => onBookNow(pkg)}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#092317] bg-[#f5b700] hover:bg-[#ffc107] shadow-md shadow-[#f5b700]/20 transition-all flex items-center gap-1 cursor-pointer"
            >
              Book Now
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
