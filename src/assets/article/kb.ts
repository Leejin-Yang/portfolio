import point from 'assets/images/kb/point.png';
import graph from 'assets/images/kb/graph.png';
import ocare1 from 'assets/images/kb/ocare-1.png';
import ocare2 from 'assets/images/kb/ocare-2.png';

import { IProject } from 'types/project.d';

const kb: IProject = {
  title: 'My Health',
  subTitle: '건강 점수 분석 페이지',
  desc: '팀 프로젝트로 진행한 건강 점수 분석 페이지입니다. 맞춤 건강 관리 부분을 맡아 진행했습니다. 카드 섹션을 구현하면서 데이터 처리와 컴포넌트 재사용에 대한 깊은 고민을 한 프로젝트입니다.',
  duration: '2022.5.26 ~ 2022.5.27',
  stack: 'React, TypeScript, Sass',
  links: [
    { src: 'https://kb-7.netlify.app/', key: 'my-health.deploy' },
    { src: 'https://github.com/Leejin-Yang/KB-7', key: 'my-health.github' },
  ],
  imgs: [
    {
      src: point,
      alt: 'kb-point',
    },
    {
      src: graph,
      alt: 'kb-graph',
    },
    {
      src: ocare1,
      alt: 'kb-ocare1',
    },
    {
      src: ocare2,
      alt: 'kb-ocare2',
    },
  ],
};

export default kb;
