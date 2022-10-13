import ColorButtons from 'components/ColorButtons';
import { BACKGROUND_THEME, COLOR_THEME } from 'constants/theme';
import useTheme from 'hooks/useTheme';
import { useNavigate } from 'react-router-dom';

import styles from './themeSettingPage.module.scss';

const ThemeSettingPage = () => {
  const { handleBackgroundTheme, handleColorTheme } = useTheme();
  const navigate = useNavigate();

  const onClick = () => {
    navigate('main');
  };

  return (
    <main className={styles.container}>
      <section className={styles.themeSetting}>
        <button type='button' className={styles.navigate} onClick={onClick}>
          →
        </button>
        <div className={styles.example}>
          <div className={styles.icon} />
          <p>
            프론트엔드 개발자 양이진입니다. <br />
            당신의 테마를 선택해보세요.
          </p>
        </div>
        <h2>색상</h2>
        <ColorButtons colors={COLOR_THEME} onClick={handleColorTheme} border={false} />
        <h2>배경</h2>
        <ColorButtons colors={BACKGROUND_THEME} onClick={handleBackgroundTheme} border />
      </section>
    </main>
  );
};

export default ThemeSettingPage;
