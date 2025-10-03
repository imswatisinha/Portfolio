// Import project images
import Portfolio from '../assests/ProjectImages/Portfolio.png';
import TicTacToe from '../assests/ProjectImages/TicTacToe.jpg';

const projects = [
 
  {
    name: "JournalWeb",
    image: "/ProjectImages/JournalWeb.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description: "A comprehensive journal web application for creating, managing, and organizing personal journal entries. Features user authentication, rich text editing, and cloud storage for seamless access across devices.",
    github: "https://github.com/imswatisinha/journalweb",
    deployed: "#",
    category: ["Fullstack", "Backend"],
  },
  {
    name: "YouTube Synthesizer",
    image: "/ProjectImages/YouTubeSynthesizer.png",
    technologies: ["Python", "Streamlit", "YouTube API", "Natural Language Processing", "AI/ML", "Data Analysis"],
    description: "An intelligent YouTube content synthesizer that analyzes and summarizes video content using advanced NLP techniques. Extracts key insights, generates concise summaries, and provides comprehensive analysis of YouTube videos to help users quickly understand video content without watching the entire video.",
    github: "https://github.com/imswatisinha/YouTube_Synthesizer",
    deployed: "https://youtubesynthesizer-wfstkfj2cd787cajyetcf5.streamlit.app/",
    category: ["AI/ML", "Backend", "Data Science"],
  },
  {
    name: "Student Performance Predictor",
    image: "/ProjectImages/studentperformance.png",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Flask", "HTML", "CSS"],
    description: "A machine learning application that predicts student performance based on various academic and demographic factors. Uses regression algorithms to analyze patterns and provide insights for educational planning.",
    github: "https://github.com/imswatisinha/student-performance-predictor",
    deployed: "#",
    category: ["AI/ML", "Backend", "Data Science"],
  },
   
  {
    name: "My Morning Buddy",
    image: "/ProjectImages/morningBuddy.png",
    technologies: ["Python", "Streamlit", "AI/ML", "Web Development", "API Integration"],
    description: "A personalized morning companion application that provides daily motivation, inspirational thoughts, and productivity features to kickstart your day. Features an intuitive interface with weather updates, daily planning tools, and personalized content to enhance your morning routine.",
    github: "https://github.com/imswatisinha/MyMorningBuddy",
    deployed: "https://mymorningbuddy-g9atx39xpzxpiptshtogb4.streamlit.app/",
    category: ["Frontend", "AI/ML", "Backend"],
  },
  {
    name: "SnapStory - Image to Story Generator",
    image: "/ProjectImages/SnapStory.png",
    technologies: ["Python", "Streamlit", "OpenAI API", "Computer Vision", "Text-to-Speech", "AI/ML"],
    description: "An AI-powered application that transforms images into captivating stories with audio narration. Uses advanced computer vision and natural language processing to analyze images and generate creative narratives, complete with voice synthesis for an immersive storytelling experience.",
    github: "https://github.com/imswatisinha/SnapStory",
    deployed: "https://swati-snapstory.streamlit.app/",
    category: ["AI/ML", "Backend", "Data Science"],
  },
  {
    name: "GUI-Analyzer ISRO Project",
    image: "/ProjectImages/GUI-ISRO.png",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Django", "Python"],
    description: "Working on MIL-STD-1553B protocol analysis and automation of bus controller scheduling evaluation. Developing intuitive UI to visualize real-time behavior of remote terminals and subsystem performance.",
    github: "https://github.com/imswatisinha/isro-project",
    deployed: "#",
    category: ["Fullstack", "Backend", "Security"],
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
    name: "Tic Tac Toe",
    image: TicTacToe,
    technologies: ["Html", "CSS", "JavaScript", "Bootstrap"],
    description: "A simple Tic Tac Toe game built using frontend technologies.",
    github: "https://github.com/ThisIsSurabhiSinha/TicTacToe",
    deployed: "https://thisissurabhisinha.github.io/TicTacToe/",
    category: ["Frontend"],
  },
  
];

export default projects;
