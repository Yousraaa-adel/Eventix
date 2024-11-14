'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import axios from 'axios';
import styles from './adminNavbar.module.css';

function AdminNavbar() {
  return (
    <nav className={styles.adminNavbar}>
      <Logo />
      <NavLinks />
    </nav>
  );
}

function Logo() {
  return (
    <>
      <div className={styles.logo}>
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" />
        </Link>
      </div>
    </>
  );
}

function NavLinks() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      console.log(
        'Waiting for the loggings from backend right after this message'
      );
      await logout(); // Call the logout from AuthContext
      console.log('Logged out from frontend. Redirecting to login...');
      router.push('/admin/login'); // Redirect to login page after logging out
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <ul className={styles.navLinks}>
      <li className={styles.adminNavBtn}>
        <Link
          href="/admin/dashboard"
          className={pathname === '/' ? 'active' : ''}
        >
          Dashboard
        </Link>
      </li>
      <li className={styles.adminNavBtn}>
        <Link
          href="/admin/eventMang"
          className={pathname === '/events' ? 'active' : ''}
        >
          Event Management
        </Link>
      </li>
      {/* <li className={styles.adminNavBtn}>
        <Link
          href="/admin/eventForm"
          className={pathname === '/events' ? 'active' : ''}
        >
          Event Form
        </Link>
      </li> */}
      <li className={styles.adminNavBtn}>
        <Link
          href="/admin/bookingMang"
          className={pathname === '/termsofuse' ? 'active' : ''}
        >
          Booking Management
        </Link>
      </li>
      <li className={styles.adminNavBtn}>
        <button onClick={handleLogout} className={styles.logoutBtn}>
          <img src="/images/logoutIcon.jpg" alt="Logout" />
        </button>
      </li>
    </ul>
  );
}

export default AdminNavbar;
