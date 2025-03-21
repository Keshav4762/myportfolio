import { title } from "framer-motion/client";
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a motivated and adaptable full-stack developer eager to build efficient and user-friendly web applications. As a fresher, I have gained hands-on experience working with technologies like React, Next.js, Node.js, MySQL, and MongoDB through personal projects and learning endeavors. My journey into web development stems from a strong curiosity about how things work, and I am excited to grow this into a dynamic career where I can continually learn and embrace new challenges. I thrive in collaborative settings, enjoy tackling complex problems, and am committed to delivering quality solutions. Beyond coding, I enjoy staying active, exploring emerging technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "STL Book (Chrome extension)",
    image: project1,
    description:
      "A chrome extension that helps competitive programmers while solving DSA questions.",
    technologies: ["HTML", "CSS", "Javascript"],
    link:'https://chromewebstore.google.com/detail/stl-book/adkojnocmaplcpiejookomnjcpclgcai?hl=en'
  },
  {
    title: "kk-coins (Crypto Tracker App)",
    image: project2,
    description:
      "An application for tracking crypto investments with help of graphs.",
    technologies: ["HTML", "CSS", "React", "Firebase"],
    link: 'https://kk-coins.vercel.app/',
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "GATE 2024",
    description: "Qualified GATE exam in field of 'Data Science and Artificial Intelligence' in first attempt."
  },
  {
    title: "DSA Questions",
    description: "Solved 400+ programming question on various platforms like Leetcode, Codechef, Hackerrank etc."
  },
  {
    title: "Elitmus PH Test",
    description: "Scored 90 percentile in Elitmus PH test."
  }
]

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91-8449949134",
  email: "keshav4762@gmail.com",
};
