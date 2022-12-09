import type { GetStaticProps } from 'next';

import About from '@/components/About';
import Article from '@/components/Article';
import Aside from '@/components/Aside';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { getInfo, getProjects } from '@/lib/data';
import styles from '@/styles/pages/main.module.scss';
import type { Info } from '@/types/info';
import type { Project } from '@/types/project';

interface Props {
  info: Info;
  projects: Project[];
}

const Portfolio = ({ info, projects }: Props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Aside info={info} />
      <main className={styles.main}>
        <div id='about' className={styles.hidden} aria-hidden />
        <About info={info} />
        <div id='project' className={styles.hidden} aria-hidden />
        {projects?.map((project) => (
          <Article key={project.title} project={project} />
        ))}
      </main>
      <Footer info={info} />
    </div>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const info = getInfo();
  const projects = getProjects();

  return {
    props: {
      info,
      projects,
    },
  };
};
