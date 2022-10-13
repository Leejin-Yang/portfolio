const COLOR_THEME = ['orange', 'green', 'blue', 'yellow', 'pink'] as const;
const BACKGROUND_THEME = ['light', 'dim', 'dark'] as const;

export type ColorTheme = typeof COLOR_THEME;
export type BackgroundTheme = typeof BACKGROUND_THEME;

export { BACKGROUND_THEME, COLOR_THEME };
