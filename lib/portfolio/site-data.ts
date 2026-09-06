export const siteNav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const

export const siteProfile = {
  name: "Shekhar Suman",
  role: "AI & ML | ML Engineer | Indian Air Force Veteran | Computer Vision",
  logoInitials: "SS",
  email: "shekharsuman460@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/shekhar-suman-a5978833",
  linkedinHandle: "shekhar-suman-a5978833",
  githubUrl: "https://github.com/Shekhar442",
  githubHandle: "Shekhar442",
  location: "Greater Delhi Area, India",
  heroSummaryLabel: "Professional summary",
  heroTagline:
    "AI and Machine Learning Engineer at Sveltetech Technology Pvt. Ltd., focused on real-world problems with AI, data science, and predictive analytics. Twenty years in the Indian Air Force built expertise in logistics optimization, operational planning, and analysis; today that same discipline goes into computer vision, NLP, and deep learning—including a nervousness detection system at 95.49% accuracy and Musafir_Bot travel assistant.",
  aboutSubtitle:
    "Military precision meets modern ML: from mission-critical operations to models in production",
  aboutImageSrc: "/Shekhar_Light.png",
  aboutImageSrcDark: "/Shekhar_Dark.png",
  aboutHeading: "AI engineer with a military foundation",
  aboutParagraphs: [
    "I am an AI and Machine Learning Engineer with a passion for solving real-world problems using AI, data science, and predictive analytics. My journey began in the Indian Air Force, where I gained expertise in logistics optimization, operational planning, and data analysis over 20 years. I now apply that precision at Sveltetech Technology Pvt. Ltd. in Gurugram, building AI-driven solutions in computer vision, NLP, and deep learning.",
    "Expertise in Python, TensorFlow, PyTorch, OpenCV, NLP, predictive modeling, and Google Cloud AI. Highlights include a nervousness detection system at 95.49% accuracy, Musafir_Bot (React + GPT), and open-source work across conversational AI, speech, RAG, and agri-tech. Certified across Google Data Analytics, Google Cloud GenAI, Multimodal Llama 3.2, and Stanford Online statistics—with a drive for continuous learning and innovation.",
  ],
} as const

export const aboutStats = [
  { icon: "briefcase" as const, label: "Career (total)", value: "22+" },
  { icon: "award" as const, label: "Air Force Service", value: "20" },
  { icon: "graduationCap" as const, label: "Certifications", value: "15+" },
]

/** Technical skills — aligned with LinkedIn + GitHub README. */
export const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      { name: "Python" },
      { name: "R" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "OpenCV" },
      { name: "scikit-learn" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "FastAPI" },
    ],
  },
  {
    title: "AI/ML Specializations",
    skills: [
      { name: "Computer Vision" },
      { name: "Natural Language Processing" },
      { name: "Deep Learning" },
      { name: "Generative AI" },
      { name: "RAG / Multimodal RAG" },
      { name: "Predictive Modeling" },
      { name: "Speech Recognition" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Google Cloud AI / Vertex AI" },
      { name: "Gemini" },
      { name: "Streamlit" },
      { name: "Git" },
      { name: "PostgreSQL / Vector Search" },
      { name: "Data Visualization (Matplotlib, Seaborn)" },
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Statistical Analysis" },
      { name: "Image Processing" },
      { name: "Model Optimization" },
      { name: "Data-Driven Decision Making" },
      { name: "Logistics & Operations" },
    ],
  },
] as const

export const experiences = [
  {
    title: "Machine Learning Engineer",
    company: "Sveltetech Technology Pvt. Ltd.",
    location: "Gurugram, Haryana",
    period: "April 2025 – Present",
    achievements: [
      "Developing cutting-edge ML solutions and AI-driven applications for production use",
      "Building and iterating on computer vision and NLP capabilities with TensorFlow and PyTorch",
      "Collaborating across product and engineering to bring AI features into business workflows",
    ],
  },
  {
    title: "Junior Data Scientist",
    company: "Zummit Infolabs",
    location: "Bengaluru, Karnataka",
    period: "March 2024 – March 2025",
    achievements: [
      "Developed a nervousness detection system with 95.49% accuracy using deep learning and computer vision",
      "Built a face recognition system and residual analysis of protein molecules",
      "Collaborated with the generative AI team on LLM-based and multimodal work",
      "Used Python, TensorFlow, and data visualization to analyze and interpret complex datasets",
    ],
  },
  {
    title: "Data Analyst",
    company: "Intervie Tech",
    location: "Patiala, Punjab",
    period: "February 2024 – March 2024",
    achievements: [
      'Led team to complete "Optimizing Employee Retention and Performance Through Data-Driven HR Strategies" during internship',
      "Applied data analysis to produce insights and recommendations for retention and performance",
      "Partnered with cross-functional teams on data-driven HR initiatives to reach project goals",
    ],
  },
  {
    title: "Data Analyst",
    company: "MedTourEasy",
    location: "New Delhi, Delhi",
    period: "February 2024 – February 2024",
    achievements: [
      "Analyzed data for project on age differences between right- and left-handed participants",
      "Worked with project mentor to refine insights and recommendations",
      "Presented findings with data visualization for clear stakeholder communication",
    ],
  },
  {
    title: "Senior Non-Commissioned Officer (SNCO)",
    company: "Indian Air Force",
    location: "India",
    period: "December 2001 – December 2021",
    achievements: [
      "Managed large-scale logistics and operational planning, optimizing resource allocation",
      "Led data-driven decision-making with structured analysis for mission-critical operations",
      "Ran training and performance analysis for mission readiness",
      "Aerospace Safety Award (2016, 2018)",
    ],
  },
] as const

/**
 * GitHub projects (@Shekhar442).
 * Excludes this portfolio repo, the profile README repo, and github.io mirror.
 */
export const featuredProjects = [
  {
    title: "Paideia — Clinical AI Observation Journal",
    description:
      "Secure, voice-enabled observation journal and clinical AI assistant for parents of children with Autism, ADHD, Dyslexia, and speech delays—translating everyday sensory challenges into actionable insights.",
    tech: ["TypeScript", "Voice AI", "Clinical AI"],
    icon: "stethoscope" as const,
    highlight: "Private · Voice + AI",
    href: "https://github.com/Shekhar442/Paideia",
  },
  {
    title: "journal460 — Gemini Journal App",
    description:
      "User-authenticated web application that uses the Gemini API and Firestore for journaling and AI-assisted writing.",
    tech: ["TypeScript", "Gemini API", "Firestore"],
    icon: "bookOpen" as const,
    highlight: "Full-stack / GenAI",
    href: "https://github.com/Shekhar442/journal460",
  },
  {
    title: "AyushMitr — Developmental Support Agent",
    description:
      "Multilingual conversational AI agent offering non-clinical, educational support for paediatric developmental conditions including Autism, ADHD, Dyslexia, and Dyscalculia.",
    tech: ["Python", "Conversational AI", "NLP"],
    icon: "heartPulse" as const,
    highlight: "Multilingual agent",
    href: "https://github.com/Shekhar442/AyushMitr",
  },
  {
    title: "KrushiMind — Farmer PWA",
    description:
      "AI-powered progressive web app for Indian smallholder farmers: offline-first tools for crop identification, finances, community, and marketplace access.",
    tech: ["JavaScript", "PWA", "AI", "AgriTech"],
    icon: "sprout" as const,
    highlight: "PWA / AgriTech",
    href: "https://github.com/Shekhar442/KrushiMind",
    extraLinks: [
      { label: "Live demo", href: "https://krushi-mind.vercel.app" },
    ],
  },
  {
    title: "Manas — Mental Health Support Chatbot",
    description:
      "Mental health support chatbot for empathetic, conversational assistance; Python-based implementation aligned with India-focused Gen AI coursework.",
    tech: ["Python", "NLP", "Generative AI"],
    icon: "messageSquare" as const,
    highlight: "Mental health",
    href: "https://github.com/Shekhar442/Manas",
  },
  {
    title: "Text Generation for Creative Writing",
    description:
      "AI-powered writing assistant using GPT-2 that generates creative content from user prompts across selected genres.",
    tech: ["Python", "GPT-2", "NLP", "Generative AI"],
    icon: "penLine" as const,
    highlight: "Creative writing",
    href: "https://github.com/Shekhar442/Text-Generation-for-Creative-Writing",
  },
  {
    title: "Musafir Bot — AI Travel Chatbot",
    description:
      "AI-driven travel advisor for India: interactive trip guidance and recommendations built with React and the GPT API.",
    tech: ["React", "JavaScript", "GPT API", "NLP"],
    icon: "plane" as const,
    highlight: "Travel / India",
    href: "https://github.com/Shekhar442/musafir-bot",
    extraLinks: [
      { label: "Live demo", href: "https://musafir-bot.vercel.app" },
    ],
  },
  {
    title: "AI PDF Q&A System",
    description:
      "PDF question-answering app with text extraction, embedding storage in PostgreSQL, vector retrieval, and a Streamlit interface.",
    tech: ["Python", "PostgreSQL", "Vector Search", "Streamlit", "RAG"],
    icon: "fileText" as const,
    highlight: "RAG / PDF QA",
    href: "https://github.com/Shekhar442/AI-PDF-QA-System",
    extraLinks: [
      { label: "Live demo", href: "https://ai-pdf-qa-system.vercel.app" },
    ],
  },
  {
    title: "ARS — Hinglish Speech Recognition",
    description:
      "Automatic speech recognition for Hindi–English code-mixed (Hinglish) audio using OpenAI Whisper (local GPU) and SarvamAI (cloud), with a FastAPI backend and Streamlit frontend.",
    tech: ["Python", "Whisper", "FastAPI", "Streamlit", "Speech AI"],
    icon: "mic" as const,
    highlight: "ASR / Hinglish",
    href: "https://github.com/Shekhar442/ARS",
  },
  {
    title: "TaskMesh AI — Multi-Agent Pipeline",
    description:
      "FastAPI service that runs a multi-agent workflow pipeline with SQL-backed persistence, plus a lightweight HTML/CSS/JS console frontend.",
    tech: ["Python", "FastAPI", "Multi-agent", "SQL"],
    icon: "network" as const,
    highlight: "Agents + API",
    href: "https://github.com/Shekhar442/taskmesh-ai",
    extraLinks: [
      {
        label: "Frontend repo",
        href: "https://github.com/Shekhar442/taskmesh-ai-frontend",
      },
    ],
  },
  {
    title: "Supply Chain Optimization with GenAI",
    description:
      "Generative AI platform for supply-chain optimization—insights and decision support across logistics workflows.",
    tech: ["HTML", "GenAI", "Supply Chain"],
    icon: "truck" as const,
    highlight: "GenAI / Ops",
    href: "https://github.com/Shekhar442/Supply-Chain-Optimization-Platform-with-GenAI-",
  },
  {
    title: "Adaptive RAG",
    description:
      "Adaptive retrieval-augmented generation pipeline that adjusts retrieval strategy for more relevant, grounded answers.",
    tech: ["Python", "RAG", "LLM"],
    icon: "layers" as const,
    highlight: "RAG",
    href: "https://github.com/Shekhar442/Adaptive-Rag",
  },
  {
    title: "Document Genie — RAG with Gemini Pro",
    description:
      "Document Q&A using a RAG framework powered by Gemini Pro for grounded answers over uploaded content.",
    tech: ["Python", "RAG", "Gemini Pro"],
    icon: "fileSearch" as const,
    highlight: "Document Q&A",
    href: "https://github.com/Shekhar442/Document-Genie-using-RAG-Framwork",
  },
  {
    title: "RAG CoT Chatbot Architecture",
    description:
      "RAG-based query suggestion chatbot with chain-of-thought reasoning, designed for WordPress sites.",
    tech: ["Python", "RAG", "Chain of Thought", "WordPress"],
    icon: "bot" as const,
    highlight: "RAG / CoT",
    href: "https://github.com/Shekhar442/rag-cot-chatbot-architecture",
  },
  {
    title: "PeriodicAI",
    description:
      "Interactive periodic-table style presentation of AI technologies—organized reference for models, concepts, and tooling.",
    tech: ["HTML", "AI Education", "UI"],
    icon: "table2" as const,
    highlight: "AI reference",
    href: "https://github.com/Shekhar442/PeriodicAI",
  },
  {
    title: "Text to Speech",
    description:
      "Python utility for converting text into speech for accessibility and voice-output demos.",
    tech: ["Python", "TTS", "Audio"],
    icon: "volume2" as const,
    highlight: "Speech",
    href: "https://github.com/Shekhar442/TextToSpeech",
  },
  {
    title: "Shail-Shri — Uttarakhand Portal",
    description:
      "Information and booking portal with links to destinations and experiences across majestic Uttarakhand.",
    tech: ["HTML", "Web", "Travel"],
    icon: "mapPin" as const,
    highlight: "Travel portal",
    href: "https://github.com/Shekhar442/Shail-Shri",
    extraLinks: [
      { label: "Live demo", href: "https://shail-shri.vercel.app" },
    ],
  },
  {
    title: "Web Scraper",
    description:
      "Python script demonstrating Selenium WebDriver with BeautifulSoup to scrape dynamic content from web pages.",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    icon: "globe" as const,
    highlight: "Scraping",
    href: "https://github.com/Shekhar442/Web_Scraper",
  },
] as const

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Artificial Intelligence" as const,
    institution: "Jain (Deemed-to-be University)",
    period: "2021 – 2023 · CGPA 9.11",
    href: "https://www.linkedin.com/school/jaindeemedtobeuniversity/",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "ICFAI University",
    period: "July 2008 – July 2013",
    href: "https://www.icfaiuniversity.edu.in/",
  },
  {
    degree: "O Level (IT)",
    institution:
      "National Institute of Electronics & Information Technology (NIELIT)",
    period: "August 2021 – March 2022",
    href: "https://www.nielit.gov.in/",
  },
] as const

/** Licenses & certifications — LinkedIn + GitHub README (newest first). */
export const certifications = [
  {
    name: "Digital Personal Data Protection Act 2023 | Complete DPDPA'23",
    issuer: "Udemy",
    issued: "Jul 2026",
    href: "https://www.linkedin.com/in/shekhar-suman-a5978833",
  },
  {
    name: "Google Cloud Gen AI Academy APAC Edition (Cohort 1)",
    issuer: "Google Cloud · Hack2skill",
    issued: "Apr 2026",
    href: "https://www.linkedin.com/in/shekhar-suman-a5978833",
  },
  {
    name: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud Skills Boost",
    issued: "2025",
    href: "https://cloudskillsboost.google/public_profiles/c8f28622-f854-47c2-b427-b4013c04ec29",
  },
  {
    name: "Introducing Multimodal Llama 3.2",
    issuer: "DeepLearning.AI",
    issued: "2025",
    href: "https://www.deeplearning.ai/courses/introducing-multimodal-llama-3-2",
  },
  {
    name: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Cloud Skills Boost",
    issued: "Sep 2024",
    href: "https://cloudskillsboost.google/public_profiles/c8f28622-f854-47c2-b427-b4013c04ec29",
  },
  {
    name: "Introduction to Statistics",
    issuer: "Stanford Online",
    issued: "Sep 2024",
    href: "https://coursera.org/account/accomplishments/verify/WTTJ94YWP34J",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    issued: "May 2024",
    href: "https://www.credly.com/badges/2666fe2f-9ff1-44e1-a7fb-15bd3c3c2fe2",
  },
  {
    name: "Data Analysis with R Programming",
    issuer: "Google",
    issued: "Apr 2024",
    href: "https://coursera.org/account/accomplishments/records/H8W398SE785K",
  },
  {
    name: "Share Data Through the Art of Visualization",
    issuer: "Google",
    issued: "Apr 2024",
    href: "https://coursera.org/account/accomplishments/records/J9DTDZHJR6SQ",
  },
  {
    name: "Analyze Data to Answer Questions",
    issuer: "Google",
    issued: "Mar 2024",
    href: "https://coursera.org/account/accomplishments/records/SSTMEB2Y8UM3",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    issued: "Mar 2024",
    href: "https://cloudskillsboost.google/public_profiles/c8f28622-f854-47c2-b427-b4013c04ec29/badges/8200972",
  },
  {
    name: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Google",
    issued: "Feb 2024",
    href: "https://coursera.org/account/accomplishments/records/JEY73CQ9DMAX",
  },
  {
    name: "Prepare Data for Exploration",
    issuer: "Google",
    issued: "Feb 2024",
    href: "https://coursera.org/account/accomplishments/records/QXQ4MXEK5M4Q",
  },
  {
    name: "Process Data from Dirty to Clean",
    issuer: "Google",
    issued: "Feb 2024",
    href: "https://coursera.org/account/accomplishments/records/CLWUF5QLMMDC",
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    issued: "Jan 2024",
    href: "https://coursera.org/account/accomplishments/records/RGTF6TXYUDYR",
  },
] as const

export const sectionCopy = {
  skills: {
    title: "Technical",
    titleAccent: "Skills",
    subtitle:
      "Languages & frameworks, AI/ML focus areas, cloud & tools, and core competencies—aligned with LinkedIn and GitHub.",
  },
  experience: {
    title: "Professional",
    titleAccent: "Experience",
    subtitle: "From military operations to AI in industry",
  },
  projects: {
    title: "GitHub",
    titleAccent: "Projects",
    subtitle:
      "Repositories from github.com/Shekhar442 — ML, NLP, RAG, speech, GenAI, and full-stack apps",
  },
  education: {
    title: "Education &",
    titleAccent: "Certifications",
    subtitle: "Degrees and professional certifications",
  },
  contact: {
    title: "Get in",
    titleAccent: "Touch",
    subtitle: "Let's discuss how AI can transform your business",
    connectHeading: "Let's Connect",
    connectBlurb:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.",
  },
} as const
