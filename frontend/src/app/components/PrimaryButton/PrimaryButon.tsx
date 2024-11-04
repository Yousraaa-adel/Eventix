import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  children: ReactNode;
  href: string;
  type?: string;
}

function PrimaryButton({ children, href, type }: PrimaryButtonProps) {
  return (
    <Link href={href} type={type} className={styles.primaryButton}>
      {children}
    </Link>
  );
}

export default PrimaryButton;
