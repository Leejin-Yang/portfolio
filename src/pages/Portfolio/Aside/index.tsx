import { info } from 'assets/article';
import ColorButtons from 'components/ColorButtons';
import { BACKGROUND_THEME, COLOR_THEME } from 'constants/theme';
import useTheme from 'hooks/useTheme';

import styles from './aside.module.scss';

const Aside = () => {
  const { handleBackgroundTheme, handleColorTheme } = useTheme();

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
        <ColorButtons colors={COLOR_THEME} onClick={handleColorTheme} border={false} />
        <ColorButtons colors={BACKGROUND_THEME} onClick={handleBackgroundTheme} border={false} />
      </div>
    </aside>
  );
};

export default Aside;
