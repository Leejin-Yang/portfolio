import { Route, Routes } from 'react-router-dom';
import { useMount } from 'react-use';
import { useRecoilState } from 'recoil';
import { backgroundThemeMode, colorThemeMode } from 'states/theme';

import Portfolio from './Portfolio';
import ThemeSettingPage from './ThemeSettingPage';

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
