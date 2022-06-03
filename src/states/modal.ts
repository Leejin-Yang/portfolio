import { atom } from 'recoil';

export const themePickerModalState = atom<boolean>({
  key: '#themePickerModalState',
  default: false,
});
