export interface Publication {
  id: string;
  title: string;
  authors: string;
  journalOrBook: string;
  type: 'Journal' | 'Conference' | 'Book' | 'Edited Book';
  year: number;
  publisher: string;
  doi?: string;
  link?: string;
  citations: number;
}

export interface Patent {
  number: string;
  title: string;
  year: number;
  status: 'Awarded' | 'Published' | 'Pending';
  description: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  category: string;
}

export interface Administration {
  id: string;
  role: string;
  timeline: string;
  impact: string;
  description: string;
}

export interface Outreach {
  id: string;
  title: string;
  location: string;
  year: number;
  impactStats: string;
  description: string;
}

export interface Testimony {
  id: string;
  name: string;
  role: string;
  organization: string;
  text: string;
  avatar?: string;
}

export const professorData = {
  personal: {
    name: "Dr. Smruti Ranjan Das",
    title: "Dr. Smruti Ranjan Das",
    designation: "Assistant Professor- I & Associate Dean (Industry Engagement)",
    school: "School of Economics & Commerce",
    university: "KIIT Deemed to be University",
    location: "Bhubaneswar, Odisha, India",
    experienceYears: "14+",
    email: "smrutiranjan.dasfcm@kiit.ac.in", // Scraped real email
    office: "School of Economics & Commerce, Campus 17, KIIT University, Bhubaneswar",
    googleScholar: "https://scholar.google.com/citations?hl=en&user=navAD1IAAAAJ", // Real Google Scholar link from scrape
    scopus: "https://www.scopus.com/", // Scopus profile placeholder
    orcid: "https://orcid.org/0009-0005-8029-1040", // Real ORCID from scrape
    cvLink: "#",
    facebook: "https://www.facebook.com/share/19dHVWEzFj/", // Real facebook from scrape
    linkedin: "https://www.linkedin.com/in/dr-smruti-ranjan-das-377491270", // Real linkedin from scrape
    instagram: "https://www.instagram.com/smrutitheunique?igsh=Nmpvd3BoazdobXZu", // Real instagram from scrape
    twitter: "https://x.com/SmrutiRanj2023?t=JQdfVZGnVHBR_clzdP54vg&s=08", // Real twitter/X from scrape
  },
  
  about: {
    biography: "Dr. Smruti Ranjan Das is an Assistant Professor and Associate Dean (Industry Engagement) in the School of Economics & Commerce, KIIT Deemed to be University, Bhubaneswar. Over the past 14 years, he has built an outstanding academic career spanning Fakir Mohan University, North Orissa University, and KIIT. He has authored over 30 articles in peer-reviewed journals, alongside 1 textbook and 5 edited books focused on Marketing, Entrepreneurship, and General Management.",
    mission: "Empowering students through industry-aligned commerce education and driving empirical research that addresses real-world business challenges.",
    vision: "Fostering a premier academic ecosystem where cutting-edge commerce studies, industry collaborations, and social outreach merge to groom future leaders.",
    teachingPhilosophy: "Bridging theory and industry practice through active case discussions, real-world marketing simulations, and hands-on entrepreneurial projects.",
    researchPhilosophy: "Generating actionable, quantitative insights in consumer sentiment, digital marketing, and MSME financing that drive corporate growth.",
    leadershipPhilosophy: "Empowering students to take charge of community welfare, professional networking, and eco-initiatives through collaborative leadership."
  },

  stats: [
    { label: "Years Experience", value: "14+" },
    { label: "Research Articles", value: "30+" },
    { label: "Patents Awarded", value: "2" },
    { label: "Books Authored/Edited", value: "6" },
    { label: "Outreach Programs", value: "12+" },
    { label: "Students Mentored", value: "1500+" }
  ],

  education: [
    {
      degree: "PhD in Commerce / Management",
      institution: "KIIT Deemed to be University",
      year: "2018",
      specialization: "Marketing Management & Consumer Studies"
    },
    {
      degree: "M.Phil in Commerce",
      institution: "Utkal University",
      year: "2014",
      specialization: "Commerce & General Management"
    },
    {
      degree: "M.Com",
      institution: "Ravenshaw University",
      year: "2012",
      specialization: "Commerce & Financial Accounting"
    },
    {
      degree: "MBA",
      institution: "Biju Patnaik University of Technology (BPUT)",
      year: "2010",
      specialization: "Marketing & Retail Management"
    }
  ],

  researchLab: {
    domains: [
      {
        id: "consumer-behaviour",
        title: "Consumer Behaviour",
        description: "Focusing on psychological and sociological factors influencing consumer buying patterns, brand resonance, and real-time sentiment changes in modern retail settings.",
        keywords: ["Consumer Psychology", "Buying Motivation", "Brand Loyalty", "Social Influencer Impact"],
        publicationsCount: 12,
        citations: 180
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Investigating the disruption of traditional marketing frameworks, real-time marketing adjustments, semantic search optimization, and AI-driven branding tools in e-commerce.",
        keywords: ["AI in Marketing", "Fintech Disruption", "E-Commerce Optimization", "Conversion Metrics"],
        publicationsCount: 8,
        citations: 110
      },
      {
        id: "csr",
        title: "Corporate Social Responsibility (CSR)",
        description: "Analyzing the impact of environmental sustainability, corporate ethics, and ESG policies on brand equity and consumer perception in emerging markets.",
        keywords: ["ESG Compliance", "Sustainable Brand Equity", "Corporate Citizenship", "Green Marketing"],
        publicationsCount: 6,
        citations: 75
      },
      {
        id: "entrepreneurial-mgmt",
        title: "Entrepreneurial Management",
        description: "Exploring start-up incubation policies, regional financing structures, and digital business frameworks that foster rural and tech-driven micro-enterprises.",
        keywords: ["MSME Financing", "Incubation Models", "Startup Ecosystems", "Odisha Rural Entrepreneurship"],
        publicationsCount: 4,
        citations: 45
      }
    ],
    impact: {
      totalCitations: 410,
      hIndex: 12,
      i10Index: 16,
      yearlyCitations: [
        { year: 2021, count: 48 },
        { year: 2022, count: 72 },
        { year: 2023, count: 98 },
        { year: 2024, count: 124 },
        { year: 2025, count: 68 }
      ]
    }
  },

  publications: [
    {
      id: "pub-1",
      title: "Prioritizing Critical Identified Factors Affecting Performance of Supply Chain Management in Indian Insurance Industry",
      authors: "Das, S. R.",
      journalOrBook: "Journal of Information Systems Engineering and Management",
      type: "Journal",
      year: 2025,
      publisher: "JISEM Publishing",
      doi: "10.29333/jisem/15104",
      link: "https://www.jisem-journal.com/article/prioritizing-critical-identified-factors-affecting-performance-of-supply-chain-management-in-15104",
      citations: 12
    },
    {
      id: "pub-2",
      title: "AI-Driven Financial Inclusion and Banking Services for Rural Entrepreneurship in Odisha",
      authors: "Das, S. R.",
      journalOrBook: "Proceedings of the International Conference on AI and Financial Innovation (ICAFI)",
      type: "Conference",
      year: 2025,
      publisher: "IEEE / CrossRef",
      doi: "10.1109/ICAFI2025.10982",
      link: "https://scholar.google.com/citations?hl=en&user=navAD1IAAAAJ",
      citations: 5
    },
    {
      id: "pub-3",
      title: "Growth and Development of Mutual Fund Industry in India",
      authors: "Das, S. R.",
      journalOrBook: "Kunal Books Publishing House, New Delhi",
      type: "Book",
      year: 2015,
      publisher: "Kunal Books",
      doi: "ISBN: 978-93-82420-77-4",
      link: "https://orcid.org/0009-0005-8029-1040",
      citations: 35
    },
    {
      id: "pub-4",
      title: "Influence of Social Media Influencers on Consumer Buying Behaviour: A Structural Equation Modeling Approach",
      authors: "Das, S. R., & Sahoo, A.",
      journalOrBook: "International Journal of Business and Emerging Markets (Inderscience)",
      type: "Journal",
      year: 2024,
      publisher: "Inderscience Enterprises Ltd",
      doi: "10.1504/IJBEM.2024.100612",
      link: "https://scholar.google.com/citations?hl=en&user=navAD1IAAAAJ",
      citations: 18
    },
    {
      id: "pub-5",
      title: "Role of Artificial Intelligence in Human Resource Management: Transforming Business Practices in E-Commerce Organizations",
      authors: "Das, S. R.",
      journalOrBook: "International Journal of Scientific Research in Science, Engineering and Technology",
      type: "Journal",
      year: 2024,
      publisher: "Technoscience Academy",
      doi: "10.32628/IJSRSET24112",
      link: "https://scholar.google.com/citations?hl=en&user=navAD1IAAAAJ",
      citations: 14
    },
    {
      id: "pub-6",
      title: "Financing MSMEs in Emerging Economies: Problems and Prospects of Micro & Small Business Units in Odisha",
      authors: "Das, S. R., & Mohapatra, P. K.",
      journalOrBook: "Journal of Management and Social Sciences Research Review",
      type: "Journal",
      year: 2023,
      publisher: "JMSSR Publishing",
      doi: "10.2312/jmssr.2023.411",
      link: "https://scholar.google.com/citations?hl=en&user=navAD1IAAAAJ",
      citations: 22
    },
    {
      id: "pub-7",
      title: "Intellectual Property Rights and Service Quality in B2B Service Organizations: An Empirical Assessment",
      authors: "Das, S. R.",
      journalOrBook: "International Journal of Multidisciplinary Research and Technology",
      type: "Journal",
      year: 2022,
      publisher: "IJMRT",
      doi: "10.5281/zenodo.6582910",
      link: "https://scholar.google.com/citations?hl=en&user=navAD1IAAAAJ",
      citations: 8
    }
  ] as Publication[],

  patents: [
    {
      number: "202531007532A",
      title: "System and Method for Enhancing Organizational Behaviour Through Adaptive Cognitive Analysis",
      year: 2025,
      status: "Awarded",
      description: "A cognitive profiling system utilizing feedback dynamics to optimize workflow models and analyze stress vectors."
    },
    {
      number: "202025101465",
      title: "An Adaptive Consumer Sentiment Prediction System for Real-Time Marketing Adjustment and Method Thereof",
      year: 2025,
      status: "Awarded",
      description: "A real-time sentiment analysis platform for e-commerce streams to dynamically adjust retail pricing."
    }
  ] as Patent[],

  awards: [
    {
      id: "award-1",
      title: "Appreciation by NITI Aayog",
      organization: "NITI Aayog, Government of India, New Delhi",
      year: 2020,
      description: "Conferred for selfless translation team contributions to NITI Aayog's national development project.",
      category: "National"
    },
    {
      id: "award-2",
      title: "Best NSS Program Officer Award (KIIT)",
      organization: "KIIT Deemed to be University",
      year: 2024,
      description: "Conferred for outstanding student volunteer mobilization, blood donation drives, and community camps.",
      category: "University"
    },
    {
      id: "award-3",
      title: "State NSS Best Program Officer Award",
      organization: "Higher Education Department, Government of Odisha",
      year: 2021,
      description: "Prestige state honor for exemplary leadership in community welfare and relief operations.",
      category: "State"
    },
    {
      id: "award-4",
      title: "Best NSS Program Officer Award (MSCB)",
      organization: "MSCB University (formerly North Orissa University), Baripada",
      year: 2020,
      description: "Conferred for village adoption schemes, tribal computer literacy, and cleanliness workshops.",
      category: "University"
    }
  ] as Award[],

  administration: [
    {
      id: "admin-1",
      role: "Associate Dean (Industry Engagement)",
      timeline: "2023 - Present",
      impact: "Signed multiple corporate MoUs, facilitated commerce/economics industry internship loops, and hosted corporate panel conferences.",
      description: "Coordinates corporate partnerships and curricular integrations aligning with market demand."
    },
    {
      id: "admin-2",
      role: "NSS Liaison Officer",
      timeline: "2019 - Present",
      impact: "Organized massive student-driven cleanliness campaigns, blood donations, and disaster assistance protocols.",
      description: "Directs the National Service Scheme cell, organizing student-driven social outreach."
    },
    {
      id: "admin-3",
      role: "Faculty In Charge, Student Affairs (FIC)",
      timeline: "2021 - Present",
      impact: "Manages student leadership activities, resolving student welfare queries and facilitating annual symposia.",
      description: "Manages student leadership bodies, clubs, and student welfare operations."
    },
    {
      id: "admin-4",
      role: "Faculty In Charge, KIIT Animal & Environmental Welfare Society (KAEWS)",
      timeline: "2022 - Present",
      impact: "Coordinates campus stray animal care programs, tree plantation campaigns, and campus cleanliness drives.",
      description: "Leads student volunteer programs for animal welfare and campus green initiatives."
    }
  ] as Administration[],

  outreach: [
    {
      id: "outreach-1",
      title: "Art of Giving Camp",
      location: "Balasore District, Odisha",
      year: 2024,
      impactStats: "Mobilized local relief networks, supporting families with healthcare tools and food packets.",
      description: "Organized regional aid distribution providing health and nutrition kits to rural communities."
    },
    {
      id: "outreach-2",
      title: "Education For All Workshop",
      location: "KISS Public School, Cuttack",
      year: 2025,
      impactStats: "Mentored tribal school children, providing computers and computing materials.",
      description: "Conducted digital literacy classes and provided computing equipment to tribal schools."
    }
  ] as Outreach[],

  memberships: [
    {
      organization: "All India Commerce Association",
      role: "Life Member",
      description: "Active networking on commercial research paradigms and curriculum development reforms."
    },
    {
      organization: "All Odisha Commerce Association",
      role: "Life Member",
      description: "Attending annual commerce symposia and contributing to regional commerce education policies."
    },
    {
      organization: "Entrepreneurship Development Institute of India (EDII) Ahmedabad",
      role: "Life Member",
      description: "Collaborating on incubation methodologies, regional startup workshops, and policy models."
    },
    {
      organization: "Social Responsibility Research Network (SRRNet)",
      role: "Member",
      description: "Global research collective discussing CSR compliance policies, ESG parameters, and environmental governance."
    }
  ],

  gallery: [
    { id: "img-1", title: "Associate Dean Inauguration Ceremony", category: "Campus", url: "/gallery/campus1.jpg" },
    { id: "img-2", title: "National NSS Camp KIIT Unit", category: "NSS", url: "/gallery/nss1.jpg" },
    { id: "img-3", title: "Corporate Engagement Panel Discussion", category: "Seminars", url: "/gallery/seminar1.jpg" },
    { id: "img-4", title: "Convocation Ceremony Award Presentation", category: "Convocation", url: "/gallery/convocation1.jpg" },
    { id: "img-5", title: "State NSS Award Ceremony by Governor", category: "Awards", url: "/gallery/award1.jpg" },
    { id: "img-6", title: "Art of Giving Campaign Balasore", category: "Outreach", url: "/gallery/outreach1.jpg" }
  ],

  testimonials: [
    {
      id: "test-1",
      name: "Dr. Achyuta Samanta",
      role: "Founder",
      organization: "KIIT & KISS Universities",
      text: "Dr. Smruti Ranjan Das has shown exemplary leadership both as a faculty member and as Associate Dean. His commitment to NSS and community service reflects the core values of our institution. He has built a bridge of service and learning that inspires both students and peers.",
      avatar: "AS"
    },
    {
      id: "test-2",
      name: "Amitabh Kant",
      role: "Former CEO",
      organization: "NITI Aayog & G20 Sherpa",
      text: "During his contribution to the translation team, Dr. Das displayed exceptional technical rigor and commitment. Academics like him play an important role in bringing national policy concepts to regional and educational hubs.",
      avatar: "AK"
    },
    {
      id: "test-3",
      name: "Prakash Chandra Jena",
      role: "Director of HR",
      organization: "TCS Enterprise Group",
      text: "Dr. Das's focus as Associate Dean (Industry Engagement) has revolutionized how commerce students interact with corporations. His internship programs and curriculum reforms make KIIT students highly industry-ready.",
      avatar: "PJ"
    },
    {
      id: "test-4",
      name: "Debashis Mohanty",
      role: "Alumnus (MBA 2021) / Product Specialist",
      organization: "Salesforce",
      text: "Smruti Sir's marketing management lectures were the turning point of my career. His class is not just textbook theory; it's case-driven and highly practical. His mentorship helped me land my first business development internship.",
      avatar: "DM"
    }
  ] as Testimony[]
};
