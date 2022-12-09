import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './modalPortal.module.scss';

interface Props {
  onClose?: () => void;
  children: ReactNode;
}

const ModalPortal = ({ onClose, children }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return createPortal(
    <>
      <button
        type='button'
        className={styles.background}
        onClick={onClose}
        aria-label='background'
      />
      {children}
    </>,
    document.getElementById('modal') as HTMLDivElement
  );
};

export default ModalPortal;
