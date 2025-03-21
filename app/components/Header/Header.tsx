import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image
            aria-hidden
            src='/images/logo.png'
            alt='Loqaat Logo'
            width={81}
            height={29.81}
          />
        </Link>
      </div>
      <div className={styles.nav}>
        <Link href='/'>home</Link>
        <Link href='/'>about</Link>
        <Link href='/'>services</Link>
        <Link href='/'>projects</Link>
        <Link href='/'>process</Link>
        <Link href='/'>articles</Link>
        <Link href='/'>team</Link>
        <Link href='/'>tools</Link>
        <Link href='/'>contact</Link>
      </div>
    </div>
  );
}
