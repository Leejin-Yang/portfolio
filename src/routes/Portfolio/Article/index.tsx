import { IProject } from 'types/project.d';

import styles from './article.module.scss';

interface Props {
  project: IProject;
}

const Article = ({ project }: Props) => {
  const { title, desc, imgs } = project;

  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.desc}>{desc}</p>
      </section>
      <div className={styles.images}>
        {imgs.map((img) => (
          <img src={img.src} key={img.alt} alt={img.alt} />
        ))}
      </div>
    </article>
  );
};

export default Article;
