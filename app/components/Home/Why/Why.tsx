import styles from './Why.module.css';

export default function Why() {
  return (
    <div className={styles.why}>
      <div className={styles.title}>Why work with us?</div>
      <div className={styles.description}>
        Before we started loqaat, we were freelance designers and developers. We
        teamed up to combine our talents and bring high quality services to
        businesses.
      </div>
      <div className={styles.reasons}>
        <div className={styles.reason}>
          <div className={styles.number}>1</div>
          <div className={styles.text}>
            <span className={styles.subtitle}>
              Iterative <span className={styles.dash}>—</span>{' '}
            </span>
            We're not huge fans of long projects so we iterate quickly. We work
            differently to other agencies by splitting work up into 30-day
            sprints. This keeps the momentum in a project, which is crucial if
            you're looking to test an idea and develop and MVP quickly.
          </div>
        </div>
        <div className={styles.reason}>
          <div className={styles.number}>2</div>
          <div className={styles.text}>
            <span className={styles.subtitle}>
              Personable <span className={styles.dash}>—</span>{' '}
            </span>
            We like to keep our communication simple and transparent. Having a
            small and friendly team means that you'll be working directly with
            our finest minds who will be undertaking your project.
          </div>
        </div>
        <div className={styles.reason}>
          <div className={styles.number}>3</div>
          <div className={styles.text}>
            <span className={styles.subtitle}>
              innovative <span className={styles.dash}>—</span>{' '}
            </span>
            Each of our team members is constantly learning and refining their
            craft. We keep up to date with the latest trends and techniques in
            our industry so that we can provide the best possible service for
            our clients. We innovate constantly.
          </div>
        </div>
      </div>
    </div>
  );
}
