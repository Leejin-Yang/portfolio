import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import store from 'store';

import { backgroundThemeMode } from 'states/theme';

import ColorButton from '../ColorButton';

import styles from './colorButtons.module.scss';

interface Props {
  border: boolean;
}

const ThemeButtons = ({ border }: Props) => {
  const [, setBackgroundTheme] = useRecoilState(backgroundThemeMode);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = e.currentTarget.dataset.theme || 'light';

    setBackgroundTheme(newTheme);
    document.documentElement.setAttribute('background-theme', newTheme);
    store.set('leejin.background.theme', newTheme);
  };

  return (
    <div className={styles.colorButtons}>
      <ColorButton color='light' onClick={onClick} border={border} />
      <ColorButton color='dim' onClick={onClick} border={border} />
      <ColorButton color='dark' onClick={onClick} border={border} />
    </div>
  );
};

export default ThemeButtons;
