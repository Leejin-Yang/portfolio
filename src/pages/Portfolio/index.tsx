import { dashboard, movieApp, qwzd, recommend } from 'assets/article';

import About from './About';
import Article from './Article';
import Aside from './Aside';
import Footer from './Footer';
import Header from './Header';
import styles from './portfolio.module.scss';

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
