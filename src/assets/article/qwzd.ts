import SnowWhite from 'assets/images/1.jpeg';
import qwzdLogo from 'assets/images/qwzd-logo.png';
import { IProject } from 'types/project.d';

const QWZD: IProject = {
  title: 'QWZD',
  desc: '오래전에 함께 듣던 노래가 발걸음을 다시 멈춰서게 해 이 거리에서 너를 느낄 수 있어 널 이곳에서 꼭 다시 만날 것 같아 너일까 봐 한 번 더 바라보고 너일까 봐 자꾸',
  imgs: [
    {
      src: SnowWhite,
      alt: 'snowWhite',
    },
    {
      src: qwzdLogo,
      alt: 'qwzd-logo',
    },
  ],
};

export default QWZD;
