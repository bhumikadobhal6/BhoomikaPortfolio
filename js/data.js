/**
 * PORTFOLIO DATA CONFIGURATION
 * -------------------------------------------------------------
 * Senior Software Developer Architecture:
 * All personal information, projects, skills, and links are 
 * centralized here. Simply edit this file to customize your portfolio!
 */

const portfolioData = {
  // Personal & Header Info
  personal: {
    name: "Sudhanshu Kumar",
    preferredName: "Sudhanshu",
    roleTitle: "Software Engineering Intern Candidate",
    subtitles: [
      "Aspiring Software Engineer",
      "Full-Stack Web & Systems Developer",
      "Cloud & Distributed Systems Enthusiast",
      "Competitive Programmer & Problem Solver"
    ],
    availabilityBadge: "🟢 Available for Summer / Fall 2025/2026 Internships",
    location: "Bengaluru, India / Open to Remote & Relocation",
    email: "sudhanshu.dev@example.com",
    phone: "+91 98765 43210",
    github: "https://github.com",
    linkedin: "https://linkedin.com/in",
    leetcode: "https://leetcode.com",
    twitter: "https://twitter.com",
    resumeUrl: "#resume-modal", // Opens interactive modal or direct download
    resumeDownloadFileName: "Sudhanshu_Kumar_Software_Engineer_Resume.pdf",
    shortBio: "Computer Science student passionate about building resilient distributed systems, scalable web backends, and elegant user interfaces. Eager to contribute high-impact code to fast-moving engineering teams.",
    fullBio: [
      "I am a Computer Science undergraduate focused on crafting robust software and solving complex algorithmic challenges. My core strengths lie in full-stack architecture, API performance optimization, and distributed data pipelines.",
      "Beyond coding, I actively participate in hackathons, contribute to open-source tools, and mentor junior developers in competitive programming and data structures.",
      "Currently seeking a Software Engineer Internship where I can collaborate with senior mentors, take ownership of production microservices, and deliver tangible product value."
    ],
    stats: [
      { label: "DSA Problems Solved", value: "450+", subtext: "LeetCode, Codeforces, GFG" },
      { label: "Production & Team Projects", value: "8+", subtext: "Full-Stack, Cloud & AI" },
      { label: "Hackathons & Contests", value: "4x Finalist", subtext: "National Level Events" },
      { label: "Cumulative GPA", value: "8.9 / 10", subtext: "Top 5% of Department" }
    ]
  },

  // Recruiter Quick Facts (The 15-second scan)
  recruiterSnapshot: {
    targetRoles: "Software Engineer Intern, Backend Intern, Full-Stack Intern",
    targetGraduation: "May 2026 (B.Tech / B.S. in Computer Science)",
    workAuthorization: "Eligible for internships & full-time sponsorship / domestic",
    primaryLanguages: "TypeScript, Python, C++, Go, Java, SQL",
    coreFrameworks: "React, Next.js, Node.js, Express, FastAPI, Docker",
    yearsCoding: "3+ Years of Intensive Project & Algorithmic Practice"
  },

  // Education & Coursework
  education: [
    {
      institution: "Indian Institute of Information Technology / Engineering College",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      period: "2022 - 2026 (Expected)",
      location: "India",
      gpa: "8.9 / 10.0 (Dean's List / Academic Excellence)",
      coursework: [
        "Data Structures & Algorithms",
        "Operating Systems & Concurrency",
        "Database Management Systems",
        "Computer Networks & Protocols",
        "Object-Oriented System Design",
        "Cloud Computing & Distributed Systems"
      ],
      highlights: "Ranked among the top 5% of the batch. Lead Coordinator of the Developer Student Club."
    }
  ],

  // Skills Taxonomy (Categorized for recruiters and ATS systems)
  skills: {
    languages: [
      { name: "C++", level: 90, badge: "Advanced", icon: "cpp" },
      { name: "Python", level: 92, badge: "Advanced", icon: "python" },
      { name: "TypeScript / JavaScript", level: 90, badge: "Advanced", icon: "typescript" },
      { name: "Go (Golang)", level: 75, badge: "Intermediate", icon: "golang" },
      { name: "SQL (Postgres/MySQL)", level: 88, badge: "Advanced", icon: "database" },
      { name: "Java", level: 80, badge: "Proficient", icon: "java" }
    ],
    frontend: [
      { name: "React 19 / Next.js 14+", level: 92, badge: "Core", icon: "react" },
      { name: "Tailwind CSS & Glassmorphism", level: 95, badge: "Expert", icon: "tailwind" },
      { name: "HTML5 / Semantic Accessible UI", level: 95, badge: "Expert", icon: "html" },
      { name: "Redux Toolkit & Zustand", level: 85, badge: "Proficient", icon: "redux" },
      { name: "WebSockets & WebRTC", level: 80, badge: "Hands-on", icon: "network" }
    ],
    backend: [
      { name: "Node.js & Express", level: 90, badge: "Core", icon: "nodejs" },
      { name: "FastAPI & Flask", level: 88, badge: "Core", icon: "python" },
      { name: "RESTful & GraphQL API Design", level: 92, badge: "Advanced", icon: "api" },
      { name: "Microservices Architecture", level: 80, badge: "Proficient", icon: "server" },
      { name: "Redis Caching & Pub/Sub", level: 85, badge: "Advanced", icon: "redis" },
      { name: "Kafka & RabbitMQ Messaging", level: 75, badge: "Hands-on", icon: "message" }
    ],
    databaseCloud: [
      { name: "PostgreSQL & MySQL", level: 90, badge: "Production", icon: "postgres" },
      { name: "MongoDB & DynamoDB", level: 85, badge: "Proficient", icon: "mongodb" },
      { name: "Docker & Containerization", level: 85, badge: "Proficient", icon: "docker" },
      { name: "AWS (S3, EC2, Lambda)", level: 80, badge: "Hands-on", icon: "aws" },
      { name: "Git, GitHub Actions & CI/CD", level: 92, badge: "Advanced", icon: "git" },
      { name: "Linux Systems & Bash Scripting", level: 85, badge: "Proficient", icon: "linux" }
    ],
    fundamentals: [
      { name: "Data Structures & Algorithms", level: 94, badge: "Specialist", icon: "algo" },
      { name: "Object-Oriented Design (SOLID)", level: 90, badge: "Strong", icon: "code" },
      { name: "System Design & Low-Level Design", level: 82, badge: "Practicing", icon: "diagram" },
      { name: "Test-Driven Development (Jest/PyTest)", level: 85, badge: "Rigorous", icon: "check" }
    ]
  },

  // Highlight Projects (STAR structured with metrics for recruiter impact)
  projects: [
    {
      id: "cloudscale",
      title: "CloudScale: High-Throughput Distributed Task Queue",
      tagline: "Asynchronous task orchestration engine processing 10,000+ jobs/min with worker fault-tolerance",
      category: "backend",
      featured: true,
      technologies: ["Go", "Redis", "Docker", "PostgreSQL", "Prometheus", "Grafana"],
      summary: "Engineered an asynchronous task execution system inspired by Celery and BullMQ, featuring distributed locking, retry backoffs, dead-letter queues, and real-time Prometheus observability.",
      metrics: [
        "Sustained 12,500 jobs/minute throughput under stress testing with <15ms worker latency",
        "Zero task duplication via Redis distributed locks with redlock algorithm",
        "Graceful crash-recovery reducing abandoned job rates from 8.4% to 0.01%"
      ],
      architecture: "Producer REST API -> Redis Streams / Sorted Sets (Delayed queues) -> Worker Pool Daemon with exponential jitter backoff -> Postgres audit store -> Grafana health dashboard.",
      githubUrl: "https://github.com",
      liveUrl: "https://demo.example.com",
      image: "assets/project-cloudscale.svg",
      highlights: [
        "Distributed lock implementation avoiding race conditions across scaled containers",
        "Prometheus metrics exporter monitoring CPU, memory, queue depth, and worker health",
        "Full unit & integration test coverage with 92% code coverage"
      ]
    },
    {
      id: "devpulse",
      title: "DevPulse: AI-Assisted Code Quality & PR Reviewer",
      tagline: "Automated GitHub webhook bot analyzing security flaws, test coverage gaps & Big-O complexity",
      category: "ai",
      featured: true,
      technologies: ["TypeScript", "Next.js 14", "FastAPI", "Gemini API", "PostgreSQL", "Tailwind CSS"],
      summary: "Built an intelligent developer tool that connects with GitHub repos via webhooks to evaluate Pull Requests, spot AST code smells, calculate asymptotic time complexity, and post inline markdown recommendations.",
      metrics: [
        "Reduced manual code review cycle time by ~35% for university capstone teams",
        "Trained prompt-chaining pipeline with Gemini 1.5 Pro with structured AST context",
        "Adopted by 120+ active student developers across 30+ open repositories"
      ],
      architecture: "GitHub Webhook -> FastAPI ingestion queue -> AST Parser -> LLM Semantic Inspector -> Postgres PR history -> Next.js 14 Real-time Dashboard.",
      githubUrl: "https://github.com",
      liveUrl: "https://devpulse.example.com",
      image: "assets/project-devpulse.svg",
      highlights: [
        "Synthesizes AST parser output to feed minimal, context-rich diff tokens to LLM",
        "Interactive diff viewer with syntax highlighting and suggested 1-click git patches",
        "Enterprise-grade OAuth authentication and repo-scoped permissions"
      ]
    },
    {
      id: "streamsphere",
      title: "StreamSphere: Real-Time Collaborative Canvas & Whiteboard",
      tagline: "Low-latency multiplayer workspace with operational transformation and undo/redo history",
      category: "fullstack",
      featured: true,
      technologies: ["React 19", "Node.js", "WebSockets", "HTML5 Canvas", "Redis Pub/Sub", "Tailwind"],
      summary: "Designed an interactive browser whiteboard where multiple users can sketch, annotate, drop UI components, and chat simultaneously with sub-25ms synchronization latency.",
      metrics: [
        "Supports up to 50 concurrent active sketchers per room with zero perceptible lag",
        "Delta compression algorithm reduced WebSocket bandwidth consumption by 64%",
        "Built-in infinite canvas matrix transformations with 60 FPS GPU acceleration"
      ],
      architecture: "React Canvas Layer -> WebSocket Client -> Cluster of Node.js socket servers -> Redis Pub/Sub room broadcast -> LocalStorage offline buffer.",
      githubUrl: "https://github.com",
      liveUrl: "https://streamsphere.example.com",
      image: "assets/project-streamsphere.svg",
      highlights: [
        "Conflict-free operational state syncing preventing stroke collisions",
        "Export to high-resolution SVG, PNG, and shareable encrypted session URLs",
        "Custom spatial indexing (quadtree) for rapid element selection and bounding checks"
      ]
    },
    {
      id: "algorift",
      title: "AlgoRift: Interactive Algorithm Visualizer & Profiler",
      tagline: "Interactive 3D/2D visual benchmark suite for graph traversals, pathfinding & dynamic programming",
      category: "frontend",
      featured: false,
      technologies: ["JavaScript (ES6+)", "HTML5 Canvas", "Web Workers", "Tailwind CSS"],
      summary: "Created an educational visualization playground explaining Dijkstra's, A*, DFS/BFS, sorting algorithms, and DP memoization tables with step-by-step memory allocation tracking.",
      metrics: [
        "10,000+ all-time unique visitors with an average session duration of 4.5 minutes",
        "Calculates exact comparison counters and virtual memory read/write cycles",
        "Offloaded algorithm execution to Web Workers to ensure perfectly fluid UI rendering"
      ],
      architecture: "UI Control Thread -> Web Worker compute engine -> SharedArrayBuffer / postMessage state pipeline -> High-frequency Canvas Renderer.",
      githubUrl: "https://github.com",
      liveUrl: "https://algorift.example.com",
      image: "assets/project-algorift.svg",
      highlights: [
        "Custom maze generation with Prim's and Recursive Backtracking algorithms",
        "Audible frequency pitch synthesizers representing element magnitudes while sorting",
        "Responsive touch gestures for mobile & tablet exploration"
      ]
    },
    {
      id: "cryptovault",
      title: "SecureVault: End-to-End Encrypted File Sharing",
      tagline: "Zero-knowledge cryptographic microservice with client-side AES-GCM & pre-signed S3 URLs",
      category: "backend",
      featured: false,
      technologies: ["Node.js", "Express", "AWS S3", "Web Crypto API", "PostgreSQL", "Docker"],
      summary: "Implemented a secure temporary file sharing platform where files are encrypted in the client's browser before upload, ensuring servers never see plaintext data or encryption keys.",
      metrics: [
        "Zero-knowledge architecture: Keys never hit server logs or persistent storage",
        "Supports chunked multi-part streaming uploads for files up to 2GB",
        "Auto-expiring download links with self-destruct timers and password hashing"
      ],
      architecture: "Client Web Crypto (AES-256-GCM) -> Chunked direct upload via AWS S3 Pre-signed URLs -> Express metadata registry -> PostgreSQL with row-level security.",
      githubUrl: "https://github.com",
      liveUrl: "https://securevault.example.com",
      image: "assets/project-securevault.svg",
      highlights: [
        "Client-side PBKDF2 key derivation and random initialization vector (IV) injection",
        "Rate-limiting and IP throttling preventing brute-force password guessing",
        "Automated S3 lifecycle cleanup policies for expired files"
      ]
    }
  ],

  // Experience / Leadership / Practical Roles
  experience: [
    {
      role: "Software Engineering Fellow / Intern",
      organization: "Tech Innovators Lab / Open Source Program",
      period: "May 2024 - July 2024",
      location: "Remote",
      type: "Internship",
      responsibilities: [
        "Contributed to high-throughput REST APIs and reduced average query response time by 28% via query indexing and Redis caching.",
        "Authored comprehensive automated end-to-end test suites using Jest and Supertest, expanding backend coverage from 54% to 88%.",
        "Collaborated with senior engineers in bi-weekly code reviews, sprint planning, and CI/CD deployment pipelines."
      ],
      badge: "Industry Experience"
    },
    {
      role: "Technical Lead & Coordinator",
      organization: "Google Developer Student Clubs / Campus Coding Club",
      period: "Aug 2023 - Present",
      location: "University Campus",
      type: "Leadership",
      responsibilities: [
        "Organized 12+ hands-on technical workshops covering Data Structures, Web Development, and Git workflows for 400+ students.",
        "Mentored 60+ junior peers on problem-solving paradigms, technical interview prep, and open-source contributions.",
        "Spearheaded the annual campus hackathon, coordinating judging rubrics, technical infrastructure, and sponsor logistics."
      ],
      badge: "Campus Leadership"
    }
  ],

  // Competitive Programming & Certifications
  achievements: [
    {
      title: "LeetCode 450+ Solved & Top 8% Rating",
      category: "Competitive Coding",
      description: "Consistent daily problem solving across Trees, Dynamic Programming, Graphs, and System Design patterns.",
      badge: "Rating 1780+"
    },
    {
      title: "1st Place Winner - HackGenesis National Hackathon",
      category: "Hackathon",
      description: "Built an accessibility-first voice and gesture web app in 36 hours among 180+ participating collegiate teams.",
      badge: "Winner (₹50,000 Prize)"
    },
    {
      title: "AWS Certified Cloud Practitioner",
      category: "Certification",
      description: "Demonstrated foundational understanding of AWS cloud security, VPCs, compute (EC2/Lambda), and S3 storage models.",
      badge: "Verified Certificate"
    },
    {
      title: "Global Rank in Google Hash Code / Kick Start",
      category: "Competitive Coding",
      description: "Achieved top quartile ranking in competitive algorithmic challenges under strict time and resource limits.",
      badge: "Top 12%"
    }
  ],

  // Recruiter Recommendations / Peer Endorsements
  recommendations: [
    {
      author: "Dr. R. Sharma",
      role: "Professor & Head of Computer Science Department",
      quote: "Sudhanshu combines rare algorithmic rigor with tremendous software engineering practicality. He consistently writes production-clean, documented code and elevates his entire project team.",
      avatar: "assets/avatar-1.svg"
    },
    {
      author: "Priya Nair",
      role: "Senior Software Engineer & Hackathon Mentor",
      quote: "Sudhanshu demonstrated outstanding problem decomposition skills during our hackathon sprint. His grasp of distributed queues and clean API contracts is far beyond the typical undergraduate level.",
      avatar: "assets/avatar-2.svg"
    }
  ]
};

// Export for browser window
if (typeof window !== "undefined") {
  window.portfolioData = portfolioData;
}

