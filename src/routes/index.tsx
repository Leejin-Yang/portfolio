import { Route, Routes } from 'react-router-dom';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';

import { backgroundThemeMode, colorThemeMode } from 'states/theme';

import ThemeSettingPage from './ThemeSettingPage';
import Portfolio from './Portfolio';

const App = () => {
  const [backgroundTheme] = useRecoilState(backgroundThemeMode);
  const [colorTheme] = useRecoilState(colorThemeMode);

  useMount(() => {
    document.documentElement.setAttribute('background-theme', backgroundTheme);
    document.documentElement.setAttribute('color-theme', colorTheme);
  });

  return (
    <Routes>
      <Route path='/' element={<ThemeSettingPage />} />
      <Route path='main' element={<Portfolio />} />
    </Routes>
  );
};

export default App;
