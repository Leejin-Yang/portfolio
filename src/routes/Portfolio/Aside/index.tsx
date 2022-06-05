import { info } from 'assets/article';

import ColorButtons from 'components/ColorButtons';
import ThemeButtons from 'components/ThemeButtons';

import styles from './aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h1>{info.name}</h1>
      <p className={styles.intro}>{info.intro}</p>
      <ul className={styles.contact}>
        <li>
          <a href='mailto:ejin1996@gmail.com'>ejin1996@gmail.com →</a>
        </li>
        <li>
          <a href='https://github.com/Leejin-Yang' target='_blank' rel='noopener noreferrer'>
            github@Leejin-Yang →
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/y_horong' target='_blank' rel='noopener noreferrer'>
            instagram@y_horong →
          </a>
        </li>
      </ul>
      <p className={styles.copyright}>{info.copyright}</p>
      <div className={styles.buttonsAside}>
        <ColorButtons border={false} />
        <ThemeButtons border={false} />
      </div>
    </aside>
  );
};

export default Aside;
