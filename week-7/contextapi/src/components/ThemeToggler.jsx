import React, { useContext } from 'react';
import { ThemeContext } from "../Context"

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeToggler;
