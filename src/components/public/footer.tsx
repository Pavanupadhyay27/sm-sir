"use client";

import Link from "next/link";
import { ArrowUp, BookOpen, GraduationCap, Award, ExternalLink, Mail, MapPin, FlaskConical, FileText } from "lucide-react";
import { professorData } from "@/data/professor-data";

const navCols = [
  {
    label: "Academic",
    links: [
      { name: "About & Career",     href: "/about",       icon: GraduationCap },
      { name: "Research Lab",       href: "/research-lab", icon: FlaskConical },
      { name: "Publications",       href: "/publications", icon: BookOpen },
      { name: "Patents",            href: "/patents",      icon: FileText },
    ],
  },
  {
    label: "Profile",
    links: [
      { name: "Awards & Honors", href: "/awards",      icon: Award },
      { name: "Teaching",        href: "/teaching",    icon: BookOpen },
      { name: "Leadership",      href: "/leadership",  icon: GraduationCap },
      { name: "Contact",         href: "/contact",     icon: Mail },
    ],
  },
];

export default function Footer() {
  const p = professorData;

  return (
    <footer className="relative border-t-0 bg-custom-bg mt-auto transition-colors overflow-hidden">
      {/* Gradient top divider */}
      <div className="gradient-divider" />

      {/* Background depth glows */}
      <div className="absolute bottom-0 left-0 w-96 h-64 bg-primary-emerald/4 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-48 bg-accent-gold/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* ── Brand ──────────────────────────────────────────── */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-emerald to-accent-gold flex items-center justify-center text-white font-heading font-bold text-base shadow-lg shadow-primary-emerald/20">
                S
              </div>
              <div>
                <span className="block font-heading text-sm font-bold tracking-tight text-custom-fg">
                  Dr. Smruti Ranjan Das
                </span>
                <span className="block text-[10px] font-mono text-custom-muted tracking-widest uppercase mt-0.5">
                  KIIT University
                </span>
              </div>
            </div>

            <p className="text-xs text-custom-muted leading-relaxed max-w-sm">
              Assistant Professor &amp; Associate Dean (Industry Engagement) at School of Economics &amp; Commerce,
              KIIT Deemed to be University. Championing academic excellence, impact research, and industry-academic synergy.
            </p>

            {/* Contact row */}
            <div className="space-y-2 text-xs text-custom-muted">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-primary-emerald/10 border border-primary-emerald/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 text-primary-emerald" />
                </div>
                <span className="leading-relaxed">{p.personal.office}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-primary-emerald/10 border border-primary-emerald/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 text-primary-emerald" />
                </div>
                <a href={`mailto:${p.personal.email}`} className="hover:text-primary-emerald transition-colors">
                  {p.personal.email}
                </a>
              </div>
            </div>

            {/* Index badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: "Scholar", href: p.personal.googleScholar },
                { label: "Scopus",  href: p.personal.scopus },
                { label: "ORCID",   href: p.personal.orcid },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono text-custom-muted hover:text-primary-emerald border border-custom-border hover:border-primary-emerald/35 hover:bg-primary-emerald/5 px-3 py-1.5 rounded-full transition-all duration-200 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 group-hover:opacity-100 transition-opacity" />
                  {label}
                  <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ────────────────────────────────────── */}
          {navCols.map((col) => (
            <div key={col.label} className="md:col-span-3 md:col-start-auto">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.20em] text-custom-muted/70 mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-gradient-to-r from-primary-emerald/60 to-transparent" />
                {col.label}
              </p>
              <ul className="space-y-2">
                {col.links.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="flex items-center gap-2.5 text-xs text-custom-muted hover:text-primary-emerald transition-all duration-200 group"
                    >
                      <div className="w-5 h-5 rounded-md bg-custom-fg/4 group-hover:bg-primary-emerald/10 border border-transparent group-hover:border-primary-emerald/20 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                        <Icon className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="group-hover:translate-x-0.5 transition-transform duration-200">{name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Bottom bar ─────────────────────────────────────────── */}
        <div className="mt-8 pt-4 border-t border-custom-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-custom-muted font-mono">
          <span className="opacity-70">
            © {new Date().getFullYear()} Dr. Smruti Ranjan Das. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="opacity-40">Designed to WCAG AA · KIIT University</span>
            {/* Back to top — pulsing ring */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative p-2 rounded-full border border-custom-border hover:border-primary-emerald/40 hover:bg-primary-emerald/8 text-custom-fg/60 hover:text-primary-emerald transition-all duration-300 group"
              aria-label="Back to top"
            >
              <span className="absolute inset-0 rounded-full border border-primary-emerald/20 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
