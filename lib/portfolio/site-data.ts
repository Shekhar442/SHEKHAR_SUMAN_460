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
  location: "Delhi, India",
  heroSummaryLabel: "Professional summary",
  heroTagline:
    "AI and Machine Learning Engineer focused on real-world problems with AI, data science, and predictive analytics. Twenty years in the Indian Air Force built expertise in logistics optimization, operational planning, and analysis; today that same discipline goes into computer vision, NLP, and deep learning. Nervousness detection at 95.49% accuracy, Musafir_Bot travel assistant, and Google Data Analytics plus Google Cloud AI and Stanford statistics training.",
  aboutSubtitle:
    "Military precision meets modern ML: from mission-critical operations to models in production",
  aboutImageSrc: "/Shekhar.png",
  aboutHeading: "AI engineer with a military foundation",
  aboutParagraphs: [
    "I am an AI and Machine Learning Engineer with a passion for solving real-world problems using AI, data science, and predictive analytics. My journey began in the Indian Air Force, where I gained expertise in logistics optimization, operational planning, and data analysis over 20 years. I now apply that precision to AI-driven solutions in computer vision, NLP, and deep learning.",
    "Expertise in Python, TensorFlow, OpenCV, NLP, predictive modeling, and Google Cloud AI. Highlights include a nervousness detection system at 95.49% accuracy and the Musafir_Bot AI travel chatbot. Certified across Google Data Analytics, Google Cloud AI, and Stanford Online statistics, with a drive for continuous learning and innovation.",
  ],
} as const

export const aboutStats = [
  { icon: "briefcase" as const, label: "Career (total)", value: "22+" },
  { icon: "award" as const, label: "Air Force Service", value: "20" },
  { icon: "graduationCap" as const, label: "Certifications", value: "10+" },
]

/** Technical skills — same groupings and items as résumé (TECHNICAL SKILLS). */
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
    ],
  },
  {
    title: "AI/ML Specializations",
    skills: [
      { name: "Computer Vision" },
      { name: "Natural Language Processing" },
      { name: "Deep Learning" },
      { name: "Generative AI" },
      { name: "Predictive Modeling" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Google Cloud AI" },
      { name: "Streamlit" },
      { name: "Git" },
      { name: "Data Visualization (Matplotlib, Seaborn)" },
      { name: "Linear Algebra" },
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Statistical Analysis" },
      { name: "Image Processing" },
      { name: "Model Optimization" },
      { name: "Data-Driven Decision Making" },
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
      "Architecting and deploying scalable ML solutions for computer vision and NLP applications",
      "Implementing deep learning models using TensorFlow and PyTorch for production environments",
      "Collaborating with cross-functional teams to integrate AI capabilities into business workflows",
    ],
  },
  {
    title: "Junior Data Scientist",
    company: "Zummit Infolabs",
    location: "Bengaluru, Karnataka",
    period: "March 2024 – Present",
    achievements: [
      "Developed nervousness detection system, face recognition system, and residual analysis of protein molecules",
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
      'Led team to complete "Optimizing Employee Retention and Performance through Data-Driven HR Strategies" during internship',
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
      'Analyzed data for project on age differences between right- and left-handed participants',
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

export const featuredProjects = [
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
    title: "Manas — Mental Health Support Chatbot",
    description:
      "Mental health support chatbot for empathetic, conversational assistance; Python-based implementation aligned with India-focused Gen AI coursework.",
    tech: ["Python", "NLP", "Generative AI"],
    icon: "messageSquare" as const,
    highlight: "Mental health",
    href: "https://github.com/Shekhar442/Manas",
  },
  {
    title: "Musafir Bot — AI Travel Chatbot",
    description:
      "AI-driven travel advisor chatbot for India: conversational trip guidance and recommendations using JavaScript and NLP-oriented patterns.",
    tech: ["JavaScript", "NLP", "Chatbot"],
    icon: "plane" as const,
    highlight: "Travel / India",
    href: "https://github.com/Shekhar442/musafir-bot",
  },
  {
    title: "KrushiMind — Farmer PWA",
    description:
      "AI-powered progressive web app for Indian smallholder farmers: offline-first tools for crop identification, finances, community, and marketplace access.",
    tech: ["JavaScript", "PWA", "AI", "AgriTech"],
    icon: "sprout" as const,
    highlight: "PWA / AgriTech",
    href: "https://github.com/Shekhar442/KrushiMind",
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

/** Licenses & certifications — aligned with LinkedIn (issue dates as shown there). */
export const certifications = [
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
      "Languages & frameworks, AI/ML focus areas, cloud & tools, and core competencies—matching my résumé.",
  },
  experience: {
    title: "Professional",
    titleAccent: "Experience",
    subtitle: "From military operations to AI in industry",
  },
  projects: {
    title: "Key",
    titleAccent: "Projects",
    subtitle: "Open-source and portfolio repos from GitHub — ML, NLP, speech, and full-stack AI",
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
