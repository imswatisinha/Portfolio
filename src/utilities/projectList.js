// Import project images
import Portfolio from '../assests/ProjectImages/Portfolio.png';
import PizzaApp from '../assests/ProjectImages/PizzaApp.png';
import TicTacToe from '../assests/ProjectImages/TicTacToe.jpg';
import BusinessCard from '../assests/ProjectImages/BusinessCard.jpg';
import toDoList from '../assests/ProjectImages/toDoList.jpg';
import ClubManagement from '../assests/ProjectImages/ClubManagement.png';

const projects = [
  {
    name: "Brainwave - AI Chat App",
    image: "/ProjectImages/Brainwave.png",
    technologies: ["React", "JavaScript", "SVG/PNG", "AI/NLP", "API Integration"],
    description: "An AI-powered chat app with voice recognition, customizable bots, and integrations for productivity and fun. Features gamified chat experience, multi-device support, and interactive interface.",
    github: "https://github.com/imswatisinha/brainwave",
    deployed: "https://brainwave-neon-rho.vercel.app/",
    category: ["Frontend", "AI/ML"],
  },
  {
    name: "Perfume E-Commerce",
    image: "/ProjectImages/Perfume.png",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    description: "Created a visually appealing and responsive e-commerce website for perfumes. Used jQuery for dynamic UI interaction across devices with modern shopping cart functionality.",
    github: "https://github.com/imswatisinha/perfume-website",
    deployed: "https://imswatisinha.github.io/Perfume-website/",
    category: ["Frontend"],
  },
  {
    name: "ISRO-GUI Analyzer",
    image: ClubManagement,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Django", "Python"],
    description: "Working on MIL-STD-1553B protocol analysis and automation of bus controller scheduling evaluation. Developing intuitive UI to visualize real-time behavior of remote terminals and subsystem performance.",
    github: "https://github.com/imswatisinha/isro-project",
    deployed: "#",
    category: ["Fullstack", "Backend", "Security"],
  },
  {
    name: "DDoS Mitigation using pfSense",
    image: TicTacToe,
    technologies: ["pfSense", "Networking", "Cybersecurity", "Firewall"],
    description: "Worked on DDoS mitigation project using pfSense, an open-source firewall and router platform. The project successfully reduced the impact of DDoS attacks, enhancing network resilience.",
    github: "https://github.com/imswatisinha/ddos-mitigation",
    deployed: "#",
    category: ["Security", "Backend"],
  },
  {
    name: "Portfolio Website",
    image: Portfolio,
    technologies: ["Html", "ReactJS", "CSS", "JavaScript", "Bootstrap"],
    description: "A personal portfolio website to showcase my projects and skills.",
    github: "https://github.com/imswatisinha/portfolio",
    deployed: "https://portfolio-imswatisinha.vercel.app/",
    category: ["Frontend"],
  },
  {
    name: "Pizza App",
    image: PizzaApp,
    technologies: ["Html", "CSS", "JavaScript", "Django", "Bootstrap", "REST APIs", "JQuery"],
    description: "A pizza ordering platform with order tracking and history.",
    github: "https://github.com/ThisIsSurabhiSinha/PizzaApp",
    deployed: "https://pizzaroo-pizza-delivery-app.onrender.com",
    category: ["Fullstack" , "Backend"],
  },
  {
    name: "Club Catalyst",
    image: ClubManagement,
    technologies: ["Html", "CSS", "JavaScript", "Django", "Bootstrap", "REST APIs", "JQuery"],
    description: "Club Catalyst is a comprehensive platform designed to manage and streamline club activities within our college. The website facilitates event scheduling, member management, task assignments, and communication, making club operations more efficient and organized.",
    github: "https://github.com/ThisIsSurabhiSinha/ClubManagement",
    deployed: "https://clubcatalyst-y67f5eu3.b4a.run/",
    category: ["Backend", "Fullstack"],
  },
  {
    name: "Tic Tac Toe",
    image: TicTacToe,
    technologies: ["Html", "CSS", "JavaScript", "Bootstrap"],
    description: "A simple Tic Tac Toe game built using frontend technologies.",
    github: "https://github.com/ThisIsSurabhiSinha/TicTacToe",
    deployed: "https://thisissurabhisinha.github.io/TicTacToe/",
    category: ["Frontend"],
  },
  {
    name: "ListEase - ToDo List",
    image: toDoList,
    technologies: ["Html", "CSS", "JavaScript"],
    description: "A simple and efficient ToDo list application for managing daily tasks and productivity. Features include task creation, completion tracking, and local storage.",
    github: "https://github.com/imswatisinha/ToDo",
    deployed: "https://imswatisinha.github.io/ToDo/",
    category: ["Frontend"],
  },
];

export default projects;
