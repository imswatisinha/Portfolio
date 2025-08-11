import React, { useState, useEffect, useContext } from 'react';
import { FaArrowUp, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import '../Css/FloatingActions.css';

const FloatingActions = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const contactActions = [
    {
      icon: FaEnvelope,
      label: 'Email',
      action: () => window.open('mailto:swati@example.com'),
      color: '#ea4335'
    },
    {
      icon: FaPhone,
      label: 'Call',
      action: () => window.open('tel:+1234567890'),
      color: '#34a853'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/1234567890'),
      color: '#25d366'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className={`floating-actions ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Quick Contact Actions */}
      <div className={`contact-actions ${isExpanded ? 'expanded' : ''}`}>
        {contactActions.map((action, index) => (
          <button
            key={index}
            className="contact-action-btn"
            onClick={action.action}
            style={{ '--action-color': action.color }}
            title={action.label}
          >
            <action.icon />
          </button>
        ))}
      </div>

      {/* Main Action Button */}
      <div className="main-actions">
        <button
          className="action-btn contact-toggle"
          onClick={toggleExpanded}
          title="Quick Contact"
        >
          <FaEnvelope />
        </button>
        
        <button
          className="action-btn scroll-to-top"
          onClick={scrollToTop}
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
