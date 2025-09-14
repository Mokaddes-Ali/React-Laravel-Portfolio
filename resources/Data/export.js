import building from "../assets/Images/building.svg";
import construction from "../assets/Images/construction.svg";
import design from "../assets/Images/design.svg";
import document from "../assets/Images/document.svg";
import paint from "../assets/Images/paint.svg";
import support from "../assets/Images/support.svg";

import client1 from "../assets/Images/jibon.jpg";
import client2 from "../assets/Images/mainuddin.jpg";
import client3 from "../assets/Images/partharaj.jpg";

import { FaLightbulb, FaPencilRuler, FaCode, FaServer, FaDatabase, FaRocket } from "react-icons/fa";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
export const planning = [
  {
    icon: FaLightbulb,
    title: "Requirement Analysis",
    about:
      "Understand client needs, define project goals, and prepare a roadmap with features & functionalities.",
  },
  {
    icon: FaPencilRuler,
    title: "UI/UX Design",
    about:
      "Create wireframes, mockups, and prototypes using Figma or Adobe XD for a seamless user experience.",
  },
  {
    icon: FaCode,
    title: "Frontend Development",
    about:
      "Develop interactive and responsive UIs using React, Tailwind CSS, JavaScript, and Redux.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    about:
      "Build robust server-side logic using PHP, Laravel, REST API, and authentication techniques.",
  },
  {
    icon: FaDatabase,
    title: "Database Management",
    about:
      "Design and optimize MySQL databases, ensure data security, and manage relationships efficiently.",
  },
  {
    icon: FaRocket,
    title: "Deployment & Maintenance",
    about:
      "Deploy the project using Netlify, Vercel, or DigitalOcean, and provide regular updates & security patches.",
  },
];


export const clients = [
  {
    image: client1,
    name: " Md Azizul Haque",
    about:
      "He submits projects on time, performs well, and writes optimized, efficient code",
    post: "Software Engineer",
  },
  {
    image: client2,
    name: "Mohammed Minoddin",
    about:
      "Mokaddes Ali is a skilled developer with problem-solving and Laravel-React expertise",
    post: "Software Developer",
  },
  {
    image: client3,
    name: "Partharaj Deb",
    about:
      "Mokaddes Ali is great at problem-solving and finds simple, smart solutions quickly",
    post: "Sr. Software Engineer",
  },
];
