import type { MouseEventHandler } from 'react';
import { useRecoilState } from 'recoil';
import store from 'store';

import { backgroundThemeMode, colorThemeMode } from '@/states/theme';

const useTheme = () => {
  const [, setBackgroundTheme] = useRecoilState(backgroundThemeMode);
  const [, setColorTheme] = useRecoilState(colorThemeMode);

  const handleBackgroundTheme: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newTheme = e.currentTarget.dataset.theme || 'light';

    setBackgroundTheme(newTheme);
    document.documentElement.setAttribute('background-theme', newTheme);
    store.set('leejin.background.theme', newTheme);
  };

  const handleColorTheme: MouseEventHandler<HTMLButtonElement> = (e) => {
    const newTheme = e.currentTarget.dataset.theme || 'orange';

    setColorTheme(newTheme);
    document.documentElement.setAttribute('color-theme', newTheme);
    store.set('leejin.color.theme', newTheme);
  };

  return { handleBackgroundTheme, handleColorTheme };
};

export default useTheme;
