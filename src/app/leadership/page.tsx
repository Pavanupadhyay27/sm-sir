"use client";

import { Shield, Users, Heart, Briefcase, Award } from "lucide-react";
import { professorData } from "@/data/professor-data";

export default function Leadership() {
  const p = professorData;

  const icons: Record<string, React.ReactNode> = {
    "admin-1": <Briefcase className="w-6 h-6 text-primary-emerald" />,
    "admin-2": <Shield className="w-6 h-6 text-accent-gold" />,
    "admin-3": <Users className="w-6 h-6 text-blue-400" />,
    "admin-4": <Heart className="w-6 h-6 text-emerald-400" />
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Executive Stewardship
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          Leadership & Contributions
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          University administration, industry collaborations policy management, environmental welfare societies, and community mobilization.
        </p>
      </div>

      {/* Roles Display List */}
      <div className="space-y-8 mb-16">
        {p.administration.map((adm) => (
          <div
            key={adm.id}
            className="glass p-8 rounded-3xl border border-custom-border hover:border-primary-emerald/20 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Corner visual accent */}
            <div className="absolute top-0 right-0 w-[4px] h-full bg-gradient-to-b from-primary-emerald to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Grid: Header info & Icon */}
              <div className="lg:col-span-4 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-custom-fg/5 flex items-center justify-center border border-custom-border">
                  {icons[adm.id] || <Briefcase className="w-6 h-6 text-primary-emerald" />}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-custom-fg leading-tight">
                    {adm.role}
                  </h3>
                  <span className="text-[11px] font-mono font-bold text-primary-emerald bg-primary-emerald/10 border border-primary-emerald/20 px-2.5 py-0.5 rounded-full inline-block mt-2">
                    {adm.timeline}
                  </span>
                </div>
              </div>

              {/* Right Grid: Descriptions & Impacts */}
              <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-custom-border/50 lg:pl-8">
                {/* Description */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-custom-muted uppercase tracking-wider block">
                    Core Mandate & Policy:
                  </span>
                  <p className="text-xs sm:text-sm text-custom-muted leading-relaxed">
                    {adm.description}
                  </p>
                </div>

                {/* Key Impact Metrics */}
                <div className="bg-primary-emerald/5 border border-primary-emerald/20 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-emerald/5 to-transparent pointer-events-none" />
                  
                  <div className="flex items-center space-x-2 text-[10px] font-mono font-bold text-primary-emerald uppercase mb-2">
                    <Award className="w-3.5 h-3.5" />
                    <span>Conferred Impact Outcomes:</span>
                  </div>
                  
                  <p className="text-xs font-semibold text-custom-fg leading-relaxed">
                    {adm.impact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* KIIT Animal Welfare Highlights */}
      <div className="glass p-8 rounded-3xl max-w-4xl mx-auto border border-custom-border relative overflow-hidden text-center sm:text-left">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-emerald/10 to-transparent blur-2xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0">
            <Heart className="w-7 h-7" />
          </div>
          <div className="space-y-2 flex-1">
            <h3 className="font-heading text-sm font-bold text-custom-fg">KIIT Animal & Environmental Welfare Society</h3>
            <p className="text-xs text-custom-muted leading-relaxed">
              Dr. Das is an advocate for eco-sustainability and compassion towards campus wildlife. The society coordinates stray rescue services, medical rehabilitations, bird sanctuary boxes, and plastic-free cleanliness protocols inside campus sectors, educating students on biodiversity preservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
