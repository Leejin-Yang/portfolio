import { GithubIcon, InstagramIcon, MailIcon } from 'assets/svgs';

import ColorButtons from 'components/ColorButtons';
import ThemeButtons from 'components/ThemeButtons';

import styles from './portfolio.module.scss';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h1>양이진 Yang Leejin</h1>
      <p>
        오래전에 함께 듣던 노래가 발걸음을 다시 멈춰서게 해 이 거리에서 너를 느낄 수 있어 널 이곳에서 꼭 다시 만날 것
        같아
        <br /> 너일까 봐 한 번 더 바라보고 너일까 봐 자꾸 돌아보게 돼 어디선가 같은 노래를 듣고 날 생각하며 너 역시
        멈춰있을까
        <br /> 오래전에 함께 듣던 노래가 거리에서 내게 우연히 들려온 것처럼 살아가다 한 번쯤 우연히 만날 것 같아
        사랑했던 그 모습 그대로
        <br />
        오래전에 함께 듣던 노래가 발걸음을 다시 멈춰서게 해 이 거리에서 너를 느낄 수 있어 널 이곳에서 꼭 다시 만날 것
        같아
        <br /> 너일까 봐 한 번 더 바라보고 너일까 봐 자꾸 돌아보게 돼 어디선가 같은 노래를 듣고 날 생각하며 너 역시
        멈춰있을까
        <br /> 오래전에 함께 듣던 노래가 거리에서 내게 우연히 들려온 것처럼 살아가다 한 번쯤 우연히 만날 것 같아
        사랑했던 그 모습
      </p>
      <p className={styles.contact}>
        <a href='https://github.com/Leejin-Yang' target='_blank' rel='noopener noreferrer'>
          <GithubIcon />
        </a>
        <a href='mailto:ejin1996@gmail.com'>
          <MailIcon />
        </a>
        <a href='https://www.instagram.com/y_leejin'>
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
