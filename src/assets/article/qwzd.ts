import main from 'assets/images/qwzd/main.png';
import modal from 'assets/images/qwzd/modal.png';
import ranking from 'assets/images/qwzd/ranking.png';
import stat from 'assets/images/qwzd/stat.png';
import type { Project } from 'types/project.d';

const qwzd: Project = {
  title: 'QWZD',
  subTitle: '피파온라인 4 전적 검색 사이트',
  desc: 'React를 사용한 프로젝트로 백엔드와 협업하여 <strong>클라이언트 부분 100%</strong>를 개발했습니다. 구단주 검색으로 해당 구단주의 경기 별 스탯과 선수 랭킹을 확인하는 서비스입니다. 프로젝트 환경 설정부터 디자인, 개발, 배포까지의 전반적인 과정을 학습했습니다. <strong>70%의 모바일 사용자의 만족을 위해 반응형 작업</strong>을 진행했습니다. 5개월 기간동안 <strong>DAU 200에서 1000</strong>을 유지하는 서비스로 발전시켰습니다.\n기존에 JavaScript로 진행한 프로젝트를 <strong>TypeScript로 마이그레이션</strong>을 진행했습니다. 정적 타입 지원을 통해 컴파일 단계에서 오류를 잡을 수 있게 하고 팀원을 추가하는 과정에서 코드를 예측할 수 있게 했습니다. <strong>Redux Toolkit</strong>을 도입해 기존의 상태들을 전역으로 관리했습니다. 각 컴포넌트에서 구독해 기존의 props drilling을 개선해 불필요한 리렌더링을 방지했습니다.',
  duration: '2021.9 ~',
  stack: 'React, TypeScript, emotion, Redux Toolkit',
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
