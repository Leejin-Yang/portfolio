import { useState } from 'react';

import ThemePicker from '@/components/Modal/ThemePicker';
import type { Info } from '@/types/info';

import styles from './footer.module.scss';

interface Props {
  info: Info;
}

const Footer = ({ info }: Props) => {
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
      {isModalOpen && <ThemePicker onClose={handleModalClose} />}
    </>
  );
};

export default Footer;
