// I made this component to update the website title based on what page was being viewed
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const routeToTitle = {
  '/': 'Home',
  '/about': 'About',
  '/blog': 'Blog',
  '/contact': 'Contact',
  '/portfolio': 'Portfolio',
  '/skating': 'Skating',
};

const TitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const title = routeToTitle[location.pathname] || 'Michel Adelien';
    document.title = title;
  }, [location]);
};

export default TitleUpdater;
