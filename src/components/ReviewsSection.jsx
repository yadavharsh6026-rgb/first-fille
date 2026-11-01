import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, MapPin } from 'lucide-react';
import { reviewsData } from '../data/travelData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
          <Star className="w-3.5 h-3.5 fill-[#f5b700] text-[#f5b700]" />
          <span>Real Stories from Indian Travelers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight leading-tight">
          Loved by Couples, Families & <br />
          <span className="text-[#f5b700] italic font-script text-4xl sm:text-6xl font-normal">
            Adventure Enthusiasts
          </span>
        </h2>
        <p className="mt-3 text-emerald-100/70 text-sm sm:text-base leading-relaxed">
          Over 98% of our travelers recommend Himshikhar Escapes for smooth logistics, warm hospitality, and reliable hill driving.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {reviewsData.map((review) => (
          <div
            key={review.id}
            className="bg-[#0b291c] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between transition-all hover:border-emerald-400/30"
          >
            <div>
              {/* Stars & Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#f5b700] text-[#f5b700]" />
                  ))}
                </div>
                <span className="text-xs text-emerald-300/60 font-medium">{review.date}</span>
              </div>

              {/* Comment */}
              <p className="text-sm sm:text-base text-emerald-50/90 leading-relaxed italic mb-6">
                "{review.comment}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#f5b700]"
                />
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    {review.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xs text-emerald-300/70 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#f5b700]" />
                    {review.location}
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300 max-w-[150px] truncate">
                {review.tour}
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* Google Review Badge */}
      <div className="mt-10 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm text-white font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
          <span>Google Review Rating: <strong>4.9 / 5.0</strong> based on 1,420+ authentic reviews</span>
        </div>
      </div>

    </section>
  );
}
