import Aside from './Aside';

import styles from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>양이진 Yang Leejin</p>
        <ul className={styles.nav}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#project'>Project</a>
          </li>
          <li>Theme</li>
        </ul>
      </header>
      <div className={styles.hidden} aria-label='hidden' />
      <Aside />
      <main className={styles.main}>
        <div id='about' aria-label='hidden' />
        <section className={styles.info}>
          <p>양이진 Yang Leejin</p>
        </section>
        <div id='project' aria-label='hidden' />
        <section className={styles.mainSection}>
          <p className={styles.text}>안녕하세요</p>
        </section>
        <section className={styles.mainSection}>
          <p className={styles.text}>반갑습니다</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.text}>죄송합니다</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.text}>궁금하네요</p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
