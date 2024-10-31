'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      <li className={styles.adminNavBtn}>
        <Link
          href="/admin/eventForm"
          className={pathname === '/events' ? 'active' : ''}
        >
          Event Form
        </Link>
      </li>
      <li className={styles.adminNavBtn}>
        <Link
          href="/admin/eventBookings"
          className={pathname === '/termsofuse' ? 'active' : ''}
        >
          Booking Management
        </Link>
      </li>
      <li className={styles.adminNavBtn}>
        <Link
          href="/admin/logout"
          className={pathname === '/support' ? 'active' : ''}
        >
          <img src="/images/logoutIcon.jpg" />
        </Link>
      </li>
    </ul>
  );
}

export default AdminNavbar;
