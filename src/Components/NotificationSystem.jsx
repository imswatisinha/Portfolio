import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FaCheck, FaTimes, FaExclamationTriangle, FaInfo } from 'react-icons/fa';
import { ThemeContext } from './ThemeContext';
import '../Css/NotificationSystem.css';

const NotificationSystem = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, type = 'info', duration = 5000) => {
    const id = Date.now() + Math.random();
    const notification = { id, message, type, duration };
    
    setNotifications(prev => [...prev, notification]);
    
    if (duration > 0) {
      setTimeout(() => {
        setNotifications(prev => prev.filter(notif => notif.id !== id));
      }, duration);
    }
  }, []);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <FaCheck />;
      case 'error':
        return <FaTimes />;
      case 'warning':
        return <FaExclamationTriangle />;
      default:
        return <FaInfo />;
    }
  };

  // Expose addNotification globally
  useEffect(() => {
    window.showNotification = addNotification;
    return () => {
      delete window.showNotification;
    };
  }, [addNotification]);

  return (
    <div className={`notification-container ${isDarkMode ? 'dark' : 'light'}`}>
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}
          style={{ '--index': index }}
        >
          <div className="notification-icon">
            {getIcon(notification.type)}
          </div>
          <div className="notification-message">
            {notification.message}
          </div>
          <button
            className="notification-close"
            onClick={() => removeNotification(notification.id)}
          >
            <FaTimes />
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationSystem;
