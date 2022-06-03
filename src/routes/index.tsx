import { Route, Routes } from 'react-router-dom';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';
import store from 'store';

import { backgroundThemeMode, colorThemeMode } from 'states/theme';

import ThemeSettingPage from './ThemeSettingPage';
import Portfolio from './Portfolio';

const App = () => {
  const [backgroundTheme] = useRecoilState(backgroundThemeMode);
  const [colorTheme] = useRecoilState(colorThemeMode);

  useMount(() => {
    const background = store.get('leejin.background.theme') || backgroundTheme;
    const color = store.get('leejin.color.theme') || colorTheme;

    document.documentElement.setAttribute('background-theme', background);
    document.documentElement.setAttribute('color-theme', color);
  });

  return (
    <Routes>
      <Route path='/' element={<ThemeSettingPage />} />
      <Route path='main' element={<Portfolio />} />
    </Routes>
  );
};

export default App;
