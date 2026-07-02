"use client";

import { Lightbulb, Scale, Cpu } from "lucide-react";
import { professorData } from "@/data/professor-data";
import TiltCard from "@/components/public/tilt-card";

export default function Patents() {
  const p = professorData;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-accent-gold font-heading">
          Intellectual Property
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Patents &amp; Innovations
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Awarded intellectual property protections translating behavioural theories into computer-implemented system architectures.
        </p>
      </div>

      {/* Patent Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {p.patents.map((pat) => (
          <TiltCard
            key={pat.number}
            intensity={8}
            className="glass p-8 rounded-3xl glow-gold-hover shimmer-border flex flex-col justify-between"
          >
            {/* Top accent line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent rounded-t-3xl" />
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-6">
              {/* Badges and Year */}
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold border border-accent-gold/20">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-accent-gold bg-accent-gold/10 px-3 py-1 rounded-full border border-accent-gold/15">
                    {pat.status}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-custom-muted">FILING YEAR: {pat.year}</span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-lg font-bold text-custom-fg leading-snug">
                {pat.title}
              </h3>

              {/* Description */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-custom-muted uppercase tracking-wider block">
                  Innovation Abstract:
                </span>
                <p className="text-xs text-custom-muted leading-relaxed">
                  {pat.description}
                </p>
              </div>

              {/* Technical block */}
              <div className="bg-custom-bg/50 border border-custom-border/80 rounded-xl p-4 space-y-2">
                <span className="text-[9px] font-mono text-accent-gold font-semibold uppercase tracking-wider flex items-center space-x-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Integrated Modules:</span>
                </span>
                <p className="text-[10px] text-custom-muted leading-relaxed font-mono">
                  {pat.number === "202531007532A"
                    ? "Cognitive Profiling Algorithm • Social Feedback Integrator • Workplace Environment Recommender • Real-time Behavior Analytics Pipeline"
                    : "Semantic Stream Scraper • Sentiment Probability Calculator • Dynamic Pricing Controller • Ad Optimization Loop • E-Commerce Sync Hook"
                  }
                </p>
              </div>
            </div>

            {/* Bottom ID Bar */}
            <div className="pt-6 mt-8 border-t border-custom-border/50 flex items-center justify-between">
              <span className="text-[10px] font-mono text-custom-muted font-semibold">PATENT IDENTIFIER</span>
              <span className="text-xs font-mono font-bold text-custom-fg bg-custom-fg/5 px-3 py-1 rounded border border-custom-border">
                {pat.number}
              </span>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Disclaimer */}
      <TiltCard intensity={5} className="glass p-6 sm:p-8 rounded-2xl border border-custom-border text-center max-w-4xl mx-auto shimmer-border">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-custom-border/80 to-transparent rounded-t-2xl" />
        <Scale className="w-8 h-8 text-custom-muted mx-auto mb-4" />
        <h3 className="font-heading text-sm font-bold text-custom-fg mb-2">Intellectual Property Protection</h3>
        <p className="text-xs text-custom-muted leading-relaxed max-w-2xl mx-auto">
          All patent specifications, technical flowcharts, and methodologies are registered and protected under the Indian Patent Act. For academic collaborations or technology licensing requests, please contact the Associate Dean office directly.
        </p>
      </TiltCard>
    </div>
  );
}
