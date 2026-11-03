// ---------------------------------------------------------------------------
// All portfolio content lives in this file.
// Update these values with your details; keep qualifications and experience accurate.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Rahul Bhadekar",
  initials: "RB",
  role: "Software Developer",
  roleAccent: "Java | Spring Boot | Full Stack",
  location: "Pune, Maharashtra, India",
  yearsExperience: "Fresher",
  devopsYears: null,

  intro:
    "Computer Science graduate focused on building reliable software and web applications using Java, Spring Boot, REST APIs, React, and relational databases.",

  resumeFile: "/Rahul_Bhadekar_Resume.pdf",
};

export const contact = {
  // Add your public professional email and phone number when ready.
  email: null,
  phone: null,
  whatsapp: null,
  linkedin: "https://www.linkedin.com/in/rahul-bhadekar",
  github: "https://github.com/rahulbhadekar",
};

// Tool names shown in the scrolling strip under the hero.
export const coreStack = [
  "Java",
  "Spring Boot",
  "Spring Data JPA",
  "Hibernate",
  "Spring Security",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "React.js",
  "JavaScript",
  "Git & GitHub",
  "Maven",
  "Postman",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering graduate from LNCT&S, Bhopal, with a strong interest in software development and problem-solving. I enjoy understanding how applications work and turning ideas into practical solutions.",
    "My current focus is Java backend development with Spring Boot, REST API development, database management, and frontend integration using React. I keep improving through hands-on projects, coding practice, and continuous learning.",
  ],

  motto: "Keep learning. Build with purpose. Improve with every project.",

  glance: [
    { label: "Location", value: "Pune, Maharashtra" },
    { label: "Current focus", value: "Java & Software Development" },
    { label: "Experience", value: "Fresher" },
    { label: "Primary stack", value: "Java, Spring Boot, React" },
    { label: "Database", value: "MySQL, PostgreSQL" },
    { label: "Education", value: "B.Tech CSE, 2026" },
  ],

  stats: [
    { value: 2, suffix: "", label: "Internship Experiences" },
    { value: 3, suffix: "", label: "Featured Projects" },
    { value: 2, suffix: "", label: "Academic Qualifications" },
  ],

  // Keep the icon values compatible with the existing focus-area illustrations.
  focusAreas: [
    {
      title: "Java Backend Development",
      color: "accent",
      icon: "pipeline",
      text: "Building backend functionality with Java and Spring Boot, including REST APIs, layered application structure, and Spring Data JPA.",
    },
    {
      title: "Full-Stack Application Development",
      color: "blue",
      icon: "container",
      text: "Connecting frontend interfaces built with React, JavaScript, HTML, and CSS to backend services through REST APIs.",
    },
    {
      title: "Database Design & SQL",
      color: "amber",
      icon: "cloud",
      text: "Working with MySQL and PostgreSQL, relational database design, SQL queries, joins, and application data persistence.",
    },
    {
      title: "Development Tools & Practices",
      color: "coral",
      icon: "monitor",
      text: "Using Git, GitHub, Maven, Postman, and IntelliJ IDEA during application development, API testing, and version control.",
    },
  ],
};

export const experience = [
  {
    company: "OctaNet Services Pvt. Ltd.",
    role: "Frontend Development Intern",
    location: null,
    period: "August 2024 – September 2024",
    color: "amber",
    points: [
      "Completed a frontend development internship focused on practical website and user-interface development.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Frontend Development"],
  },
  {
    company: "IBM SkillsBuild (CSRBOX)",
    role: "Front-End Web Development Intern",
    location: null,
    period: "June 2024 – August 2024",
    color: "coral",
    points: [
      "Completed the IBM SkillsBuild Summer Internship in Front-End Web Development through CSRBOX.",
      "Learned and applied HTML, CSS, and JavaScript.",
      "Worked on the frontend of the Revitalize Waste Management website with Firebase integration.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: "git",
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    category: "Backend Development",
    icon: "pipeline",
    items: [
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security",
      "REST API Development",
    ],
  },
  {
    category: "Frontend Development",
    icon: "container",
    items: ["HTML5", "CSS3", "JavaScript", "React.js (Basics)"],
  },
  {
    category: "Databases",
    icon: "monitor",
    items: ["MySQL", "PostgreSQL", "Database Design", "SQL Joins"],
  },
  {
    category: "Tools & Computer Science",
    icon: "cloud",
    items: [
      "Git",
      "GitHub",
      "Maven",
      "Postman",
      "IntelliJ IDEA",
      "OOP",
      "DSA",
      "DBMS",
      "Computer Networks",
    ],
  },
];

export const projects = [
  {
    title: "GoTrip – Travel Booking Application",
    category: "Full Stack",
    art: "pipeline",
    description:
      "A travel booking application with a Spring Boot backend, MySQL database, and JWT-based authentication. The frontend uses HTML, CSS, and JavaScript.",
    tech: ["Java", "Spring Boot", "MySQL", "JWT", "HTML", "CSS", "JavaScript"],
    github: null,
    live: null,
  },
  {
    title: "ClickStore – E-Commerce Application",
    category: "Full Stack",
    art: "modules",
    description:
      "An e-commerce application in development using React, Java Spring Boot, and PostgreSQL, with a focus on product, customer, cart, and order workflows.",
    tech: ["React", "Java", "Spring Boot", "PostgreSQL"],
    github: null,
    live: null,
  },
  {
    title: "Revitalize – Waste Management Website",
    category: "Frontend",
    art: "monitoring",
    description:
      "A frontend website project focused on waste management, built using HTML, CSS, and JavaScript with Firebase integration.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: null,
    live: null,
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering – 7.5 CGPA",
    institution: "Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal – RGPV",
    year: "2026",
  },
  {
    degree: "Diploma in Computer Science & Engineering – 7.5 CGPA",
    institution: "SV Polytechnic College, Bhopal",
    year: "2023",
  },
];

export const certifications = [
  {
    name: "Java Programming Training Certificate",
    short: "Java Training",
    issuer: "SCA Coaching, Bhopal",
    url: null,
  },
  {
    name: "Java Programming",
    short: "Java",
    issuer: "Infosys Springboard — Course Completed",
    url: null,
  },
  {
    name: "Java & Spring Boot Development",
    short: "Java + Spring Boot",
    issuer: "Udemy — Course Completed",
    url: null,
  },
  {
    name: "AWS Cloud & AI Learning",
    short: "AWS Cloud & AI",
    issuer: "AWS Skill Builder — Learning Completed",
    url: null,
  },
];
