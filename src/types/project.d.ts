interface Image {
  src: string;
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
