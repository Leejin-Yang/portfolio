import searchImage from 'assets/images/movieApp/search.jpg';
import favoriteImage from 'assets/images/movieApp/favorites.jpg';

import searchVideo from 'assets/videos/movieApp/search.mp4';
import favoritesVideo from 'assets/videos/movieApp/favorites.mp4';

import { IProject } from 'types/project.d';

const movieApp: IProject = {
  title: 'Movie App',
  subTitle: '영화 검색, 즐겨찾기 사이트',
  desc: 'Open API를 이용한 영화 검색과 즐겨찾기를 등록할 수 있는 서비스입니다. 모바일 환경을 먼저 고려해 디자인 했습니다. 영화 데이터 요청은 Infinite Scroll을 이용해 구현했습니다. 즐겨찾기를 등록한 영화를 로컬 스토리지에 저장해 유지하게 했습니다. 즐겨찾기에 등록된 영화 목록 순서를 Drag & Drop으로 변경할 수 있습니다.',
  duration: '2022.5.10 ~ 2022.5.15',
  stack: 'React, TypeScript, SCSS, Recoil',
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

export default movieApp;
