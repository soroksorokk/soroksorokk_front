import { ButtonProps } from '../type/type';

const Button = ({
  children,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps) => {
  /**
   * 버튼 컴포넌트 import 해서 사용할 때 className은 아래와 같이 사용하면 됨
   * <Button className="btn-purple mb-6 text-white 내가 지정할 속성들"></Button>
   * 클래스명이 있으면 ${className}으로 지정 되도록 수정 default는 btn-purple - 태영
   */
  return (
    <button
      className={className ? `${className}` : 'btn-purple '}
      type={type || 'submit'}
      onClick={onClick}
      disabled={disabled ? true : false}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: undefined,
  type: 'submit',
};
export default Button;
