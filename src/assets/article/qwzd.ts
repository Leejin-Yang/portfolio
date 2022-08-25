import main from 'assets/images/qwzd/main.png';
import stat from 'assets/images/qwzd/stat.png';
import modal from 'assets/images/qwzd/modal.png';
import ranking from 'assets/images/qwzd/ranking.png';

import { IProject } from 'types/project.d';

const qwzd: IProject = {
  title: 'QWZD',
  subTitle: '피파온라인 4 전적 검색 사이트',
  desc: 'React를 사용한 프로젝트로 백엔드와 협업하여 클라이언트 부분 100%를 개발했습니다. 구단주 검색으로 해당 구단주의 경기 별 스탯과 선수 랭킹을 확인하는 서비스입니다. 프로젝트 환경 설정부터 디자인, 개발, AWS를 이용한 배포까지의 전반적인 과정을 학습했습니다. 70%의 모바일 사용자의 만족을 위해 반응형 작업을 진행했습니다. 5개월 기간동안 DAU 200에서 1000을 유지하는 서비스로 발전시켰습니다.',
  duration: '2021.9 ~',
  stack: 'React, ES6, emotion, AWS S3 & Cloudfront',
  links: [{ src: 'https://qwzd.kr', key: 'qwzd.kr' }],
  imgs: [
    {
      src: main,
      alt: 'qwzd-main',
    },
    {
      src: stat,
      alt: 'qwzd-stat',
    },
    {
      src: modal,
      alt: 'qwzd-modal',
    },
    {
      src: ranking,
      alt: 'qwzd-ranking',
    },
  ],
};

export default qwzd;
