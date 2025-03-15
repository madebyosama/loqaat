import styles from './page.module.css';
import Header from './components/Header/Header';
import Hero from './components/Home/Hero/Hero';
import Services from './components/Home/Services/Services';
import Why from './components/Home/Why/Why';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Services />
      <Why />
    </div>
  );
}
