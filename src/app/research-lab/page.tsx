"use client";

import { Layers, TrendingUp, BarChart2 } from "lucide-react";
import { professorData } from "@/data/professor-data";
import TiltCard from "@/components/public/tilt-card";

export default function ResearchLab() {
  const p = professorData.researchLab;
  const maxYearlyCitation = Math.max(...p.impact.yearlyCitations.map((yc) => yc.count));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Research Infrastructure
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Research Lab & Impact
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Interactive metrics, citation tracking, and domain mapping charting Dr. Das&apos;s research influence.
        </p>
      </div>

      {/* Analytics Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <TiltCard intensity={9} className="glass p-8 rounded-3xl flex flex-col justify-between shimmer-border glow-emerald-hover">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/35 to-transparent rounded-t-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-emerald/5 to-transparent pointer-events-none rounded-3xl" />
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-custom-muted uppercase tracking-wider">Research Index</span>
            <TrendingUp className="w-5 h-5 text-primary-emerald" />
          </div>
          <div>
            <span className="text-5xl font-mono font-bold text-custom-fg block mb-2">{p.impact.totalCitations}</span>
            <span className="text-xs text-custom-muted">Total Google Scholar Citations</span>
          </div>
        </TiltCard>

        <TiltCard intensity={9} className="glass p-8 rounded-3xl flex flex-col justify-between shimmer-border glow-gold-hover">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/35 to-transparent rounded-t-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-transparent pointer-events-none rounded-3xl" />
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-custom-muted uppercase tracking-wider">Metrics Depth</span>
            <BarChart2 className="w-5 h-5 text-accent-gold" />
          </div>
          <div>
            <span className="text-5xl font-mono font-bold text-custom-fg block mb-2">{p.impact.hIndex}</span>
            <span className="text-xs text-custom-muted">h-index (Citations Benchmark)</span>
          </div>
        </TiltCard>

        <TiltCard intensity={9} className="glass p-8 rounded-3xl flex flex-col justify-between shimmer-border">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent rounded-t-3xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none rounded-3xl" />
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-custom-muted uppercase tracking-wider">Broad Influence</span>
            <Layers className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <span className="text-5xl font-mono font-bold text-custom-fg block mb-2">{p.impact.i10Index}</span>
            <span className="text-xs text-custom-muted">i10-index (Papers with &gt;10 citations)</span>
          </div>
        </TiltCard>
      </div>

      {/* Domain mapping and visualizer */}
      <div className="mb-20">
        {/* Full-Width Citation Growth Chart */}
        <TiltCard intensity={4} className="glass p-8 sm:p-10 rounded-3xl shimmer-border glow-emerald-hover">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-emerald/5 to-transparent pointer-events-none" />
          
          <div className="max-w-3xl mb-10 space-y-2">
            <h3 className="font-heading text-xl font-bold text-custom-fg">
              Citation Growth Analytics
            </h3>
            <p className="text-xs text-custom-muted leading-relaxed">
              A chronological tracking of citation metrics, illustrating acceleration in academic impact and publications reach.
            </p>
          </div>

          {/* Premium Custom Analytics Bar Chart */}
          <div className="flex space-x-6 h-56 items-end w-full relative z-10 select-none">
            {/* Y-Axis Labels */}
            <div className="flex flex-col justify-between h-48 text-[9px] font-mono text-custom-muted/65 w-8 pr-2 pb-1 border-r border-custom-border/40 select-none">
              <span className="font-bold">120+</span>
              <span>90</span>
              <span>60</span>
              <span>30</span>
              <span>0</span>
            </div>

            {/* Grid & Chart Columns Area */}
            <div className="flex-1 h-56 flex flex-col justify-end relative">
              {/* Background Reference Gridlines */}
              <div className="absolute inset-x-0 bottom-0 h-48 flex flex-col justify-between pointer-events-none z-0">
                <div className="w-full border-t border-dashed border-custom-border/45" />
                <div className="w-full border-t border-dashed border-custom-border/45" />
                <div className="w-full border-t border-dashed border-custom-border/45" />
                <div className="w-full border-t border-dashed border-custom-border/45" />
                <div className="w-full" />
              </div>

              {/* Bars Container */}
              <div className="flex items-end justify-between h-48 w-full px-4 sm:px-12 relative z-10">
                {p.impact.yearlyCitations.map((yc) => {
                  const pct = (yc.count / maxYearlyCitation) * 100;
                  return (
                    <div key={yc.year} className="flex flex-col items-center justify-end h-full flex-1 group/bar relative">
                      {/* Tooltip */}
                      <span className="absolute bottom-full mb-3 opacity-0 group-hover/bar:opacity-100 transition-all duration-200 bg-custom-fg text-custom-bg text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-lg leading-none whitespace-nowrap z-30 translate-y-2 group-hover/bar:translate-y-0">
                        {yc.count} Citations
                      </span>

                      {/* Permanent Citation Count Header */}
                      <span className="text-[10px] font-mono font-bold text-custom-muted/65 group-hover/bar:text-primary-emerald mb-1.5 transition-colors z-20">
                        {yc.count}
                      </span>
                      
                      {/* Bar with gradient, border, underglow, and hover expansion */}
                      <div
                        style={{ height: `${pct * 0.8}%` }}
                        className="w-10 sm:w-14 rounded-t-xl bg-gradient-to-t from-primary-emerald/10 via-primary-emerald/70 to-primary-emerald border border-primary-emerald/40 shadow-[0_-4px_20px_rgba(5,150,105,0.08)] group-hover/bar:from-accent-gold/20 group-hover/bar:via-accent-gold/80 group-hover/bar:to-accent-gold group-hover/bar:border-accent-gold/60 transition-all duration-500 relative overflow-hidden"
                      >
                        {/* Top glowing shine effect line */}
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-white/20 dark:bg-white/40" />
                        
                        {/* Glass reflection gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* X-Axis Labels */}
              <div className="flex justify-between px-4 sm:px-12 mt-4 text-[10px] font-mono text-custom-muted uppercase border-t border-custom-border/40 pt-2">
                {p.impact.yearlyCitations.map((yc) => (
                  <span key={yc.year} className="flex-1 text-center font-bold">
                    {yc.year}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* Expanded research detail list */}
      <div className="space-y-8">
        <h3 className="font-heading text-xl font-bold text-custom-fg mb-4">
          Detailed Research Domain Focus
        </h3>
        
        <div className="grid grid-cols-1 gap-6">
          {p.domains.map((d) => (
            <TiltCard
              key={d.id}
              intensity={6}
              className="glass p-8 rounded-3xl glow-emerald-hover shimmer-border"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/28 to-transparent rounded-t-3xl" />
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <h4 className="font-heading text-base font-bold text-custom-fg group-hover:text-primary-emerald transition-colors">
                    {d.title}
                  </h4>
                  <p className="text-xs text-custom-muted leading-relaxed">{d.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.keywords.map((kw, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md text-[9px] font-mono bg-custom-fg/5 text-custom-muted border border-custom-border">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4 grid grid-cols-2 gap-4 border-l border-custom-border/50 pl-6 shrink-0">
                  <div>
                    <span className="text-[9px] font-mono text-custom-muted block uppercase">Papers</span>
                    <span className="text-xl font-bold font-mono text-custom-fg">{d.publicationsCount}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-custom-muted block uppercase">Est. Citations</span>
                    <span className="text-xl font-bold font-mono text-primary-emerald">{d.citations}</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}
