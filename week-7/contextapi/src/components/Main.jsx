import React, { useContext } from 'react';

import { ThemeContext } from "../Context";

const Main = () => {
  const { theme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
  };

  return (
    <main style={styles}>
      <p>This is the main content area</p>
      
    </main>
  );
};

export default Main;
