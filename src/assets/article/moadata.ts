import mainImage from 'assets/images/moadata/main.jpg';
import manageImage from 'assets/images/moadata/manage.jpg';
import detailImage from 'assets/images/moadata/detail.jpg';

import mainVideo from 'assets/videos/moadata/main.mp4';
import manageVideo from 'assets/videos/moadata/manage.mp4';
import detailVideo from 'assets/videos/moadata/detail.mp4';

import { IProject } from 'types/project.d';

const moadata: IProject = {
  title: 'Back Office',
  subTitle: '어드민 페이지',
  desc: '팀 프로젝트로 진행한 어드민 페이지입니다. 회원 관리 페이지를 맡아 진행했습니다. 사용자 입력을 받고 회원 목록을 조건에 맞게 필터링하는 기능을 구현했습니다. 요구사항 해석에 있어 팀원과 소통하고 조율하는 과정을 거치면서 협업의 중요성을 배웠습니다.',
  duration: '2022.5.28 ~ 2022.5.30',
  stack: 'React, TypeScript, Sass, Recoil',
  links: [
    { src: 'https://moadata7.netlify.app/login', key: 'admin.deploy' },
    { src: 'https://github.com/Leejin-Yang/Moadata-7', key: 'admin.github' },
  ],
  imgs: [
    {
      src: mainImage,
      alt: 'back-office-main',
      videoSrc: mainVideo,
    },
    {
      src: manageImage,
      alt: 'back-office-manage',
      videoSrc: manageVideo,
    },
    {
      src: detailImage,
      alt: 'back-office-detail',
      videoSrc: detailVideo,
    },
  ],
};

export default moadata;
