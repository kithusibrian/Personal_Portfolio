// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import shadcnLogo from "./assets/tech_logo/shadcn-ui.svg";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import kbcLogo from "./assets/company_logo/kbc.png";
import utestLogo from "./assets/company_logo/utest.png";

// Education Section Logo's

import pwaniLogo from "./assets/education_logo/pwani2.jpg";

// Project Section Logo's
import foretrackLogo from "./assets/work_logo/foretrack.png";
import carsaiLogo from "./assets/work_logo/vehicles.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Shadcn UI", logo: shadcnLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: kbcLogo,
    role: "ICT Intern",
    company: "Kenya Broadcasting Corporation (KBC)",
    date: "June 2025 - August 2025",
    desc: "Served in the ICT Department, combining software development and IT support responsibilities. Developed and enhanced the KBC SharePoint platform using React, creating reusable components, implementing responsive interfaces, and improving internal workflows for employees. Assisted in maintaining enterprise systems, troubleshooting technical issues, documenting solutions, and supporting the organization's digital transformation projects.",
    skills: [
      "React JS",
      "JavaScript",
      "Network Administration",
      "System Maintenance",
      "Frontend Development",
      "Component-Based Architecture",
      "Responsive Design",
      "IT Support",
      "Troubleshooting",
      "Technical Documentation",
    ],
  },
  {
    id: 1,
    img: utestLogo,
    role: "Software Tester",
    company: "uTest (Applause)",
    date: "2022 - Present",
    desc: "Participated in crowdtesting projects for web and mobile applications, executing test cases, identifying defects, reporting bugs with detailed reproduction steps, and validating fixes. Collaborated with global testing teams to ensure product quality, usability, functionality, and cross-platform compatibility across various devices and environments.",
    skills: [
      "Manual Testing",
      "Bug Reporting",
      "Test Case Execution",
      "Regression Testing",
      "Functional Testing",
      "Exploratory Testing",
      "Mobile Testing",
      "Web Testing",
      "Usability Testing",
      "Jira",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: pwaniLogo,
    school: "Pwani University",
    date: "August 2022 - May 2026",
    desc: "I have completed my Bachelor's degree in Computer Science (B.Sc.) from Pwani University. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Pwani University allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science in Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Foretrack – AI-Powered Finance Management Platform",
    description:
      "A production-style full-stack application that helps users track finances, manage budgets, and receive AI-powered financial insights and automated reports.",
    image: foretrackLogo,
    tags: [
      "React",
      "Node.js",
      "GeminiAI",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Cron Jobs",
      "Vercel",
    ],
    github: "https://github.com/kithusibrian/Foretrack/",
    webapp: "https://foretrack-pi.vercel.app/",
  },
  {
    id: 1,
    title: "CarsAI – AI-Powered Vehicle Marketplace",
    description:
      "An AI-driven full-stack vehicle marketplace that enables dealerships to manage inventory efficiently while allowing users to discover, filter, and book vehicles through intelligent search and automation.",
    image: carsaiLogo,
    tags: ["Next.js", "PostgreSQL", "Prisma", "GeminiAI", "Arcjet", "Vercel"],
    github: "https://github.com/kithusibrian/AI-Powered-Vehicles-Website",
    webapp: "https://ai-powered-vehicles-website.vercel.app/",
  },
];
