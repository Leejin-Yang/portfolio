import type { MouseEventHandler } from 'react';

import type { BackgroundTheme, ColorTheme } from '@/constants/theme';

import ColorButton from './ColorButton';
import styles from './colorButtons.module.scss';

interface Props {
  colors: ColorTheme | BackgroundTheme;
  border: boolean;
  onClick: MouseEventHandler;
}

const ColorButtons = ({ colors, border, onClick }: Props) => {
  return (
    <ul className={styles.colorButtons}>
      {colors.map((color) => (
        <li key={`theme-${color}`}>
          <ColorButton color={color} onClick={onClick} border={border} />
        </li>
      ))}
    </ul>
  );
};

export default ColorButtons;
