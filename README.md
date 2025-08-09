# 🌟 Swati Sinha - Portfolio Website

A modern, responsive personal portfolio website built with React.js showcasing full-stack development skills, projects, and experience.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://imswatisinha.github.io/Portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black)](https://github.com/imswatisinha/Portfolio)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🚀 Live Demo

**Visit the portfolio:** [https://imswatisinha.github.io/Portfolio](https://imswatisinha.github.io/Portfolio)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

## ✨ Features

### 🎨 Design & UI
- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Toggle between themes
- **Smooth Animations** - Using React Spring and Lottie
- **Modern UI/UX** - Clean, professional design
- **Interactive Elements** - Hover effects and transitions

### 🔧 Functionality
- **Project Showcase** - Filterable project gallery
- **Skills Display** - Coding platforms and technical skills
- **Education Timeline** - Academic journey visualization
- **Experience Section** - Professional experience
- **Contact Form** - Direct email integration
- **Resume Download** - PDF resume download

### ⚡ Performance
- **Lazy Loading** - Components loaded on demand
- **SEO Optimized** - Meta tags and Open Graph
- **Fast Loading** - Optimized assets and code splitting
- **Error Boundaries** - Graceful error handling
- **PWA Ready** - Progressive Web App features

## 🛠️ Tech Stack

### Frontend
- **React.js** (18.3.1) - Core framework
- **React Router DOM** (7.1.1) - Navigation
- **React Spring** (9.7.5) - Animations
- **React Bootstrap** (2.10.7) - UI components
- **Sass** (1.83.4) - Styling
- **Lottie React** (2.4.0) - Animations

### Tools & Utilities
- **EmailJS** - Contact form functionality
- **React Icons** (5.4.0) - Icon library
- **Bootstrap** (5.3.3) - CSS framework
- **Animate.css** (4.1.1) - CSS animations
- **Web Vitals** (4.2.4) - Performance monitoring

### Development
- **Create React App** - Build tool
- **ESLint** - Code linting
- **Git** - Version control
- **GitHub Pages** - Deployment

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── ProjectImages/      # Project screenshots
│   ├── index.html         # HTML template
│   ├── favicon.png        # Site favicon
│   └── resume.pdf         # Resume file
├── src/
│   ├── Components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Education.jsx  # Education timeline
│   │   ├── Footer.jsx     # Footer component
│   │   ├── Home.jsx       # Home page
│   │   ├── LandingPage.jsx # Landing section
│   │   ├── Navbar.jsx     # Navigation
│   │   ├── Project.jsx    # Projects showcase
│   │   ├── Skills.jsx     # Skills display
│   │   └── ...           # Other components
│   ├── Css/              # Styling files
│   ├── utilities/        # Utility functions
│   │   ├── projectList.js # Project data
│   │   └── performance.js # Performance utils
│   └── assets/           # Images and animations
├── package.json          # Dependencies
└── README.md            # Project documentation
```

## 🚀 Installation

### Prerequisites
- **Node.js** (16.0 or higher)
- **npm** or **yarn**
- **Git**

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/imswatisinha/Portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎯 Usage

### Development
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Create production build
npm run analyze    # Analyze bundle size
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
```

### Building for Production
```bash
npm run build
```
This creates a `build` folder with optimized production files.

## 🎨 Customization

### Personal Information
1. **Update personal details** in:
   - `src/Components/LandingPage.jsx` - Name and introduction
   - `src/Components/About.jsx` - About section
   - `src/Components/Footer.jsx` - Contact information

### Projects
2. **Add/modify projects** in `src/utilities/projectList.js`:
   ```javascript
   {
     name: "Project Name",
     image: "/ProjectImages/project.png",
     technologies: ["React", "Node.js"],
     description: "Project description",
     github: "https://github.com/username/repo",
     deployed: "https://project-url.com",
     category: ["Frontend"]
   }
   ```

### Skills
3. **Update skills** in `src/Components/Skills.jsx`

### Theme Colors
4. **Customize colors** in CSS files under `src/Css/`

### Resume
5. **Replace resume** file in `public/resume.pdf`

## 🌐 Deployment

### GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"homepage": "https://imswatisinha.github.io/Portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

### Vercel
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`
4. Deploy automatically on push

### Netlify
1. Connect GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

## ⚡ Performance

### Optimization Features
- **Code Splitting** - Lazy loaded components
- **Image Optimization** - WebP format support
- **Bundle Analysis** - Size monitoring
- **Caching** - Service worker ready
- **SEO** - Meta tags and structured data

### Performance Metrics
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Swati Sinha**
- **Email**: [swatisinhas15552@gmail.com](mailto:swatisinhas15552@gmail.com)
- **GitHub**: [@imswatisinha](https://github.com/imswatisinha)
- **LinkedIn**: [Swati Sinha](https://www.linkedin.com/in/swatisinha)
- **Portfolio**: [imswatisinha.github.io/Portfolio](https://imswatisinha.github.io/Portfolio)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Create React App** - For the build setup
- **Lottie** - For beautiful animations
- **React Spring** - For smooth transitions
- **Bootstrap** - For responsive design
- **GitHub Pages** - For free hosting

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by [Swati Sinha](https://github.com/imswatisinha)
