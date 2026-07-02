"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Cpu, Download, ExternalLink, FlaskConical, Quote, Shield } from "lucide-react";
import { professorData } from "@/data/professor-data";
import StatsCounter from "@/components/home/stats-counter";
import TiltCard from "@/components/public/tilt-card";

export default function Home() {
  const p = professorData;

  return (
    <div className="w-full relative">

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden">

        {/* Hero ambient backdrop */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-primary-emerald/5 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-accent-gold/4 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Portrait Card with 3D tilt */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1 anim-fade-in">
              <div className="relative w-80 sm:w-[380px] group">
                <TiltCard
                  intensity={12}
                  wrapperClassName="w-full"
                  className="w-full rounded-2xl overflow-visible"
                >
                  {/* Image — glow border applied directly via box-shadow on hover */}
                  <div
                    className="relative w-full rounded-2xl overflow-hidden z-[2] transition-all duration-500
                      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                      group-hover:shadow-[0_0_0_3px_#059669,0_0_28px_rgba(5,150,105,0.6),0_0_60px_rgba(5,150,105,0.28),0_0_90px_rgba(202,138,4,0.14)]"
                    style={{ aspectRatio: "400/515" }}
                  >
                    <Image
                      src="https://faculty.kiit.ac.in/wp-content/uploads/2024/08/Economics_smrutiranjan-400x515.webp"
                      alt="Dr. Smruti Ranjan Das"
                      fill
                      priority
                      className="object-cover object-top"
                    />
                    {/* Inner top sheen */}
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent z-10 pointer-events-none" />
                    {/* Status badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/55 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[9px] font-mono text-white uppercase tracking-widest">Active Research</span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>

            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-7 order-1 lg:order-2 text-center lg:text-left">

              <div className="space-y-3 anim-fade-up">
                <p className="text-xs font-bold tracking-[0.2em] text-primary-emerald uppercase font-mono">
                  Dr. Smruti Ranjan Das
                </p>
                <div className="inline-flex items-center gap-2 bg-primary-emerald/10 border border-primary-emerald/25 px-4 py-1.5 rounded-full text-xs font-semibold text-primary-emerald tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
                  Associate Dean — School of Economics &amp; Commerce, KIIT
                </div>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-custom-fg leading-[1.08] anim-fade-up-d1">
                Bridging Academic<br />
                <span className="gradient-text">
                  Excellence &amp; Industry
                </span>
              </h1>

              <p className="text-sm sm:text-base text-custom-muted leading-relaxed max-w-xl mx-auto lg:mx-0 anim-fade-up-d2">
                Assistant Professor &amp; Associate Dean of Industry Engagement at KIIT University —
                conducting behavior-centric commerce research and leading state-level community development.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1 anim-fade-up-d3">
                <Link
                  href="/research-lab"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-emerald to-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-primary-emerald/25 hover:shadow-primary-emerald/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300"
                >
                  Explore Research Lab
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={p.personal.cvLink}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold glass border border-custom-border text-custom-fg hover:bg-custom-fg/5 flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 shimmer-border"
                >
                  <Download className="w-4 h-4 text-accent-gold" />
                  Download Curriculum Vitae
                </a>
              </div>

              {/* Scholar Links */}
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 anim-fade-up-d4">
                <span className="text-[10px] font-mono text-custom-muted tracking-widest uppercase">Indexed at</span>
                <a
                  href={p.personal.googleScholar}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-custom-fg/60 hover:text-primary-emerald transition-colors"
                >
                  Google Scholar <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={p.personal.scopus}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-custom-fg/60 hover:text-primary-emerald transition-colors"
                >
                  Scopus ID <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Stats Bar ────────────────────────────────────────────── */}
      <section className="py-10 border-y border-custom-border relative z-10 bg-custom-card/20 backdrop-blur-sm">
        {/* Gradient divider top */}
        <div className="absolute top-0 inset-x-0 gradient-divider" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-custom-border">
            {p.stats.map((s, idx) => (
              <div key={idx} className="px-6 first:pl-0 last:pr-0 flex flex-col items-center text-center py-2 group">
                <StatsCounter value={s.value} label={s.label} />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 gradient-divider" />
      </section>

      {/* ── Research Domains ─────────────────────────────────────── */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-emerald font-mono">Active Research Lab</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-custom-fg tracking-tight">
              Pioneering Knowledge Domains
            </h2>
            <p className="text-sm text-custom-muted leading-relaxed">
              High-impact empirical investigations across management, commerce, and sustainable consumer behaviors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.researchLab.domains.map((d, idx) => {
              const icons = [FlaskConical, BookOpen, Cpu, Shield];
              const Icon = icons[idx % icons.length];
              return (
                <TiltCard
                  key={d.id}
                  intensity={8}
                  className="glass p-8 rounded-3xl glow-emerald-hover relative overflow-hidden shimmer-border"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-emerald/5 via-transparent to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

                  {/* Top accent line */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/40 to-transparent" />

                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-emerald/15 to-primary-emerald/5 border border-primary-emerald/20 flex items-center justify-center text-primary-emerald flex-shrink-0 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] font-mono text-custom-muted uppercase tracking-wider block">Published</span>
                      <span className="font-mono text-lg font-bold text-custom-fg">{d.publicationsCount}</span>
                      <span className="text-[9px] font-mono text-custom-muted ml-1">papers</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-custom-fg mb-2 group-hover:text-primary-emerald transition-colors duration-300">
                    {d.title}
                  </h3>
                  <p className="text-xs text-custom-muted leading-relaxed mb-6">
                    {d.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {d.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-custom-fg/5 text-custom-muted border border-custom-border hover:border-primary-emerald/30 hover:text-primary-emerald transition-colors cursor-default"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/research-lab"
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary-emerald hover:text-primary-emerald/80 transition-colors group"
            >
              Explore Analytics &amp; Citation Networks
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Patents ──────────────────────────────────────────────── */}
      <section className="py-24 bg-custom-card/10 border-t border-custom-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

            <div className="lg:col-span-4 space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-gold font-mono">IPR &amp; Innovation</p>
              <h2 className="font-heading text-3xl font-extrabold text-custom-fg tracking-tight">
                Awarded Patents
              </h2>
              <p className="text-sm text-custom-muted leading-relaxed">
                Transforming theoretical behavior analytics into intellectual property.
                Dr. Das holds two Indian patents for automated consumer sentiment prediction
                and cognitive organizational behavior architectures.
              </p>
              <Link
                href="/patents"
                className="inline-flex items-center gap-2 text-xs font-semibold text-accent-gold hover:text-accent-gold-light transition-colors group pt-1"
              >
                View Full Patent Details
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {p.patents.map((pat) => (
                <TiltCard
                  key={pat.number}
                  intensity={8}
                  className="glass p-6 rounded-2xl glow-gold-hover flex flex-col justify-between gap-4 shimmer-border"
                >
                  {/* Top accent */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono text-accent-gold font-bold bg-accent-gold/10 px-2.5 py-1 rounded-full border border-accent-gold/20">
                        {pat.status}
                      </span>
                      <span className="text-[10px] font-mono text-custom-muted">{pat.year}</span>
                    </div>
                    <h3 className="font-heading text-sm font-bold text-custom-fg mb-2 line-clamp-2 leading-snug">
                      {pat.title}
                    </h3>
                    <p className="text-[11px] text-custom-muted line-clamp-3 leading-relaxed">
                      {pat.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-custom-border/50 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-custom-muted uppercase tracking-wider">Patent No.</span>
                    <span className="text-[10px] font-mono font-bold text-custom-fg">{pat.number}</span>
                  </div>
                </TiltCard>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Leadership Banner ─────────────────────────────────────── */}
      <section className="py-24 border-t border-custom-border relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-primary-emerald/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-gold/4 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TiltCard
            intensity={5}
            className="glass rounded-3xl p-8 sm:p-12 border border-custom-border/80 relative overflow-hidden shimmer-border"
          >
            {/* Accent top */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/40 to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-emerald font-mono">Administration &amp; Leadership</p>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-custom-fg tracking-tight">
                  Driving Outreach, Student Welfare &amp; Corporate Linkages
                </h2>
                <p className="text-sm text-custom-muted leading-relaxed max-w-2xl">
                  As Associate Dean (Industry Engagement), NSS Liaison Officer, and Faculty In Charge of Student Affairs,
                  Dr. Das manages crucial wings of KIIT University with community mobilization programs
                  driving social welfare and deep industry partnerships.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-2">
                  {[
                    { value: "5+", label: "Villages Adopted" },
                    { value: "2000+", label: "Blood Units Donated" },
                    { value: "35+", label: "Corporate Partners" },
                  ].map((item) => (
                    <div key={item.label}>
                      <span className="block text-2xl font-bold font-mono text-primary-emerald">{item.value}</span>
                      <span className="text-[10px] text-custom-muted uppercase tracking-wider leading-tight block mt-0.5">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  href="/leadership"
                  className="w-full text-center px-5 py-3.5 rounded-full text-sm font-semibold bg-custom-fg text-custom-bg hover:bg-custom-fg/90 transition-all shadow-md hover:-translate-y-0.5 hover:scale-105 duration-300"
                >
                  View Administration Roles
                </Link>
                <Link
                  href="/awards"
                  className="w-full text-center px-5 py-3.5 rounded-full text-sm font-semibold glass border border-custom-border text-custom-fg hover:bg-custom-fg/5 transition-all hover:-translate-y-0.5 hover:scale-105 duration-300 shimmer-border"
                >
                  Browse Honor Awards
                </Link>
              </div>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-custom-border relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-emerald font-mono">Testimonials</p>
            <h2 className="font-heading text-3xl font-extrabold text-custom-fg tracking-tight">
              Words of Recognition
            </h2>
            <p className="text-sm text-custom-muted">
              Feedback from students, distinguished administrators, and corporate partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.testimonials.map((t) => (
              <TiltCard
                key={t.id}
                intensity={7}
                className="glass p-8 rounded-3xl glow-emerald-hover shimmer-border"
              >
                {/* Accent top */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/30 to-transparent" />

                <div>
                  <Quote className="w-8 h-8 text-primary-emerald/30 mb-4" />
                  <p className="text-sm text-custom-fg/80 leading-relaxed italic">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-custom-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-emerald/25 to-accent-gold/25 flex items-center justify-center text-xs font-bold font-mono text-primary-emerald border border-custom-border flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-custom-fg leading-none">{t.name}</p>
                    <p className="text-[10px] text-custom-muted mt-1">{t.role}, {t.organization}</p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
