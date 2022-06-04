import { INFO } from 'assets/article';
import SnowWhite from 'assets/images/1.jpeg';

import Aside from './Aside';
import Header from './Header';
import Footer from './Footer';

import styles from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Aside />
      <main className={styles.main}>
        <div id='about' aria-label='hidden' />
        <article className={styles.info}>
          <h2>{INFO.NAME}</h2>
          <p className={styles.paragraph}>{INFO.INTRO}</p>
        </article>
        <div id='project' aria-label='hidden' />
        <article className={styles.article}>
          <section className={styles.section}>
            <h2 className={styles.articleTitle}>백설이</h2>
            <p className={styles.paragraph}>{INFO.INTRO}</p>
          </section>
          <div className={styles.articleImages}>
            <img src={SnowWhite} alt='1' />
            <img src={SnowWhite} alt='1' />
            <img src={SnowWhite} alt='1' />
          </div>
        </article>
        <article className={styles.article}>
          <p className={styles.paragraph}>반갑습니다</p>
        </article>
        <article className={styles.article}>
          <div className={styles.yellow} />
          <p className={styles.paragraph}>죄송합니다</p>
        </article>
        <article className={styles.article}>
          <div className={styles.yellow} />
          <p className={styles.paragraph}>궁금하네요</p>
        </article>
        <article className={styles.article}>
          <div className={styles.yellow} />
          <p className={styles.paragraph}>궁금하네요</p>
        </article>
        <article className={styles.article}>
          <div className={styles.yellow} />
          <p className={styles.paragraph}>궁금하네요</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
