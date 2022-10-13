import { info } from 'assets/article';
import ModalPortal from 'pages/Modal/modalPortal';
import ThemePicker from 'pages/Modal/ThemePicker';
import { useState } from 'react';

import styles from './footer.module.scss';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <footer className={styles.footer}>
        <p>{info.copyright}</p>
        <button
          type='button'
          className={styles.themePicker}
          onClick={handleModalOpen}
          aria-label='themePicker'
        />
      </footer>
      {isModalOpen && (
        <ModalPortal>
          <ThemePicker onClose={handleModalClose} />
        </ModalPortal>
      )}
    </>
  );
};

export default Footer;
