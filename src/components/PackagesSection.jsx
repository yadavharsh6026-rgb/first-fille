import React, { useState, useMemo } from 'react';
import PackageCard from './PackageCard';
import { 
  Sparkles, 
  Filter, 
  Search, 
  MapPin, 
  SlidersHorizontal,
  Compass,
  ArrowUpDown
} from 'lucide-react';

export default function PackagesSection({ 
  packages, 
  activeFilter, 
  onFilterChange, 
  onViewItinerary, 
  onBookNow 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filterTabs = [
    { id: 'all', label: 'All Packages' },
    { id: 'himachal', label: 'Himachal Pradesh' },
    { id: 'uttarakhand', label: 'Uttarakhand' },
    { id: 'Spiritual / Chardham', label: 'Chardham & Spiritual' },
    { id: 'Adventure & Treks', label: 'Adventure & Treks' },
    { id: 'Honeymoon', label: 'Honeymoon Specials' },
    { id: 'Family', label: 'Family Holidays' },
  ];

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      // Region/theme tab matching
      if (activeFilter.region && activeFilter.region !== 'all') {
        if (pkg.region !== activeFilter.region) return false;
      }
      if (activeFilter.theme && activeFilter.theme !== 'all') {
        if (pkg.theme !== activeFilter.theme) return false;
      }
      if (activeFilter.duration && activeFilter.duration !== 'all') {
        if (activeFilter.duration === 'short' && pkg.durationDays > 5) return false;
        if (activeFilter.duration === 'medium' && (pkg.durationDays < 6 || pkg.durationDays > 7)) return false;
        if (activeFilter.duration === 'long' && pkg.durationDays < 8) return false;
      }
      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = pkg.title.toLowerCase().includes(query);
        const matchOverview = pkg.overview.toLowerCase().includes(query);
        const matchStart = pkg.startEnd.toLowerCase().includes(query);
        const matchHighlights = pkg.highlights.some(h => h.toLowerCase().includes(query));
        if (!matchTitle && !matchOverview && !matchStart && !matchHighlights) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'duration') return b.durationDays - a.durationDays;
      // Default: popularity by reviews count
      return b.reviewsCount - a.reviewsCount;
    });
  }, [packages, activeFilter, searchQuery, sortBy]);

  const handleTabClick = (tabId) => {
    if (tabId === 'all') {
      onFilterChange({ region: 'all', theme: 'all', duration: 'all' });
    } else if (tabId === 'himachal' || tabId === 'uttarakhand') {
      onFilterChange({ region: tabId, theme: 'all', duration: 'all' });
    } else {
      onFilterChange({ region: 'all', theme: tabId, duration: 'all' });
    }
  };

  const isCurrentTab = (tabId) => {
    if (tabId === 'all') return activeFilter.region === 'all' && activeFilter.theme === 'all';
    if (tabId === 'himachal' || tabId === 'uttarakhand') return activeFilter.region === tabId;
    return activeFilter.theme === tabId;
  };

  return (
    <section id="packages" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-3">
          <Compass className="w-3.5 h-3.5 text-[#f5b700]" />
          <span>Handcrafted Himalayan Itineraries</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif-luxury tracking-tight leading-tight">
          Explore Our Popular <br className="hidden sm:inline" />
          <span className="text-[#f5b700] italic font-script text-4xl sm:text-6xl font-normal">
            Tour & Travel Packages
          </span>
        </h2>
        <p className="mt-3 text-emerald-100/70 text-sm sm:text-base leading-relaxed">
          Carefully curated for Indian travelers. All packages include verified mountain hotels, breakfast & dinner, experienced hill drivers, permits, and 24/7 on-ground assistance.
        </p>
      </div>

      {/* Filter Tabs & Search Control Bar */}
      <div className="space-y-4 mb-10">
        
        {/* Horizontal Category Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => {
            const active = isCurrentTab(tab.id);
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  active
                    ? 'bg-[#f5b700] text-[#082016] shadow-lg shadow-[#f5b700]/20'
                    : 'bg-white/5 text-emerald-200/80 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Secondary controls: Search Input & Sort dropdown */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl backdrop-blur-sm">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Manali, Spiti, Kedarnath, Auli..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-black/30 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-emerald-200/40 focus:outline-none focus:border-[#f5b700]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-300/60 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort & Count */}
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs text-emerald-200/70">
              Showing <span className="font-bold text-white">{filteredPackages.length}</span> curated packages
            </span>

            <div className="flex items-center gap-1.5 bg-black/30 border border-white/10 rounded-xl px-3 py-1.5 text-xs text-emerald-200">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#f5b700]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="popular" className="bg-[#0b2b1d]">Most Popular</option>
                <option value="price-low" className="bg-[#0b2b1d]">Price: Low to High</option>
                <option value="price-high" className="bg-[#0b2b1d]">Price: High to Low</option>
                <option value="duration" className="bg-[#0b2b1d]">Longest Duration</option>
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* Packages Grid */}
      {filteredPackages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onViewItinerary={onViewItinerary}
              onBookNow={onBookNow}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white/5 border border-white/10 rounded-3xl max-w-lg mx-auto">
          <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 flex items-center justify-center text-[#f5b700] mb-4">
            <Filter className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-white">No packages found</h3>
          <p className="mt-2 text-xs sm:text-sm text-emerald-200/70">
            We couldn't find any tour packages matching your active filters. Try clearing your search or switching to "All Packages".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              handleTabClick('all');
            }}
            className="mt-5 px-5 py-2.5 rounded-xl bg-[#f5b700] text-[#0b2b1d] font-bold text-xs shadow-lg cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </section>
  );
}
