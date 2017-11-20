import React from 'react';
import { Link } from 'react-router-dom';

// CSS only needs to be imported once through out all your component
// If you put it in your App.js file it would apply to call components
// Or if you leave it here, then it doesn't need to be imported on your other components
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