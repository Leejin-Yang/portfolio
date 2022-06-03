import { INFO } from 'assets/article';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <p>{INFO.NAME}</p>
      <ul className={styles.nav}>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#project'>Project</a>
        </li>
        <li>Theme</li>
      </ul>
    </header>
  );
};

export default Header;
