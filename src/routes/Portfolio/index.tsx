import ColorButtons from 'components/ColorButtons';
import ThemeButtons from 'components/ThemeButtons';

import styles from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>양이진 Yang Leejin</p>
        <ul className={styles.nav}>
          <li>About</li>
          <li>Project</li>
          <li>Theme</li>
        </ul>
      </header>
      <div className={styles.hidden} aria-label='hidden' />
      <aside className={styles.aside}>
        <p>양이진 Yang Leejin</p>
        <div className={styles.buttonsAside}>
          <ColorButtons border />
          <ThemeButtons border={false} />
        </div>
      </aside>
      <main className={styles.main}>
        <section className={styles.info}>
          <p>양이진 Yang Leejin</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.text}>안녕하세요</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.text}>안녕하세요</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.text}>안녕하세요</p>
        </section>
        <section className={styles.mainSection}>
          <div className={styles.yellow} />
          <p className={styles.text}>안녕하세요</p>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
