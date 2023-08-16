import React from 'react';
import { atom } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
});
