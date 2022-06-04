import { INFO, QWZD } from 'assets/article';

import Header from './Header';
import Aside from './Aside';
import Article from './Article';
import Footer from './Footer';

import styles from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Aside />
      <main className={styles.main}>
        <div id='about' className={styles.hidden} aria-label='hidden' />
        <article className={styles.info}>
          <h2 className={styles.title}>{INFO.NAME}</h2>
          <p className={styles.desc}>{INFO.INTRO}</p>
        </article>
        <div id='project' className={styles.hidden} aria-label='hidden' />
        <Article project={QWZD} />
        <Article project={QWZD} />
        <Article project={QWZD} />
        <Article project={QWZD} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
