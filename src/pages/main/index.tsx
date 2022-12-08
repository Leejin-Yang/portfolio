import { dashboard, movieApp, qwzd, recommend } from '@/assets/article';
import About from '@/components/About';
import Article from '@/components/Article';
import Aside from '@/components/Aside';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import styles from '@/styles/pages/portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Aside />
      <main className={styles.main}>
        <div id='about' className={styles.hidden} aria-hidden />
        <About />
        <div id='project' className={styles.hidden} aria-hidden />
        <Article project={qwzd} />
        <Article project={movieApp} />
        <Article project={recommend} />
        <Article project={dashboard} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
