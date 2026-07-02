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
    <footer className="border-t border-custom-border bg-custom-bg mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-emerald to-accent-gold flex items-center justify-center text-white font-heading font-bold text-sm shadow-md shadow-primary-emerald/15">
                S
              </div>
              <span className="font-heading text-sm font-bold tracking-tight text-custom-fg">
                Dr. Smruti Ranjan Das
              </span>
            </div>
            <p className="text-xs text-custom-muted leading-relaxed max-w-sm">
              Assistant Professor &amp; Associate Dean (Industry Engagement) at School of Economics &amp; Commerce,
              KIIT Deemed to be University. Championing academic excellence, impact research, and industry-academic synergy.
            </p>

            {/* Contact row */}
            <div className="space-y-2 text-xs text-custom-muted">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary-emerald shrink-0 mt-0.5" />
                <span>{p.personal.office}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary-emerald shrink-0" />
                <a href={`mailto:${p.personal.email}`} className="hover:text-primary-emerald transition-colors">
                  {p.personal.email}
                </a>
              </div>
            </div>

            {/* Index badges */}
            <div className="flex flex-wrap gap-3 pt-1">
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
                  className="inline-flex items-center gap-1 text-[10px] font-mono text-custom-muted hover:text-primary-emerald border border-custom-border hover:border-primary-emerald/30 px-2.5 py-1 rounded-full transition-colors"
                >
                  {label} <ExternalLink className="w-2.5 h-2.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.label} className="md:col-span-3">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-custom-muted mb-4">
                {col.label}
              </p>
              <ul className="space-y-2.5">
                {col.links.map(({ name, href, icon: Icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-xs text-custom-muted hover:text-primary-emerald transition-colors group"
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-custom-border flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-custom-muted font-mono">
          <span>© {new Date().getFullYear()} Dr. Smruti Ranjan Das. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="opacity-60">Designed to WCAG AA · KIIT University</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 rounded-full border border-custom-border hover:bg-custom-fg/5 text-custom-fg/70 hover:text-custom-fg transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
