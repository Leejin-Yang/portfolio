import mainImage from 'assets/images/humanscape/main.jpg';

import mainVideo from 'assets/videos/humanscape/main.mp4';

import { IProject } from 'types/project.d';

const humanscape: IProject = {
  title: 'Recommand',
  subTitle: '검색어 추천이 있는 검색창',
  desc: '팀 프로젝트로 진행한 공공데이터 API를 이용한 검색어 추천 기능 검색창입니다. react-query을 이용해 로컬 캐싱으로 API 호출을 최적화했습니다. 추천 검색어는 키보드로 이동할 수 있게 했고, 입력된 검색어와 일치하는 문자를 강조하는 기능을 구현했습니다.',
  duration: '2022.5.18 ~ 2022.5.20',
  stack: 'React, TypeScript, Sass, Redux-toolkit, React-Query',
  links: [
    { src: 'https://7b.netlify.app/', key: 'recommand.deploy' },
    { src: 'https://github.com/Leejin-Yang/Humanscape-7B', key: 'recommand.github' },
  ],
  imgs: [
    {
      src: mainImage,
      alt: 'recommand-main',
      videoSrc: mainVideo,
    },
  ],
};

export default humanscape;
