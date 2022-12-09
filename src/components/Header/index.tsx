import ContactList from './ContactList';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#project'>Project</a>
        </li>
      </ul>
      <ContactList />
    </header>
  );
};

export default Header;
