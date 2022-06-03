import { GithubIcon, InstagramIcon, MailIcon } from 'assets/svgs';

import styles from './contactList.module.scss';

const ContactList = () => {
  return (
    <ul className={styles.contact}>
      <li>
        <a href='https://github.com/Leejin-Yang' target='_blank' rel='noopener noreferrer'>
          <GithubIcon />
        </a>
      </li>
      <li>
        <a href='mailto:ejin1996@gmail.com'>
          <MailIcon />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/y_horong' target='_blank' rel='noopener noreferrer'>
          <InstagramIcon />
        </a>
      </li>
    </ul>
  );
};

export default ContactList;
