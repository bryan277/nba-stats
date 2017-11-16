import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/style.css'

const Header = () => {
  return(
    <header>
      <Link to="/">
        <div className="logo-container">
          <img src={'/images/nba-logo.png'} alt="nba logo"/>
        </div>
      </Link>
    </header>
  )
}

export default Header;