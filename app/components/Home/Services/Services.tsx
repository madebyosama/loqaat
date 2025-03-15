import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  return (
    <div className={styles.services}>
      <div className={styles.title}>What we do</div>
      <div className={styles.details}>
        <div className={styles.subdetails}>
          <Link href='/services/#' className={styles.service}>
            Strategy
          </Link>
          <Link href='/services/#' className={styles.service}>
            Brand Positioning
          </Link>
          <Link href='/services/#' className={styles.service}>
            Brand Awareness
          </Link>
          <Link href='/services/#' className={styles.service}>
            Advertising
          </Link>
          <Link href='/services/#' className={styles.service}>
            Naming
          </Link>
          <Link href='/services/#' className={styles.service}>
            Copywriting
          </Link>
          <Link href='/services/#' className={styles.service}>
            Art Direction
          </Link>
        </div>
        <div className={styles.subdetails}>
          <Link href='/services/#' className={styles.service}>
            Web Design
          </Link>
          <Link href='/services/#' className={styles.service}>
            Web Development
          </Link>
          <Link href='/services/#' className={styles.service}>
            Digital Marketing
          </Link>
          <Link href='/services/#' className={styles.service}>
            Social Media Management
          </Link>
          <Link href='/services/#' className={styles.service}>
            Search Engine Optimization
          </Link>
          <Link href='/services/#' className={styles.service}>
            Website Speed Optimization
          </Link>
        </div>
      </div>
    </div>
  );
}
