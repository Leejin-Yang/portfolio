import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import store from 'store';
import cx from 'classnames';

import { colorThemeMode } from 'states/theme';

import styles from './colorButton.module.scss';

interface Props {
  color: string;
}

const ColorButton = ({ color }: Props) => {
  const [, setColorTheme] = useRecoilState(colorThemeMode);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = e.currentTarget.dataset.theme || 'orange';

    setColorTheme(newTheme);
    document.documentElement.setAttribute('color-theme', newTheme);
    store.set('leejin.color.theme', newTheme);
  };

  return (
    <button
      type='button'
      className={cx(styles.colorButton, styles[color])}
      data-theme={color}
      onClick={onClick}
      aria-label={color}
    />
  );
};

export default ColorButton;
