interface IImage {
  src: string;
  alt: string;
  videoSrc?: string;
}

interface ILink {
  src: string;
  key: string;
}

export interface IProject {
  title: string;
  subTitle: string;
  desc: string;
  duration: string;
  stack: string;
  links: ILink[];
  imgs: IImage[];
}
