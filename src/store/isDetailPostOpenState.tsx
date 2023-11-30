import { atom } from 'recoil';

export const isDetailPostOpenState = atom<boolean>({
  key: 'isDetailPostOpen',
  default: false,
});
