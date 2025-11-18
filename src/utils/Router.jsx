// src/utils/Router.jsx
import React, { useState, useEffect } from 'react';

export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.hash.slice(1) || '/';
  });
  
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      setCurrentPath(hash);
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  const matchedRoute = React.Children.toArray(children).find(
    child => child.props.path === currentPath
  );
  
  return matchedRoute || null;
};

export const Route = ({ children }) => children;

export const Link = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.hash = to;
    if (onClick) onClick(e);
  };

  return (
    <a 
      href={`#${to}`} 
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};