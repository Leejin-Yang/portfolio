import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './slider.scss';

import cx from 'classnames';
import parse from 'html-react-parser';
import React, { useMemo } from 'react';
import Slider from 'react-slick';

import type { Project } from '@/types/project.d';

import styles from './article.module.scss';

interface Props {
  project: Project;
}

const Article = ({ project }: Props) => {
  const { title, subTitle, desc, duration, stack, links, imgs } = project;

  const descHtml = useMemo(() => parse(desc), [desc]);

  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subTitle}>{subTitle}</h3>
        <p className={styles.desc}>{descHtml}</p>
        <ul className={styles.summary}>
          <li>{duration}</li>
          <li>{stack}</li>
        </ul>
        <ul className={styles.linkList}>
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.src} target='_blank' rel='noopener noreferrer'>
                {link.key} →
              </a>
            </li>
          ))}
        </ul>
      </section>
      {/*<div className={styles.images}>
        <Slider dots infinite>
          {imgs.map((img) => (
            <React.Fragment key={img.alt}>
              <img src={img.src} alt={img.alt} className={cx({ [styles.hidden]: img.videoSrc })} />
              {img.videoSrc && (
                <video muted autoPlay loop playsInline poster={img.src} className={styles.video}>
                  <source src={img.videoSrc} type='video/mp4' />
                </video>
              )}
            </React.Fragment>
          ))}
        </Slider>
      </div>*/}
    </article>
  );
};

export default Article;
