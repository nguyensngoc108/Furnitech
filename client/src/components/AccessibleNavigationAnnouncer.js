// src/components/AccessibleNavigationAnnouncer.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AccessibleNavigationAnnouncer = () => {
  const [message, setMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const pageTitle = document.title;
    setMessage(`Navigated to ${pageTitle}`);
  }, [location]);

  return (
    <div
      aria-live="assertive"
      aria-atomic="true"
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: '-1px',
        border: '0',
        padding: '0',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        clipPath: 'inset(50%)',
      }}
    >
      {message}
    </div>
  );
};

export default AccessibleNavigationAnnouncer;