import ColorButtons from '@/components/ColorButtons';
import { BACKGROUND_THEME, COLOR_THEME } from '@/constants/theme';
import useTheme from '@/hooks/useTheme';

import ModalPortal from '../modalPortal';
import styles from './themePicker.module.scss';

interface Props {
  onClose: () => void;
}

const ThemePicker = (props: Props) => {
  const { handleBackgroundTheme, handleColorTheme } = useTheme();
  const { onClose } = props;

  return (
    <ModalPortal {...props}>
      <div className={styles.modalContainer}>
        <div className={styles.modal}>
          <button type='button' className={styles.navigate} onClick={onClose} aria-label='exit' />
          <h2>색상</h2>
          <ColorButtons colors={COLOR_THEME} onClick={handleColorTheme} border={false} />
          <h2>배경</h2>
          <ColorButtons colors={BACKGROUND_THEME} onClick={handleBackgroundTheme} border />
        </div>
      </div>
    </ModalPortal>
  );
};

export default ThemePicker;
