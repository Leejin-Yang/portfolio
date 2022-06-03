import { useNavigate } from 'react-router-dom';

import ThemeButton from './ThemeButton';
import ColorButton from './ColorButton';

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
        <div className={styles.colorButtons}>
          <ColorButton color='orange' />
          <ColorButton color='green' />
          <ColorButton color='blue' />
          <ColorButton color='yellow' />
          <ColorButton color='pink' />
        </div>
        <h2>배경</h2>
        <div className={styles.backgroundButtons}>
          <ThemeButton theme='light'>Light</ThemeButton>
          <ThemeButton theme='dim'>Dim</ThemeButton>
          <ThemeButton theme='dark'>Dark</ThemeButton>
        </div>
      </section>
    </main>
  );
};

export default ThemeSettingPage;
