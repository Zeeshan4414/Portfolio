import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Theme.css'; 

const Theme = ({ theme, toggleTheme }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        className="toggle-checkbox"
        id="toggle"
        onChange={toggleTheme}
        checked={theme === 'dark'}
      />
      <label className="toggle-label" htmlFor="toggle">
        <FaSun className={`icon sun ${theme === 'light' ? 'active' : ''}`}  />
        <FaMoon className={`icon moon ${theme === 'dark' ? 'active' : ''}`} />
      </label>
    </div>
  );
};

export default Theme;
