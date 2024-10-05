import React, { useContext } from 'react';
import { ThemeContext } from "../Context"

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme === 'light' ? '#ccc' : '#555',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '10px',
  };

  return <footer style={styles}>This is the footer</footer>;
};

export default Footer;
