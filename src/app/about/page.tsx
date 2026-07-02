"use client";

import { Award, BookOpen, GraduationCap, Compass } from "lucide-react";
import { professorData } from "@/data/professor-data";

export default function About() {
  const p = professorData;

  const philosophies = [
    {
      title: "Teaching Philosophy",
      icon: <GraduationCap className="w-5 h-5" />,
      text: p.about.teachingPhilosophy,
      accent: "border-primary-emerald/25 text-primary-emerald bg-primary-emerald/8",
    },
    {
      title: "Research Philosophy",
      icon: <BookOpen className="w-5 h-5" />,
      text: p.about.researchPhilosophy,
      accent: "border-accent-gold/25 text-accent-gold bg-accent-gold/8",
    },
    {
      title: "Leadership Philosophy",
      icon: <Compass className="w-5 h-5" />,
      text: p.about.leadershipPhilosophy,
      accent: "border-blue-500/25 text-blue-400 bg-blue-500/8",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">

      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 anim-fade-up">
        <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary-emerald">
          Executive Biography
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Dr. Smruti Ranjan Das
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Educator, researcher, and administration leader bridging industry dynamics with academic excellence.
        </p>
      </div>

      {/* Bio + Philosophies */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-start">

        {/* Story column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass p-8 rounded-3xl">
            <h2 className="font-heading text-xl font-bold text-custom-fg mb-4">
              My Academic Journey
            </h2>
            <p className="text-sm text-custom-muted leading-relaxed whitespace-pre-line">
              {p.about.biography}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="glass p-6 rounded-2xl border-l-4 border-l-primary-emerald glow-emerald-hover">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary-emerald mb-2">Mission</p>
              <p className="text-xs text-custom-muted leading-relaxed">{p.about.mission}</p>
            </div>
            <div className="glass p-6 rounded-2xl border-l-4 border-l-accent-gold glow-gold-hover">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-gold mb-2">Vision</p>
              <p className="text-xs text-custom-muted leading-relaxed">{p.about.vision}</p>
            </div>
          </div>
        </div>

        {/* Philosophies column */}
        <div className="lg:col-span-5 space-y-5">
          {philosophies.map((ph, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl glow-emerald-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${ph.accent}`}>
                  {ph.icon}
                </div>
                <h3 className="font-heading text-sm font-bold text-custom-fg">{ph.title}</h3>
              </div>
              <p className="text-xs text-custom-muted leading-relaxed">{ph.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline */}
      <section className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary-emerald">Academic Background</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-custom-fg">Educational Chronology</h2>
          <p className="text-xs text-custom-muted">Specialized commerce certifications and research degrees.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {p.education.map((edu, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl glow-emerald-hover relative group"
            >
              <span className="absolute top-4 right-4 text-[10px] font-mono font-bold text-primary-emerald bg-primary-emerald/10 px-2 py-0.5 rounded-full border border-primary-emerald/20">
                {edu.year}
              </span>
              <div className="w-10 h-10 rounded-xl bg-custom-fg/5 flex items-center justify-center text-custom-muted mb-4 group-hover:text-primary-emerald transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-sm font-bold text-custom-fg leading-snug">{edu.degree}</h3>
              <p className="text-[11px] text-custom-muted mt-1 leading-snug">{edu.institution}</p>
              <p className="text-[10px] text-primary-emerald font-mono mt-3 uppercase tracking-wide">{edu.specialization}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Memberships */}
      <section>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary-emerald">Networks</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-custom-fg">Professional Associations</h2>
          <p className="text-xs text-custom-muted">Active life memberships in recognized commercial and educational networks.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {p.memberships.map((m, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl flex flex-col gap-3 glow-gold-hover">
              <div className="inline-flex items-center gap-2 text-[10px] font-mono text-accent-gold font-bold bg-accent-gold/10 px-2.5 py-1 rounded-full border border-accent-gold/20 w-fit">
                <Award className="w-3 h-3" />
                {m.role}
              </div>
              <h3 className="font-heading text-sm font-bold text-custom-fg">{m.organization}</h3>
              <p className="text-xs text-custom-muted leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
