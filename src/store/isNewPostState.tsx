import { atom } from 'recoil';

export const isNewPostState = atom<boolean>({
  key: 'isNewPost',
  default: false,
});
