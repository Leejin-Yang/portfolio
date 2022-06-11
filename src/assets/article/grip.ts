import searchImage from 'assets/images/grip/search.jpg';
import favoriteImage from 'assets/images/grip/favorites.jpg';

import searchVideo from 'assets/videos/grip/search.mp4';
import favoritesVideo from 'assets/videos/grip/favorites.mp4';

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
      src: searchImage,
      alt: 'movie-app-search',
      videoSrc: searchVideo,
    },
    {
      src: favoriteImage,
      alt: 'movie-app-favorite',
      videoSrc: favoritesVideo,
    },
  ],
};

export default grip;
