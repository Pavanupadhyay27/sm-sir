"use client";

import { useState } from "react";
import { Camera, Image as ImageIcon, X, ZoomIn, Calendar } from "lucide-react";
import { professorData } from "@/data/professor-data";

export default function Gallery() {
  const p = professorData;
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof p.gallery[0] | null>(null);

  const categories = ["All", "Campus", "NSS", "Seminars", "Convocation", "Awards", "Outreach"];

  const filteredGallery = p.gallery.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  // Gradient definitions for visual abstract representations of gallery photos
  const categoryGradients: Record<string, string> = {
    Campus: "from-emerald-950 via-teal-900 to-zinc-950",
    NSS: "from-amber-950 via-orange-900 to-zinc-950",
    Seminars: "from-blue-950 via-indigo-900 to-zinc-950",
    Convocation: "from-purple-950 via-violet-900 to-zinc-950",
    Awards: "from-yellow-950 via-amber-950 to-zinc-950",
    Outreach: "from-rose-950 via-red-900 to-zinc-950",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Visual Archives
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Platform Gallery
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Glimpses of convocation ceremonies, senate conferences, NSS outreach workshops, and international symposiums.
        </p>
      </div>

      {/* Filter Menu */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
              activeFilter === cat
                ? "bg-primary-emerald text-white shadow-md shadow-primary-emerald/10"
                : "glass text-custom-muted hover:text-custom-fg border border-custom-border hover:bg-custom-fg/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout (Gradients + Icons representing actual photographs) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGallery.map((item) => {
          const grad = categoryGradients[item.category] || "from-zinc-900 to-zinc-950";
          return (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="glass rounded-3xl overflow-hidden border border-custom-border hover:border-primary-emerald/20 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-80"
            >
              {/* Graphic Area */}
              <div className={`flex-1 w-full bg-gradient-to-tr ${grad} relative flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-[1.01]`}>
                {/* Visual accents */}
                <div className="absolute inset-0 bg-custom-bg/10 opacity-30 group-hover:opacity-0 transition-opacity" />
                <div className="absolute top-4 left-4 text-[9px] font-mono text-white/50 bg-white/10 px-2 py-0.5 rounded border border-white/10 uppercase">
                  {item.category}
                </div>
                
                {/* Central graphic representing a camera view */}
                <div className="flex flex-col items-center space-y-3 text-white/70 group-hover:text-primary-emerald transition-colors">
                  <ImageIcon className="w-10 h-10 stroke-[1.25]" />
                  <span className="text-[10px] font-mono tracking-widest uppercase">Click to expand</span>
                </div>

                {/* Corner light reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Description Details */}
              <div className="p-5 border-t border-custom-border/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-custom-fg group-hover:text-primary-emerald transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[9px] text-custom-muted font-mono uppercase tracking-wider block mt-1">
                    {item.category} Module
                  </span>
                </div>
                <div className="w-7 h-7 rounded-full bg-custom-fg/5 border border-custom-border flex items-center justify-center text-custom-muted group-hover:text-primary-emerald group-hover:border-primary-emerald/30 transition-colors">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all duration-300">
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:scale-105 transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Expanded Modal Box */}
          <div className="w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            {/* Visual gradient viewport */}
            <div className={`h-[50vh] sm:h-[60vh] bg-gradient-to-tr ${categoryGradients[selectedImage.category] || "from-zinc-900 to-zinc-950"} flex flex-col items-center justify-center relative p-8`}>
              <Camera className="w-16 h-16 text-white/20 stroke-[1.25] mb-4" />
              <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
                {selectedImage.category} Archival Record
              </span>
              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/40 flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>KIIT Deemed to be University</span>
              </div>
            </div>

            {/* Info bar */}
            <div className="p-6 bg-zinc-900 border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-accent-gold uppercase tracking-wider block">
                  {selectedImage.category} Archive
                </span>
                <h3 className="text-base font-heading font-extrabold mt-1">
                  {selectedImage.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-white/95 text-center transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
