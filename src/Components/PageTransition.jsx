import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Css/PageTransition.css';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
    }
  }, [location, displayLocation]);

  const onTransitionEnd = () => {
    if (isTransitioning) {
      setDisplayLocation(location);
      setIsTransitioning(false);
    }
  };

  return (
    <div
      className={`page-transition ${isTransitioning ? 'transitioning' : ''}`}
      onTransitionEnd={onTransitionEnd}
    >
      <div className="page-content">
        {children}
      </div>
      {isTransitioning && (
        <div className="transition-overlay">
          <div className="transition-loader">
            <div className="loader-ring"></div>
            <div className="loader-text">Loading...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageTransition;
