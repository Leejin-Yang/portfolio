import cx from 'classnames';
import type { MouseEventHandler } from 'react';

import styles from './colorButton.module.scss';

interface Props {
  color: string;
  border: boolean;
  onClick: MouseEventHandler;
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
