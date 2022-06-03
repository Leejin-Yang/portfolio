import { INFO } from 'assets/article';

import Aside from './Aside';
import Header from './Header';

import styles from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hidden} aria-label='hidden' />
      <Aside />
      <main className={styles.main}>
        <div id='about' aria-label='hidden' />
        <section className={styles.info}>
          <h1>{INFO.NAME}</h1>
          <p className={styles.paragraph}>{INFO.INTRO}</p>
        </section>
        <div id='project' aria-label='hidden' />
        <section className={styles.mainSection}>
          <p className={styles.paragraph}>안녕하세요</p>
        </section>
        <section className={styles.mainSection}>
          <p className={styles.paragraph}>반갑습니다</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.paragraph}>죄송합니다</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.paragraph}>궁금하네요</p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
