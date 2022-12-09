import ColorButtons from '@/components/ColorButtons';
import { BACKGROUND_THEME, COLOR_THEME } from '@/constants/theme';
import useTheme from '@/hooks/useTheme';
import type { Info } from '@/types/info';

import styles from './aside.module.scss';

interface Props {
  info: Info;
}

const Aside = ({ info }: Props) => {
  const { handleBackgroundTheme, handleColorTheme } = useTheme();

  return (
    <aside className={styles.aside}>
      <h1>{info.name}</h1>
      <p className={styles.intro}>{info.intro}</p>
      <ul className={styles.contact}>
        <li>
          <a href={`mailto:${info.mail}`}>{info.mail} →</a>
        </li>
        <li>
          <a href={info.github} target='_blank' rel='noopener noreferrer'>
            github@Leejin-Yang →
          </a>
        </li>
        <li>
          <a href={info.instagram} target='_blank' rel='noopener noreferrer'>
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
