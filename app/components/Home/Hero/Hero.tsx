import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.subtitle}>one company that does it all</div>
      <div className={styles.title}>
        Marketing
        <br />
        agency
      </div>
      <Link href='/contact' className={styles.button}>
        get in touch
      </Link>
    </div>
  );
}
