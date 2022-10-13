import type { MouseEvent } from 'react';

import ColorButton from './ColorButton';
import styles from './colorButtons.module.scss';

interface Props {
  colors: string[];
  border: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
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
