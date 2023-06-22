import React from 'react';
import { ButtonProps } from '../type/type';

const Button = ({ children, onClick, className }: ButtonProps) => {
  /**
   * 버튼 컴포넌트 import 해서 사용할 때 className은 아래와 같이 사용하면 됨
   * <Button className={'btn-purple' + ' mb-6 text-white 내가 지정할 속성들'}></Button>
   */
  return (
    <button className={'btn-purple ' + `${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
