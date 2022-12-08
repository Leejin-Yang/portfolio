import type { StaticImageData } from 'next/image';

interface Image {
  src: StaticImageData;
  alt: string;
  videoSrc?: string;
}

interface Link {
  src: string;
  key: string;
}

export interface Project {
  title: string;
  subTitle: string;
  desc: string;
  duration: string;
  stack: string;
  links: Link[];
  imgs: Image[];
}
