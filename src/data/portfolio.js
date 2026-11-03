
// ---------------------------------------------------------------------------
// Rahul Bhadekar - Software Developer Portfolio
// All portfolio content is managed from this file.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Rahul Bhadekar",
  initials: "RB",
  role: "Software Developer",
  roleAccent: "Java | Spring Boot | Full Stack",
  location: "Pune, Maharashtra, India",
  yearsExperience: "Project & Internship Experience",
  devopsYears: null,

  intro:
    "Software Developer focused on Java, Spring Boot, REST APIs, React, and database-driven applications. Passionate about building reliable software solutions and solving real-world problems through technology.",

  resumeFile: "/Rahul_Bhadekar_Resume.pdf",
};


export const contact = {
  email: "rahulbhadekar2@gmail.com",
  phone: "+91-9691439806",
  whatsapp: "+91-9691439806",

  linkedin: "https://www.linkedin.com/in/rahul-bhadekar",
  github: "https://github.com/rahulbhadekar",
};


// Technologies displayed in the scrolling strip under the hero.
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

// ---------------------------------------------------------------------------
// ABOUT SECTION
// ---------------------------------------------------------------------------

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering graduate from LNCT&S, Bhopal, passionate about software development, backend engineering, and problem-solving.",

    "My primary focus is Java backend development using Spring Boot, Hibernate, REST APIs, and SQL. I also work with React.js and modern frontend technologies to build full-stack applications. I enjoy developing practical projects, writing maintainable code, and continuously improving my technical skills.",
  ],

  motto: "Think. Code. Build. Learn. Repeat.",

  glance: [
    { label: "Location", value: "Pune, Maharashtra" },
    { label: "Current Focus", value: "Software Development" },
    { label: "Primary Language", value: "Java" },
    { label: "Backend", value: "Spring Boot & Hibernate" },
    { label: "Database", value: "MySQL & PostgreSQL" },
    { label: "Education", value: "B.Tech CSE, 2026" },
  ],

  stats: [
    { value: 2, suffix: "", label: "Internship Experiences" },
    { value: 3, suffix: "", label: "Featured Projects" },
    { value: 2, suffix: "", label: "Academic Qualifications" },
  ],

  focusAreas: [
    {
      title: "Java Backend Development",
      color: "accent",
      icon: "pipeline",
      text: "Developing backend applications using Java, Spring Boot, Spring Data JPA, Hibernate, and REST APIs with a structured application architecture.",
    },
    {
      title: "Full Stack Development",
      color: "blue",
      icon: "container",
      text: "Building responsive user interfaces using React.js, JavaScript, HTML, and CSS, and integrating them with backend services.",
    },
    {
      title: "Database Management",
      color: "amber",
      icon: "cloud",
      text: "Working with MySQL and PostgreSQL, database design, SQL queries, relationships, joins, and application data persistence.",
    },
    {
      title: "Development Tools",
      color: "coral",
      icon: "monitor",
      text: "Using Git, GitHub, Maven, Postman, and IntelliJ IDEA for version control, application development, API testing, and debugging.",
    },
  ],
};

// ---------------------------------------------------------------------------
// EXPERIENCE SECTION
// Only the two selected internships are included.
// ---------------------------------------------------------------------------

export const experience = [
  {
    company: "OctaNet Services Pvt. Ltd.",
    role: "Frontend Development Intern",
    location: null,
    period: "August 2024 – September 2024",
    color: "amber",

    points: [
      "Completed a frontend development internship focused on website development and user interface implementation.",
      "Worked with HTML, CSS, and JavaScript to develop responsive web interfaces.",
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Frontend Development",
    ],
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
      "Worked on the Revitalize Waste Management website with Firebase integration.",
    ],

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
    ],
  },
];

// ---------------------------------------------------------------------------
// TECHNICAL SKILLS
// ---------------------------------------------------------------------------

export const skills = [
  {
    category: "Programming Languages",
    icon: "git",
    items: [
      "Java",
      "JavaScript",
      "SQL",
    ],
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
      "JWT Authentication",
    ],
  },

  {
    category: "Frontend Development",
    icon: "container",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Bootstrap",
    ],
  },

  {
    category: "Databases",
    icon: "monitor",
    items: [
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "SQL Joins",
    ],
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
      "VS Code",
      "OOP",
      "DSA",
      "DBMS",
      "Computer Networks",
    ],
  },
];

// ---------------------------------------------------------------------------
// PROJECTS
// ---------------------------------------------------------------------------

export const projects = [
  {
    title: "GoTrip – Travel Booking Application",

    category: "Full Stack",

    art: "travel",

    description:
      "Developed a travel booking application with a Java Spring Boot backend, MySQL database, and JWT-based authentication. Implemented REST APIs and frontend integration using HTML, CSS, and JavaScript.",

    tech: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "JWT",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: null,
    live: null,
  },

  {
    title: "ClickStore – E-Commerce Application",

    category: "Full Stack",

    art: "ecommerce",

    description:
      "Building a full-stack e-commerce application using React, Java Spring Boot, and PostgreSQL. The project focuses on product management, customer authentication, shopping cart, inventory, and order management.",

    tech: [
      "React.js",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Security",
      "REST APIs",
    ],

    github: null,
    live: null,
  },

  {
    title: "Revitalize – Waste Management Website",

    category: "Frontend",

    art: "environment",

    description:
      "Developed a frontend waste management website designed to promote waste management awareness and provide a user-friendly web experience with Firebase integration.",

    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Firebase",
    ],

    github: null,
    live: null,
  },
];

// ---------------------------------------------------------------------------
// EDUCATION
// ---------------------------------------------------------------------------

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering – 7.5 CGPA",

    institution:
      "Lakshmi Narain College of Technology & Science (LNCT&S), Bhopal – RGPV",

    year: "2026",
  },

  {
    degree: "Diploma in Computer Science & Engineering – 7.5 CGPA",

    institution:
      "SV Polytechnic College, Bhopal",

    year: "2023",
  },
];

// ---------------------------------------------------------------------------
// CERTIFICATIONS & COMPLETED LEARNING
// Four selected entries.
// ---------------------------------------------------------------------------

export const certifications = [
  {
    name: "Java Programming Training",

    short: "Java Programming",

    issuer: "SCA Coaching, Bhopal",

    url: null,
  },

  {
    name: "Java Programming",

    short: "Java",

    issuer: "Infosys Springboard – Course Completed",

    url: null,
  },

  {
    name: "Java & Spring Boot Development",

    short: "Java & Spring Boot",

    issuer: "Udemy – Course Completed",

    url: null,
  },

  {
    name: "AWS Cloud & AI Learning",

    short: "AWS Cloud & AI",

    issuer: "AWS Skill Builder – Learning Completed",

    url: null,
  },
];
