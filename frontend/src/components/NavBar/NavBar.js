import { NavLink } from 'react-router-dom';
import './NavBar.css';
import MainContainer from '../MainContainer/MainContainer';

function Navbar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <NavLinks />
    </nav>
  );
}

function Logo() {
  return (
    <>
      <div className="logo">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <img src="/images/logo.png" alt="Logo" />
        </NavLink>
      </div>
    </>
  );
}

function NavLinks() {
  return (
    <ul className="nav-links">
      <li className="navBtn">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
      </li>
      <li className="navBtn">
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Events
        </NavLink>
      </li>
      <li className="navBtn">
        <NavLink
          to="/termsofuse"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Terms of Use
        </NavLink>
      </li>
      <li className="navBtn">
        <NavLink
          to="support"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Support
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
