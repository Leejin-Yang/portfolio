import { atom } from 'recoil';
import store from 'store';

// const getBackgroundTheme = () => {
//  let backgroundTheme = store.get('leejin.background.theme');

//  if (!backgroundTheme) {
//    const isSystemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

//    backgroundTheme = isSystemPrefersDark ? 'dark' : 'light';
//  }

//  return backgroundTheme;
// };

export const backgroundThemeMode = atom<string>({
  key: '#backgroundThemeMode',
  default: store.get('leejin.background.theme') || 'dark',
});

export const colorThemeMode = atom<string>({
  key: '#colorThemeMode',
  default: store.get('leejin.color.theme') || 'orange',
});
