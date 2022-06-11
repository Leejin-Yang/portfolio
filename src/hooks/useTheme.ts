import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import store from 'store';

import { backgroundThemeMode, colorThemeMode } from 'states/theme';

const useTheme = () => {
  const [, setBackgroundTheme] = useRecoilState(backgroundThemeMode);
  const [, setColorTheme] = useRecoilState(colorThemeMode);

  const handleBackgroundTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = e.currentTarget.dataset.theme || 'light';

    setBackgroundTheme(newTheme);
    document.documentElement.setAttribute('background-theme', newTheme);
    store.set('leejin.background.theme', newTheme);
  };

  const handleColorTheme = (e: MouseEvent<HTMLButtonElement>) => {
    const newTheme = e.currentTarget.dataset.theme || 'orange';

    setColorTheme(newTheme);
    document.documentElement.setAttribute('color-theme', newTheme);
    store.set('leejin.color.theme', newTheme);
  };

  return { handleBackgroundTheme, handleColorTheme };
};

export default useTheme;
