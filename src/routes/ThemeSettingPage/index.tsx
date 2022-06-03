import { useNavigate } from 'react-router-dom';

import ColorButtons from 'components/ColorButtons';
import ThemeButtons from 'components/ThemeButtons';

import styles from './themeSettingPage.module.scss';

const ThemeSettingPage = () => {
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
        <ColorButtons border={false} />
        <h2>배경</h2>
        <ThemeButtons border />
      </section>
    </main>
  );
};

export default ThemeSettingPage;
