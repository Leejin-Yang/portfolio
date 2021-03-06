import mainImage from 'assets/images/madup/main.jpg';
import datepickerImage from 'assets/images/madup/datepicker.jpg';
import tooltipImage from 'assets/images/madup/tooltip.jpg';

import mainVideo from 'assets/videos/madup/main.mp4';
import datepickerVideo from 'assets/videos/madup/datepicker.mp4';
import tooltipVideo from 'assets/videos/madup/tooltip.mp4';

import { IProject } from 'types/project.d';

const madup: IProject = {
  title: 'Dashboard',
  subTitle: '데이터 대시보드와 광고 관리 페이지',
  desc: '팀 프로젝트로 진행한 대시보드입니다. 주어진 데이터를 이용해 날짜 범위에 따른 데이터를 시각화했습니다. 전체 레이아웃, Date Picker, 데이터 계산 로직을 맡아 프로젝트를 진행했습니다. Victory, react-datepicker 등 다양한 라이브러리의 사용 방법을 학습했습니다.',
  duration: '2022.5.23 ~ 2022.5.25',
  stack: 'React, TypeScript, Sass, Recoil',
  links: [
    { src: 'https://madup-7a.netlify.app/', key: 'dashboard.deploy' },
    { src: 'https://github.com/Leejin-Yang/Madup-7A', key: 'dashboard.github' },
  ],
  imgs: [
    {
      src: mainImage,
      alt: 'dashboard-main',
      videoSrc: mainVideo,
    },
    {
      src: datepickerImage,
      alt: 'dashboard-datepicker',
      videoSrc: datepickerVideo,
    },
    {
      src: tooltipImage,
      alt: 'dashboard-tooltip',
      videoSrc: tooltipVideo,
    },
  ],
};

export default madup;
