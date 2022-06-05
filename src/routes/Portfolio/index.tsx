import { grip, humanscape, info, kb, madup, moadata, qwzd } from 'assets/article';

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
        <article className={styles.about}>
          <h2 className={styles.title}>{info.name}</h2>
          <p className={styles.desc}>{info.intro}</p>
        </article>
        <article className={styles.skill}>
          <section>
            <h2 className={styles.title}>Skills</h2>
            <ul className={styles.desc}>
              {info.skills.map((skill) => (
                <li key={`skills-${skill}`}>{skill}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className={styles.title}>CV</h2>
            <ul className={styles.desc}>
              {info.cv.map((cv) => (
                <li key={`cv-${cv.desc}`} className={styles.cv}>
                  <span>{cv.year}</span>
                  <span>{cv.desc}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
        <div id='project' className={styles.hidden} aria-label='hidden' />
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
