import styles from './Why.module.css';

export default function Why() {
  return (
    <div className={styles.why}>
      <div className={styles.title}>Why work with us?</div>
      <div className={styles.description}>
        At Loqaat, we’re dedicated to helping you reach more people, boost your
        sales, and elevate your brand awareness. Our approach is built around
        three core principles:
      </div>
      <div className={styles.reasons}>
        <div className={styles.reason}>
          <div className={styles.number}>1</div>
          <div className={styles.text}>
            <span className={styles.subtitle}>
              Iterative <span className={styles.dash}>—</span>{' '}
            </span>
            We value momentum. By breaking projects into focused 30-day sprints,
            we ensure quick iterations and tangible progress. Whether you&#39;re
            testing a new idea or developing a Minimum Viable Product (MVP), our
            process keeps things moving efficiently.
          </div>
        </div>
        <div className={styles.reason}>
          <div className={styles.number}>2</div>
          <div className={styles.text}>
            <span className={styles.subtitle}>
              Personable <span className={styles.dash}>—</span>{' '}
            </span>
            We believe in keeping communication clear, friendly, and
            transparent. Working with our small, dedicated team means you&#39;ll
            have direct access to the best minds handling your project—no
            middlemen, just experts.
          </div>
        </div>
        <div className={styles.reason}>
          <div className={styles.number}>3</div>
          <div className={styles.text}>
            <span className={styles.subtitle}>
              innovative <span className={styles.dash}>—</span>{' '}
            </span>
            Our team is always learning and refining their skills to stay ahead
            of the curve. We embrace the latest trends and techniques to deliver
            cutting-edge solutions that get your brand marketed right.
          </div>
        </div>
      </div>
    </div>
  );
}
