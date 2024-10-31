'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
    </>
  );
}

function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="nav-links">
      <li className="navBtn">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>
          Home
        </Link>
      </li>
      <li className="navBtn">
        <Link href="/events" className={pathname === '/events' ? 'active' : ''}>
          Events
        </Link>
      </li>
      <li className="navBtn">
        <Link
          href="/termsofuse"
          className={pathname === '/termsofuse' ? 'active' : ''}
        >
          Terms of Use
        </Link>
      </li>
      <li className="navBtn">
        <Link
          href="/support"
          className={pathname === '/support' ? 'active' : ''}
        >
          Support
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
