import Image from 'next/image';
import styles from './Header.module.css';

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
        <a href='/'>home</a>
        <a href='/'>about</a>
        <a href='/'>services</a>
        <a href='/'>projects</a>
        <a href='/'>process</a>
        <a href='/'>articles</a>
        <a href='/'>team</a>
        <a href='/'>tools</a>
        <a href='/'>contact</a>
      </div>
    </div>
  );
}
