import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import altyn from '../../Accests/altyn.png';
import './navbar.css';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); // Закрываем меню при открытии поиска
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); // Закрываем поиск при открытии меню
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return (
    <header className='navbar'>
      <div className="container">
        <div className="navbar_content">
          <NavLink to="/" className="logo">
            <img src={altyn} width={104} height={97} alt="logo" />
          </NavLink>

          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className={({ isActive }) => `nav_item ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              НОВЫЕ
            </NavLink>
            <NavLink to="/fruits" className={({ isActive }) => `nav_item ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
              ФРУКТЫ
            </NavLink>
            <NavLink to="/vegetables" className={({ isActive }) => `nav_item ${isActive ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
            ОВОЩИ
            </NavLink>
          </nav>

          <div className="nav_icons">
            <div className={`search_container ${isSearchOpen ? 'open' : ''}`}>
              <button 
                className="search_btn" 
                aria-label="Search"
                onClick={toggleSearch}
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                </svg>
              </button>
              
              <form className="search_form" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="search_input"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="search_submit">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
                  </svg>
                </button>
              </form>
            </div>

            <NavLink to="/basket" className="basket_btn" aria-label="Basket">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/>
              </svg>
              <span className="basket_counter">0</span>
            </NavLink>

            <button 
              className="mobile_menu_btn" 
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;