interface IImage {
  src: string;
  alt: string;
}

export interface IProject {
  title: string;
  desc: string;
  imgs: IImage[];
}
