"use client";

import { Award, Trophy, Star, ShieldCheck, Heart } from "lucide-react";
import { professorData } from "@/data/professor-data";
import TiltCard from "@/components/public/tilt-card";

export default function Awards() {
  const p = professorData;

  const categoryIcons: Record<string, React.ReactNode> = {
    National:   <Trophy className="w-6 h-6 text-accent-gold" />,
    State:      <Award  className="w-6 h-6 text-primary-emerald" />,
    University: <Star   className="w-6 h-6 text-blue-400" />,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Honors &amp; Recognition
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Awards &amp; Medals
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Celebrating contributions to national translation tasks, community mobilization, and student leadership development.
        </p>
      </div>

      {/* Grid of Honors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {p.awards.map((aw) => (
          <TiltCard
            key={aw.id}
            intensity={8}
            className="glass p-8 rounded-3xl glow-emerald-hover shimmer-border flex flex-col justify-between"
          >
            {/* Top accent */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/35 to-transparent rounded-t-3xl" />
            {/* Background blur layer */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-tr from-primary-emerald/10 to-transparent blur-2xl pointer-events-none" />

            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-2xl bg-custom-fg/5 flex items-center justify-center border border-custom-border shadow-inner">
                  {categoryIcons[aw.category] || <Trophy className="w-6 h-6 text-accent-gold" />}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-custom-fg bg-custom-fg/5 border border-custom-border px-2.5 py-1 rounded-full">
                    {aw.category} Level
                  </span>
                  <span className="text-xs font-mono font-bold text-primary-emerald bg-primary-emerald/10 border border-primary-emerald/25 px-2.5 py-1 rounded-full">
                    {aw.year}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-heading text-base font-bold text-custom-fg leading-snug">{aw.title}</h3>
                <p className="text-xs text-accent-gold font-semibold">{aw.organization}</p>
              </div>

              <p className="text-xs text-custom-muted leading-relaxed">{aw.description}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-custom-border/50 flex items-center justify-between text-[10px] font-mono text-custom-muted">
              <span>RECOGNITION STATUS</span>
              <span className="flex items-center space-x-1.5 text-primary-emerald font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIALLY CONFERRED</span>
              </span>
            </div>
          </TiltCard>
        ))}
      </div>

      {/* Philosophy box */}
      <TiltCard intensity={5} className="glass p-8 rounded-3xl max-w-4xl mx-auto border border-custom-border shimmer-border">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/35 to-transparent rounded-t-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-bl-full pointer-events-none" />
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 border border-accent-gold/25 flex items-center justify-center text-accent-gold shrink-0">
            <Heart className="w-7 h-7 animate-pulse" />
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-sm font-bold text-custom-fg">Social Responsibility Philosophy</h3>
            <p className="text-xs text-custom-muted leading-relaxed">
              &quot;Honors are not destination points, but reflections of collective work. The NSS state and university recognitions represent hundreds of hours of voluntary labor donated by our student cohorts for rural development, health infrastructure support, and environmental reclamation.&quot;
            </p>
            <span className="block text-[10px] font-mono font-bold text-primary-emerald uppercase pt-1">
              — Dr. Smruti Ranjan Das, NSS Liaison Officer
            </span>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
