import React from 'react';
import cx from 'classnames';
import Slider from 'react-slick';

import { IProject } from 'types/project.d';

import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import styles from './article.module.scss';
import './slider.scss';

interface Props {
  project: IProject;
}

const Article = ({ project }: Props) => {
  const { title, subTitle, desc, duration, stack, links, imgs } = project;

  return (
    <article className={styles.article}>
      <section className={styles.section}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subTitle}>{subTitle}</h3>
        <p className={styles.desc}>{desc}</p>
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
      <div className={styles.images}>
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
      </div>
    </article>
  );
};

export default Article;
