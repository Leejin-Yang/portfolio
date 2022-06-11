import { grip, humanscape, kb, madup, moadata, qwzd } from 'assets/article';

import Header from './Header';
import Aside from './Aside';
import Article from './Article';
import Footer from './Footer';

import styles from './portfolio.module.scss';
import About from './About';

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
        <Article project={grip} />
        <Article project={humanscape} />
        <Article project={madup} />
        <Article project={kb} />
        <Article project={moadata} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
