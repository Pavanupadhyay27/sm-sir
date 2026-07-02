"use client";

import { useState, useMemo } from "react";
import { Search, Filter, BookOpen, Clock, ExternalLink } from "lucide-react";
import { professorData } from "@/data/professor-data";
import TiltCard from "@/components/public/tilt-card";

export default function Publications() {
  const p = professorData;
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"year-desc" | "year-asc" | "citations">("year-desc");

  // Unique publication types
  const categories = useMemo(() => {
    const types = new Set(p.publications.map((pub) => pub.type));
    return ["All", ...Array.from(types)];
  }, [p.publications]);

  // Filtering & Sorting Logic
  const filteredAndSortedPublications = useMemo(() => {
    let result = [...p.publications];

    // Text Search filter
    if (searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (pub) =>
          pub.title.toLowerCase().includes(q) ||
          pub.authors.toLowerCase().includes(q) ||
          pub.journalOrBook.toLowerCase().includes(q) ||
          pub.publisher.toLowerCase().includes(q)
      );
    }

    // Category Type filter
    if (activeFilter !== "All") {
      result = result.filter((pub) => pub.type === activeFilter);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "year-desc") return b.year - a.year;
      if (sortBy === "year-asc") return a.year - b.year;
      if (sortBy === "citations") return b.citations - a.citations;
      return 0;
    });

    return result;
  }, [p.publications, searchTerm, activeFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Research Output
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Academic Publications
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Search and filter peer-reviewed articles, books, proceedings, and research chapters.
        </p>
      </div>

      {/* Control Panel: Search & Sort */}
      <div className="glass p-6 rounded-3xl mb-8 space-y-6 shimmer-border">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Search bar */}
          <div className="md:col-span-7 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-custom-muted" />
            <input
              type="text"
              placeholder="Search by title, author, journal, DOI..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-custom-bg/50 border border-custom-border text-xs rounded-xl pl-10 pr-4 py-3 text-custom-fg placeholder-custom-muted focus:outline-none focus:border-primary-emerald transition-colors"
            />
          </div>

          {/* Sort selection */}
          <div className="md:col-span-5 relative flex items-center space-x-2">
            <span className="text-[10px] font-mono text-custom-muted uppercase shrink-0">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "year-desc" | "year-asc" | "citations")}
              className="w-full bg-custom-bg/50 border border-custom-border text-xs rounded-xl px-4 py-3 text-custom-fg focus:outline-none focus:border-primary-emerald transition-colors appearance-none cursor-pointer"
            >
              <option value="year-desc">Year (Newest First)</option>
              <option value="year-asc">Year (Oldest First)</option>
              <option value="citations">Citations (Most First)</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-custom-border/50">
          <span className="text-[10px] font-mono text-custom-muted uppercase mr-2 flex items-center space-x-1">
            <Filter className="w-3 h-3" />
            <span>Filter:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-[10px] font-semibold tracking-wide uppercase transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-primary-emerald text-white shadow-md shadow-primary-emerald/10"
                  : "bg-custom-fg/5 text-custom-muted hover:text-custom-fg hover:bg-custom-fg/10 border border-custom-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Publications Listing Table */}
      <div className="space-y-4">
        {filteredAndSortedPublications.length > 0 ? (
          filteredAndSortedPublications.map((pub) => (
            <TiltCard
              key={pub.id}
              intensity={5}
              className="glass p-6 sm:p-8 rounded-2xl glow-emerald-hover shimmer-border"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/25 to-transparent rounded-t-2xl" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-2 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-primary-emerald bg-primary-emerald/10 px-2 py-0.5 rounded border border-primary-emerald/25 uppercase">
                      {pub.type}
                    </span>
                    <span className="text-[9px] font-mono text-custom-muted flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{pub.year}</span>
                    </span>
                    {pub.doi && (
                      <span className="text-[9px] font-mono text-custom-muted hidden md:inline">
                        DOI: {pub.doi}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading text-sm sm:text-base font-bold text-custom-fg group-hover:text-primary-emerald transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  <p className="text-xs text-custom-muted leading-relaxed">
                    <span className="font-semibold text-custom-fg/90">{pub.authors}</span>
                    <span className="mx-1.5">•</span>
                    <span className="italic">{pub.journalOrBook}</span>
                  </p>

                  <p className="text-[10px] text-custom-muted font-mono leading-none">
                    PUBLISHER: {pub.publisher}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 shrink-0 sm:pt-1">
                  <div className="text-left sm:text-right">
                    <span className="text-[9px] font-mono text-custom-muted block uppercase leading-none mb-1">Citations</span>
                    <span className="text-xs font-bold font-mono text-custom-fg bg-custom-fg/5 px-2.5 py-1 rounded border border-custom-border">
                      {pub.citations}
                    </span>
                  </div>
                  {(pub.link || pub.doi) && (
                    <a
                      href={pub.link || `https://doi.org/${pub.doi}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[10px] font-bold text-primary-emerald hover:text-primary-emerald/80 transition-colors bg-primary-emerald/10 border border-primary-emerald/20 px-3 py-1.5 rounded-full"
                    >
                      <span>Explore Publisher</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          ))
        ) : (
          <TiltCard intensity={4} className="text-center py-20 glass rounded-3xl shimmer-border">
            <BookOpen className="w-12 h-12 text-custom-muted mx-auto mb-4" />
            <h3 className="text-sm font-bold text-custom-fg">No Publications Found</h3>
            <p className="text-xs text-custom-muted mt-1">
              Adjust your search keywords or select a different filter category.
            </p>
          </TiltCard>
        )}
      </div>
    </div>
  );
}
