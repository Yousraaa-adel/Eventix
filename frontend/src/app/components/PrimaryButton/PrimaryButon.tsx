import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  children: ReactNode;
  href: string;
}

function PrimaryButton({ children, href }: PrimaryButtonProps) {
  return (
    <Link href={href} className={styles.primaryButton}>
      {children}
    </Link>
  );
}

export default PrimaryButton;
