import React from 'react';
import './header.css';

const Header = () => (
  <div className="header-wrap">
    <div className="header">
      <div className="header-logo">
        <span className="e">E</span>
        xpenser
      </div>
      <div className="header-btn">
        <a className="github" href="https://github.com/sentayhu19/Expenser" target="_blank" rel="noopener noreferrer">
          <i aria-label="GitHub " role="button" i className="devicon-github-original colored" />
          Star
        </a>
      </div>
    </div>
  </div>
);
export default Header;
