import { atom } from 'recoil';

const getBackgroundTheme = () => {
  const isSystemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const backgroundTheme = isSystemPrefersDark ? 'dark' : 'light';

  return backgroundTheme;
};

const initialState = getBackgroundTheme();

export const backgroundThemeMode = atom<string>({
  key: '#backgroundThemeMode',
  default: initialState,
});

export const colorThemeMode = atom<string>({
  key: '#colorThemeMode',
  default: 'orange',
});
