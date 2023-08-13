import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';
import logoImage from '../assets/Logo.png';

function MainNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='header'>
      <nav>
        <NavLink to="/" className='active' end>
         <img src={logoImage} alt="Logo" />
        </NavLink>
        <button className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
          <div className='menu-line'></div>
        </button>
        <ul className={`list ${menuOpen ? 'open' : ''}`}>
          <li>
            <div className="search-bar">
              <input type="text" placeholder="Enter item or restaurant you are looking for" />
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </li>
          <li>
            <div className="cart-button">
              <button className="cart-icon-button">
                <i className="fas fa-shopping-bag"></i>
              </button>
            </div>
          </li>
          <li>
            <NavLink to="/login" className='active'>
              <button className='sign-in-button'>Sign In</button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
