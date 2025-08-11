
import React, { createContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Check system preference
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setIsTransitioning(true);
    
    // Add transition class to body
    document.body.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    
    setTimeout(() => {
      setIsDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
        return newMode;
      });
      
      // Remove transition after theme change
      setTimeout(() => {
        setIsTransitioning(false);
        document.body.style.transition = '';
      }, 300);
    }, 50);
  }, []);

  // Apply theme to document
  useEffect(() => {
    const applyTheme = () => {
      const body = document.body;
      const html = document.documentElement;
      
      // Remove existing theme classes
      body.classList.remove("dark", "light");
      html.classList.remove("dark", "light");
      
      // Add new theme class
      const themeClass = isDarkMode ? "dark" : "light";
      body.classList.add(themeClass);
      html.classList.add(themeClass);
      
      // Update meta theme-color for mobile browsers
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', isDarkMode ? '#0a0e1a' : '#f8fafc');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'theme-color';
        meta.content = isDarkMode ? '#0a0e1a' : '#f8fafc';
        document.head.appendChild(meta);
      }
      
      // Update CSS custom properties dynamically
      const root = document.documentElement;
      if (isDarkMode) {
        root.style.setProperty('--current-bg-color', '#0a0e1a');
        root.style.setProperty('--current-text-color', '#f7fafc');
        root.style.setProperty('--current-surface-color', 'rgba(26, 32, 44, 0.8)');
      } else {
        root.style.setProperty('--current-bg-color', '#f8fafc');
        root.style.setProperty('--current-text-color', '#1a202c');
        root.style.setProperty('--current-surface-color', 'rgba(255, 255, 255, 0.8)');
      }
    };

    applyTheme();
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      // Only apply system theme if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setIsDarkMode(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  // Enhanced theme utilities
  const themeUtils = {
    getThemeClass: (baseClass) => `${baseClass} ${isDarkMode ? 'dark' : 'light'}`,
    getCurrentTheme: () => isDarkMode ? 'dark' : 'light',
    isSystemDark: () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
    resetToSystem: () => {
      localStorage.removeItem('theme');
      const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemDark);
    }
  };

  const contextValue = {
    isDarkMode,
    toggleDarkMode,
    isTransitioning,
    themeUtils
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
