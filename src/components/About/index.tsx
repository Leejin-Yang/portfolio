import type { Info } from '@/types/info';

import styles from './about.module.scss';

interface Props {
  info: Info;
}

const About = ({ info }: Props) => {
  return (
    <>
      <article className={styles.about}>
        <h2 className={styles.title}>{info.name}</h2>
        <p className={styles.desc}>{info.intro}</p>
      </article>
      <article className={styles.stacks}>
        <h2 className={styles.title}>Stacks</h2>
        <div className={styles.skills}>
          <section>
            <h3 className={styles.subTitle}>Frontend</h3>
            <ul className={styles.desc}>
              {info.frontend.map((skill, index) => {
                const key = `frontend-skills-${skill}-${index}`;
                return <li key={key}>{skill}</li>;
              })}
            </ul>
          </section>
          <section>
            <h3 className={styles.subTitle}>Library</h3>
            <ul className={styles.desc}>
              {info.library.map((skill) => (
                <li key={`collaboration-skills-${skill}`}>{skill}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </>
  );
};

export default About;
