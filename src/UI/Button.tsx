import React from 'react';
import { ButtonProps } from '../type/type';

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button className={'btn-purple ' + `${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
