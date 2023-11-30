import { atom } from 'recoil';

const isLoggedInState = atom({
  key: 'isLoggedInState',
  default: false,
});

export default isLoggedInState;
