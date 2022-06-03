import { INFO } from 'assets/article';
import { GithubIcon, InstagramIcon, MailIcon } from 'assets/svgs';

import ColorButtons from 'components/ColorButtons';
import ThemeButtons from 'components/ThemeButtons';

import styles from './aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h1>{INFO.NAME}</h1>
      <p className={styles.intro}>{INFO.INTRO}</p>
      <p className={styles.contact}>
        <a href='https://github.com/Leejin-Yang' target='_blank' rel='noopener noreferrer'>
          <GithubIcon />
        </a>
        <a href='mailto:ejin1996@gmail.com'>
          <MailIcon />
        </a>
        <a href='https://www.instagram.com/y_horong' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon />
        </a>
      </p>
      <div className={styles.buttonsAside}>
        <ColorButtons border={false} />
        <ThemeButtons border={false} />
      </div>
    </aside>
  );
};

export default Aside;
