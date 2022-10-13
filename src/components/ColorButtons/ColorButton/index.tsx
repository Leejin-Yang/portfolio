import cx from 'classnames';
import type { MouseEvent } from 'react';

import styles from './colorButton.module.scss';

interface Props {
  color: string;
  border: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ColorButton = ({ color, border, onClick }: Props) => {
  return (
    <button
      type='button'
      className={cx(styles.colorButton, styles[color], { [styles.border]: border })}
      data-theme={color}
      onClick={onClick}
      aria-label={color}
    />
  );
};

export default ColorButton;
