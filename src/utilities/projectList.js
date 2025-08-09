// Import project images
import Portfolio from '../assests/ProjectImages/Portfolio.png';
import PizzaApp from '../assests/ProjectImages/PizzaApp.png';
import TicTacToe from '../assests/ProjectImages/TicTacToe.jpg';
import TenzieGame from '../assests/ProjectImages/TenzieGame.jpg';
import AssemblyEndGame from '../assests/ProjectImages/AssemblyEndGame.jpg';
import MemeBlast from '../assests/ProjectImages/MemeBlast.jpg';
import BusinessCard from '../assests/ProjectImages/BusinessCard.jpg';
import toDoList from '../assests/ProjectImages/toDoList.jpg';
import ClubManagement from '../assests/ProjectImages/ClubManagement.png';

const projects = [
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
    name: "Tic Tac Toe",
    image: TicTacToe,
    technologies: ["Html", "CSS", "JavaScript", "Bootstrap"],
    description: "A simple Tic Tac Toe game built using frontend technologies.",
    github: "https://github.com/ThisIsSurabhiSinha/TicTacToe",
    deployed: "https://thisissurabhisinha.github.io/TicTacToe/",
    category: ["Frontend"],
  },
  {
    name: "Tenzie Game",
    image: TenzieGame,
    technologies: ["Html", "ReactJS", "CSS", "JavaScript", "Bootstrap"],
    description: "A fun dice game built using React.",
    github: "https://github.com/ThisIsSurabhiSinha/tenzie-game",
    deployed: "https://tenzie-game-sage.vercel.app/",
    category: ["Frontend"],
  },
  {
    name: "Assembly Endgame",
    image: AssemblyEndGame,
    technologies: ["Html", "ReactJS", "CSS", "JavaScript", "Bootstrap"],
    description: "A React-based project showcasing advanced assembly features.",
    github: "https://github.com/ThisIsSurabhiSinha/assembly-endgame",
    deployed: "https://assembly-endgame.vercel.app/",
    category: ["Frontend"],
  },
  {
    name: "Meme Blast",
    image: MemeBlast,
    technologies: ["Html", "ReactJS", "CSS", "JavaScript", "Bootstrap"],
    description: "A fun app for browsing and sharing memes.",
    github: "https://github.com/ThisIsSurabhiSinha/memeBlast",
    deployed: "https://meme-blast-eight.vercel.app/",
    category: ["Frontend"],
  },
  {
    name: "My Business Card",
    image: BusinessCard,
    technologies: ["Html", "ReactJS", "CSS", "JavaScript", "Bootstrap"],
    description: "A professional business card app built using React.",
    github: "https://github.com/ThisIsSurabhiSinha/Business-Card",
    deployed: "https://business-card-zyvp.vercel.app/",
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
  {
    name: "Club Catalyst",
    image: ClubManagement,
    technologies: ["Html", "CSS", "JavaScript", "Django", "Bootstrap", "REST APIs", "JQuery"],
    description: "Club Catalyst is a comprehensive platform designed to manage and streamline club activities within our college. The website facilitates event scheduling, member management, task assignments, and communication, making club operations more efficient and organized.",
    github: "https://github.com/ThisIsSurabhiSinha/ClubManagement",
    deployed: "https://clubcatalyst-y67f5eu3.b4a.run/",
    category: ["Backend", "Fullstack"],
  },
];

export default projects;
