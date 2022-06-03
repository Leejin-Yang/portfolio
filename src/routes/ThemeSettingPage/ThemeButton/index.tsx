import { MouseEvent, ReactNode } from 'react';
import { useRecoilState } from 'recoil';
import store from 'store';
import cx from 'classnames';

import { backgroundThemeMode } from 'states/theme';

import styles from './themeButton.module.scss';

interface Props {
  children: ReactNode;
  theme: string;
}

const ThemeButton = ({ children, theme }: Props) => {
  const [, setBackgroundTheme] = useRecoilState(backgroundThemeMode);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = e.currentTarget.dataset.theme || 'light';

    setBackgroundTheme(newTheme);
    document.documentElement.setAttribute('background-theme', newTheme);
    store.set('leejin.background.theme', newTheme);
  };

  return (
    <button type='button' className={cx(styles.backgroundButton, styles[theme])} data-theme={theme} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemeButton;
