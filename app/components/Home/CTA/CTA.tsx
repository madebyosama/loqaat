import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <div className={styles.cta}>
      <div className={styles.title}>Have a project?</div>

      <Link href='/contact' className={styles.button}>
        get in touch
      </Link>
    </div>
  );
}
