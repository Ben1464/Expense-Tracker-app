import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <p>&copy; {getCurrentYear()} <b>RavenDev</b> </p>
      <p>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;