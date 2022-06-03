import { useState } from 'react';

import ModalPortal from 'routes/Modal/modalPortal';
import ThemePicker from 'routes/Modal/ThemePicker';

import ContactList from 'components/ContactList';

import styles from './header.module.scss';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <ul className={styles.nav}>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#project'>Project</a>
          </li>
          <li>
            <button type='button' className={styles.themeButton} onClick={handleModalOpen}>
              Theme
            </button>
          </li>
        </ul>
        <ContactList />
      </header>
      {isModalOpen && (
        <ModalPortal>
          <ThemePicker onClose={handleModalClose} />
        </ModalPortal>
      )}
    </>
  );
};

export default Header;
