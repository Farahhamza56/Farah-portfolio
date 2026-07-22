export const profile = {
  name: "Farah Hamza Ghadady",
  title: "Computer & Data Science Student",
  location: "Alexandria, Egypt",
  email: "farahghadady@gmail.com",
  phone: "+20 120 054 3207",
  linkedin: "https://www.linkedin.com/in/farah-hamza",
  github: "https://github.com/Farahhamza56",
  // Public CV link — opens in a new tab via the "View CV" button.
  // Replace the URL below with your public CV link (e.g. a Google Drive
  // "Anyone with the link" share URL). It must be publicly accessible,
  // with no authentication, so it always works after deployment.
  cvUrl: "https://drive.google.com/file/d/1zo7atygFSY6D5XJs9ZKyIGif6Yr1M1LQ/view?usp=sharing",
  photo: "/farah-profile.jpg",
  intro:
    "Computer & Data Science student at Alexandria University, passionate about software engineering, problem-solving, and continuous learning.",
  summary:
    "I enjoy building real-world tech projects and developing skills across software development and data science. Currently exploring internships, bootcamps, and collaborative tech communities to grow and gain experience.",
  strengths: ["Teamwork", "Communication", "Time Management"],
}

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
]

export const skillGroups: { category: string; skills: string[] }[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "Java", "Kotlin"],
  },
  {
    category: "Mobile Development",
    skills: ["Android Fundamentals", "Jetpack Compose", "Material Design 3", "App Lifecycle", "UI/UX Design"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Machine Learning Basics", "Data Science", "Regression", "Clustering", "Feature Engineering"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS"],
  },
  {
    category: "Databases",
    skills: ["SQL"],
  },
  {
    category: "Core Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Data Structures",
      "Algorithms",
      "Systems Analysis & Design",
    ],
  },
]

export const experiences: {
  role: string
  organization: string
  period: string
  location: string
  points: string[]
}[] = [
  {
    role: "Android Mobile App Development Track — Digital Egypt Pioneers",
    organization: "Ministry of Communications and Information Technology",
    period: "Jun 2025 – Dec 2025",
    location: "Alexandria, Egypt",
    points: [
      "Gained hands-on experience in Android app development.",
      "Learned core concepts of mobile UI/UX design and the app lifecycle.",
      "Worked on practical projects applying mobile development tools and techniques.",
    ],
  },
]

export const projects: {
  name: string
  period: string
  description: string
  technologies: string[]
  features: string[]
  url?: string
  linkLabel?: string
}[] = [
  {
    name: "Movie Discovery App",
    period: "Oct 2025 – Dec 2025",
    description:
      "An Android application for discovering movies, built with Kotlin and Jetpack Compose following the MVVM architecture and consuming the TMDB API.",
    technologies: ["Kotlin", "Jetpack Compose", "TMDB API", "MVVM", "Kotlin Flow", "Material Design 3"],
    features: [
      "Responsive Material Design 3 interface",
      "Dark & Light mode support",
      "Real-time search",
      "Reactive data streams with Kotlin Flow",
    ],
    url: "https://github.com/nhahub/NHA-277",
    linkLabel: "View on GitHub",
  },
  {
    name: "Regression from Scratch",
    period: "Apr 2026",
    description:
      "Implemented Linear, Ridge, and Lasso regression entirely from scratch using manual gradient descent in Python, covering the full ML pipeline on real-world datasets.",
    technologies: ["Python", "NumPy", "Gradient Descent"],
    features: [
      "Linear, Ridge, and Lasso regression implementations",
      "Manual gradient descent optimization",
      "Full ML pipeline on real-world datasets",
    ],
    url: "https://colab.research.google.com/drive/1asLdfXweL6pLtQU3BnH23scsWYppTHqx?usp=sharing",
    linkLabel: "Open in Google Colab",
  },
  {
    name: "Data Mining Study",
    period: "Apr 2026",
    description:
      "Performed exploratory data analysis, preprocessing, and feature engineering on a dataset of 5,000+ rows, then implemented several advanced techniques.",
    technologies: ["Python", "K-Medoid Clustering", "Fuzzy Logic", "Genetic Algorithm"],
    features: [
      "EDA, preprocessing, and feature engineering on 5,000+ rows",
      "K-Medoid clustering implementation",
      "Fuzzy Logic modeling",
      "Genetic Algorithm optimization",
    ],
    url: "https://colab.research.google.com/drive/1IpfUvEuoyWpSzoOcm6aG0Ln8r81KfW4x",
    linkLabel: "Open in Google Colab",
  },
  {
    name: "Machine Learning Pipeline",
    period: "Apr 2026",
    description:
      "Built an end-to-end machine learning pipeline moving from baseline models to advanced ensembles, with systematic hyperparameter tuning.",
    technologies: ["Python", "Scikit-learn", "SVR", "Random Forest", "KNN"],
    features: [
      "Baseline models: Linear Regression and KNN",
      "Advanced ensembles: SVR, Random Forest, and Ensemble methods",
      "Hyperparameter tuning for performance",
    ],
    url: "https://colab.research.google.com/drive/1hHYXfxymb5h9Tg3qPBw-uC-nZtNy4pYO",
    linkLabel: "Open in Google Colab",
  },
  {
    name: "Online Clinic System — Systems Analysis & Design",
    period: "Apr 2026",
    description:
      "Produced a complete system analysis deliverable for an online clinic system, working within a team of seven.",
    technologies: ["DFDs", "UML Diagrams", "Gantt/PERT Charts", "Feasibility Study"],
    features: [
      "Data Flow Diagrams (DFDs)",
      "UML diagrams",
      "Gantt and PERT charts",
      "Feasibility study",
      "Collaborative work in a team of seven",
    ],
    url: "https://jjpcy574662h.jp.larksuite.com/docx/LjODdctO9ob7aGxR9wCjv4QVpYf?from=from_copylink",
    linkLabel: "View documentation",
  },
  {
    name: "E-Commerce System",
    period: "Mar 2025 – Apr 2025",
    description:
      "Designed a mini e-commerce platform in Java handling products, shopping cart, and order processing using object-oriented programming principles.",
    technologies: ["Java", "OOP"],
    features: [
      "Product catalog management",
      "Shopping cart functionality",
      "Order processing workflow",
      "Clean OOP design",
    ],
  },
  {
    name: "Course Page Website",
    period: "Nov 2024 – Dec 2024",
    description:
      "Developed a responsive course page using HTML and CSS with a clean layout for displaying course content.",
    technologies: ["HTML", "CSS"],
    features: ["Responsive layout", "Clean content presentation"],
  },
]

export const education: {
  degree: string
  institution: string
  period: string
  location: string
  details: string[]
}[] = [
  {
    degree: "Bachelor's Degree — Faculty of Computer and Data Science",
    institution: "Alexandria University",
    period: "2024 – Present",
    location: "Alexandria, Egypt",
    details: ["Expected Graduation: 2028", "GPA: 3.95 / 4.0"],
  },
]

export const certificates: { name: string; issuer: string; date: string; url: string }[] = [
  {
    name: "Cloud Foundations",
    issuer: "AWS Academy",
    date: "Apr 2026",
    url: "https://drive.google.com/file/d/1y5azMGx-JEnTR9I_bQmQQ9aq6uq7UBLm/view?usp=sharing",
  },
  {
    name: "Android Mobile App Development",
    issuer: "Digital Egypt Pioneers (DEPI)",
    date: "Feb 2026",
    url: "https://drive.google.com/drive/folders/1GUUjh28uWu4XLZd0H9EOPtM42KJnLTyE?usp=sharing",
  },
  {
    name: "Object-Oriented Programming",
    issuer: "HackerRank Campus FCDS",
    date: "Feb 2025",
    url: "https://drive.google.com/file/d/1N3FrmmMaEIjU2NMYAQdiUKmKBGYniGqY/view?usp=sharing",
  },
  {
    name: "Java, HTML & CSS Basics",
    issuer: "HackerRank Campus FCDS",
    date: "Dec 2024",
    url: "https://drive.google.com/file/d/1SgyeEz9p4lvu6dJnmcNe9q4gVo9T3y-R/view?usp=sharing",
  },
]

export const volunteering: {
  role: string
  organization: string
  period: string
  description: string
}[] = [
  {
    role: "Head of Scientific Committee — Season 6",
    organization: "HackerRank Campus, FCDS",
    period: "Jan 2026 – Present",
    description:
      "Creating summaries, practice questions, and easy learning methods, along with explanatory videos and a LeetCode account for teaching Data Structures & Algorithms.",
  },
  {
    role: "IT Member — OOP",
    organization: "HackerRank Campus FCDS",
    period: "",
    description: "Supported the Object-Oriented Programming learning track as an IT committee member.",
  },
  {
    role: "HR Member — Project Engine",
    organization: "HackerRank Campus FCDS",
    period: "Sep 2025 – Nov 2025",
    description: "Contributed to the Project Engine initiative as part of the HR committee.",
  },
]

export const languages: { name: string; level: string }[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Upper-Intermediate / Very Good" },
]
