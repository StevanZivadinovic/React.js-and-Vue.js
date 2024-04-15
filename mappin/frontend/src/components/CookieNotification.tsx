import React from 'react';

const CookieNotification = ({acceptedCookies, setAcceptedCookies}) => {
  

  const handleAcceptCookies = () => {
    setAcceptedCookies(true);
  };

  const handleManagePreferences = () => {
    console.log('Manage preferences clicked');
  };

  if (!acceptedCookies) {
    return (
      <div className="cookie-notification">
        <p>
          We use cookies, including JWT tokens, to enhance your experience and ensure the security of our website.
          These cookies are essential for features like user authentication, allowing you to access personalized content and services.
        </p>
        <p>
          By continuing to use our website, you consent to the use of these cookies for authentication purposes.
          You can manage your cookie preferences at any time through your browser settings.
        </p>
        <div className="cookie-notification-buttons">
          <button onClick={handleAcceptCookies}>Accept Cookies</button>
          <button onClick={handleManagePreferences}>Manage Preferences</button>
        </div>
      </div>
    );
  }

  return null; 
};

export default CookieNotification;
