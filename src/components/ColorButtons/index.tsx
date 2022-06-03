import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import store from 'store';

import { colorThemeMode } from 'states/theme';

import ColorButton from '../ColorButton';

import styles from './colorButtons.module.scss';

interface Props {
  border: boolean;
}

const ColorButtons = ({ border }: Props) => {
  const [, setColorTheme] = useRecoilState(colorThemeMode);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = e.currentTarget.dataset.theme || 'orange';

    setColorTheme(newTheme);
    document.documentElement.setAttribute('color-theme', newTheme);
    store.set('leejin.color.theme', newTheme);
  };

  return (
    <div className={styles.colorButtons}>
      <ColorButton color='orange' onClick={onClick} border={border} />
      <ColorButton color='green' onClick={onClick} border={border} />
      <ColorButton color='blue' onClick={onClick} border={border} />
      <ColorButton color='yellow' onClick={onClick} border={border} />
      <ColorButton color='pink' onClick={onClick} border={border} />
    </div>
  );
};

export default ColorButtons;
