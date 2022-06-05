import snowWhite from 'assets/images/snow-white.jpeg';

import gripVideo1 from 'assets/videos/grip/video-1.mp4';
import gripVideo2 from 'assets/videos/grip/video-2.mp4';

import { IProject } from 'types/project.d';

const grip: IProject = {
  title: 'Movie App',
  subTitle: '영화 검색, 즐겨찾기 사이트',
  desc: '영화 검색과 즐겨찾기를 등록할 수 있는 서비스입니다. 영화 데이터 요청은 Infinite Scroll을 이용해 구현했습니다. 즐겨찾기를 등록한 영화를 로컬 스토리지에 저장해 유지하게 했습니다. 즐겨찾기에 등록된 영화 목록 순서를 Drag & Drop으로 변경할 수 있습니다.',
  duration: '2022.5.10 ~ 2022.5.15',
  stack: 'React, TypeScript, Sass, Recoil',
  links: [
    { src: 'https://leejin-yang.github.io/wanted_pre_onboarding_grip', key: 'movie-app.deploy' },
    { src: 'https://github.com/Leejin-Yang/wanted_pre_onboarding_grip', key: 'movie-app.github' },
  ],
  imgs: [
    {
      src: snowWhite,
      alt: 'snow-white',
      videoSrc: gripVideo1,
    },
    {
      src: snowWhite,
      alt: 'snow-white',
      videoSrc: gripVideo2,
    },
  ],
};

export default grip;
