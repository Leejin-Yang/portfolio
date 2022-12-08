import ColorButtons from '@/components/ColorButtons';
import { BACKGROUND_THEME, COLOR_THEME } from '@/constants/theme';
import useTheme from '@/hooks/useTheme';
import { backgroundThemeMode, colorThemeMode } from '@/states/theme';
import styles from '@/styles/pages/themeSettingPage.module.scss';
import Link from 'next/link';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';

const App = () => {
  const [backgroundTheme] = useRecoilState(backgroundThemeMode);
  const [colorTheme] = useRecoilState(colorThemeMode);
  const { handleBackgroundTheme, handleColorTheme } = useTheme();

  useMount(() => {
    document.documentElement.setAttribute('background-theme', backgroundTheme);
    document.documentElement.setAttribute('color-theme', colorTheme);
  });

  return (
    <main className={styles.container}>
      <section className={styles.themeSetting}>
        <div className={styles.navigate}>
          <Link href='/main'>→</Link>
        </div>
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

export default App;
