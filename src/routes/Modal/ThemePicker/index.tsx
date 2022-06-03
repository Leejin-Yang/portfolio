import ColorButtons from 'components/ColorButtons';
import ThemeButtons from 'components/ThemeButtons';

import styles from './themePicker.module.scss';

interface Props {
  onClose: () => void;
}

const ThemePicker = ({ onClose }: Props) => {
  return (
    <>
      <button type='button' className={styles.background} onClick={onClose} aria-label='background' />
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <button type='button' className={styles.navigate} onClick={onClose} aria-label='exit' />
          <h2>색상</h2>
          <ColorButtons border={false} />
          <h2>배경</h2>
          <ThemeButtons border />
        </div>
      </div>
    </>
  );
};

export default ThemePicker;
