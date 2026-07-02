"use client";

import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "AI and Machine Learning in Consumer Sentiment Prediction: The Next Frontier in Retail Adjustment",
    excerpt: "Exploring how real-time semantic analysis and probability models can automatically adjust pricing, promotions, and inventory priorities on e-commerce platforms, optimizing corporate performance.",
    date: "June 14, 2025",
    readTime: "6 min read",
    category: "Research",
    tags: ["Consumer Behaviour", "Predictive Analytics", "Machine Learning"]
  },
  {
    id: "post-2",
    title: "Strengthening University-Industry Partnerships: Bridging the Talent Competency Deficit",
    excerpt: "How curriculum reforms, targeted corporate MoUs, and structured student internship guidelines empower commerce graduates to step seamlessly into executive roles upon convocation.",
    date: "April 08, 2025",
    readTime: "8 min read",
    category: "Education",
    tags: ["Industry Engagement", "Curriculum Design", "Career Placement"]
  },
  {
    id: "post-3",
    title: "Empowering Underrepresented Youth through NSS Outreach: A Roadmap to Social Governance",
    excerpt: "Analyzing the systemic impact of adopting rural villages and initiating disaster relief, computing workshops, and blood donation drives on the character development of university cohorts.",
    date: "November 23, 2024",
    readTime: "5 min read",
    category: "Outreach",
    tags: ["NSS KIIT", "Village Adoption", "Student Leadership"]
  }
];

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-primary-emerald font-heading">
          Academic Insights
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-custom-fg tracking-tight">
          News & Research Blog
        </h1>
        <p className="text-sm text-custom-muted leading-relaxed">
          Reflections on digital marketing, student volunteerism impact, policy developments, and university-industry integrations.
        </p>
      </div>

      {/* Blog Cards Stack */}
      <div className="space-y-8 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="glass p-8 rounded-3xl border border-custom-border hover:border-primary-emerald/25 transition-all duration-300 relative group overflow-hidden"
          >
            {/* Corner visual decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-emerald/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-4">
              {/* Metadata */}
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-custom-muted">
                <span className="text-primary-emerald font-bold bg-primary-emerald/10 border border-primary-emerald/20 px-2.5 py-0.5 rounded uppercase">
                  {post.category}
                </span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="font-heading text-lg sm:text-xl font-bold text-custom-fg group-hover:text-primary-emerald transition-colors leading-snug">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-custom-muted leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags & Action Button */}
              <div className="pt-6 border-t border-custom-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[9px] font-mono bg-custom-fg/5 text-custom-muted border border-custom-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Simulated MDX Full read link */}
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary-emerald group-hover:text-primary-emerald/80 cursor-pointer transition-colors pt-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
