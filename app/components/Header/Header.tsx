import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href='/'>
          <Image
            aria-hidden
            src='/images/logo.png'
            alt='Globe icon'
            width={81}
            height={29.81}
          />
        </a>
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
