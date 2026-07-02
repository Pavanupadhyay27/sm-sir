"use client";

import { MapPin } from "lucide-react";
import { professorData } from "@/data/professor-data";
import TiltCard from "@/components/public/tilt-card";

export default function Teaching() {
  const p = professorData;

  const courses = [
    {
      code: "COMM-401",
      title: "Marketing Management",
      level: "Postgraduate / MBA",
      description: "Advanced study of consumer purchase vectors, marketing channels, brand strategy frameworks, and digital customer relationship ecosystems. Focuses heavily on case-based business analysis.",
      topics: ["Consumer Sentiment Mapping", "Product Lifecycle Management", "Omnichannel Distribution", "Green Marketing Audits"]
    },
    {
      code: "ENTR-302",
      title: "Entrepreneurship Development",
      level: "Undergraduate / B.Com",
      description: "A practical guide to venture launching, business modeling, venture capital access, state policies, and incubation leadership, designed to turn students into innovation builders.",
      topics: ["Venture Capital Pitching", "Lean Startup Frameworks", "IPR & Trademark Filing", "Rural Incubation Models"]
    },
    {
      code: "MGMT-201",
      title: "General Management",
      level: "Undergraduate",
      description: "Foundations of organizational theory, leadership philosophies, conflict resolution dynamics, and performance structures, preparing students for executive roles.",
      topics: ["Organizational Behavior Maps", "Strategic Decision Systems", "Corporate Communication Loops", "Conflict Mediation Frameworks"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Pedagogy &amp; Mentoring
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Teaching &amp; Outreach
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Course expertise, student mentorship philosophies, and voluntary outreach development workshops.
        </p>
      </div>

      {/* Course Modules */}
      <div className="space-y-8 mb-20">
        <h2 className="font-heading text-xl font-bold text-custom-fg border-l-4 border-l-primary-emerald pl-4">
          Academic Course Expertise
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <TiltCard
              key={course.code}
              intensity={9}
              className="glass p-8 rounded-3xl glow-emerald-hover shimmer-border flex flex-col justify-between"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-emerald/30 to-transparent rounded-t-3xl" />

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-primary-emerald font-bold bg-primary-emerald/10 px-2 py-0.5 rounded border border-primary-emerald/20">
                    {course.code}
                  </span>
                  <span className="text-custom-muted">{course.level}</span>
                </div>

                <h3 className="font-heading text-base font-bold text-custom-fg">{course.title}</h3>
                <p className="text-xs text-custom-muted leading-relaxed">{course.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-custom-border/50 space-y-2">
                <span className="text-[10px] font-mono text-custom-muted uppercase tracking-wider block">
                  Key Curricular Pillars:
                </span>
                <ul className="grid grid-cols-2 gap-1.5 text-[9px] font-mono text-custom-fg">
                  {course.topics.map((t, idx) => (
                    <li key={idx} className="flex items-center space-x-1">
                      <span className="w-1 h-1 rounded-full bg-primary-emerald flex-shrink-0" />
                      <span className="line-clamp-1">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Outreach Timeline */}
      <div className="space-y-8">
        <h2 className="font-heading text-xl font-bold text-custom-fg border-l-4 border-l-accent-gold pl-4">
          Community Outreach &amp; NSS Camps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {p.outreach.map((out) => (
            <TiltCard
              key={out.id}
              intensity={8}
              className="glass p-8 rounded-3xl glow-gold-hover shimmer-border flex flex-col justify-between"
            >
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-gold/30 to-transparent rounded-t-3xl" />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-bold text-accent-gold bg-accent-gold/10 border border-accent-gold/20 px-2.5 py-1 rounded-full uppercase">
                    Voluntary Mission
                  </span>
                  <span className="text-xs font-mono font-bold text-custom-muted">{out.year}</span>
                </div>

                <h3 className="font-heading text-base font-bold text-custom-fg">{out.title}</h3>

                <div className="flex items-center space-x-1.5 text-xs text-custom-muted">
                  <MapPin className="w-4 h-4 text-accent-gold shrink-0" />
                  <span>{out.location}</span>
                </div>

                <p className="text-xs text-custom-muted leading-relaxed">{out.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-custom-border/50 flex justify-between items-center text-[10px] font-mono">
                <span className="text-custom-muted">IMPACT METRIC</span>
                <span className="text-accent-gold font-bold">{out.impactStats}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}
