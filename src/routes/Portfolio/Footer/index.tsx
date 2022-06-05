import { useState } from 'react';

import { info } from 'assets/article';

import ModalPortal from 'routes/Modal/modalPortal';
import ThemePicker from 'routes/Modal/ThemePicker';

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
        <button type='button' className={styles.themePicker} aria-label='themePicker' onClick={handleModalOpen} />
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
