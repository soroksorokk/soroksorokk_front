import React from 'react';
import useModal from '../../hook/useModal';
import ModalBackground from '../../UI/ModalBackground';
import Button from '../../UI/Button';
import TermsOfUse from './TermsOfUse';
import { useForm } from 'react-hook-form';
import { RegisterProps } from '../../type/type';

export interface SignUpModalProps {
  title?: string;
  confirmText?: string;
}

const SignUpModal = ({ title, confirmText }: SignUpModalProps) => {
  const { hideModal } = useModal();
  // react-hook-form 을 사용하기 위해 useForm에 있는 속성들을 구조분해할당으로 가져옴
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterProps>({
    defaultValues: {
      email: '',
      password: '',
      passwordCheck: '',
      nickName: '',
    },
  });

  const onClose = () => {
    hideModal();
  };

  const onSubmitHandler = (data: RegisterProps) => {
    console.log('data', data);
  };

  // 패스워드 입력과 패스워드 더블체크를 위해 패스워드 입력값을 계속 추적하는 것(e.target.value랑 같음).
  const pwd = watch('password', '');
  const pwdCheck = watch('passwordCheck', '');

  return (
    <ModalBackground onClose={onClose}>
      <div
        className="modal-box h-[31.25rem] overflow-y-auto scroll-smooth scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <img
            src="/assets/closeBtn.svg"
            width={23}
            height={23}
            onClick={onClose}
            className="cursor-pointer"
          />
        </div>
        <h1 className="pt-[1rem]">{title}</h1>
        <form
          onSubmit={handleSubmit(onSubmitHandler)}
          className="flex flex-col "
        >
          <label htmlFor="email" className="pt-[1rem]">
            이메일
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              className="placeholder:placeholder:text=[#909090] w-full border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
              placeholder="이메일을 입력해주세요"
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <Button className="absolute bottom-6 right-0 top-[5%] h-[2.8125rem] w-[5rem] rounded-3xl border-2 border-[.0625rem] border-[#9664FF] bg-white px-2 py-1 text-sm text-[#9664FF]">
              중복확인
            </Button>
          </div>
          <p>{errors.email?.message}</p>
          <label htmlFor="password" className="pt-[1rem]">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className="placeholder:placeholder:text=[#909090] border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
            placeholder="8자 이상 영문/숫자/특수문자 중 2가지 포함"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: 8,
              maxLength: 10,
            })}
          />
          <p>{errors.password?.message}</p>
          <label htmlFor="passwordCheck" className="pt-[1rem]">
            비밀번호 확인
          </label>
          <input
            id="passwordCheck"
            type="password"
            className="placeholder:placeholder:text=[#909090] border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
            placeholder="비밀번호를 다시 한번 입력해주세요"
            {...register('passwordCheck', {
              required: '비밀번호를 다시 입력해주세요',
              minLength: 8,
              maxLength: 10,
            })}
          />
          {errors.passwordCheck && <p>{errors.passwordCheck?.message}</p>}
          {pwdCheck.length > 1 && pwd !== pwdCheck ? (
            <p>비밀번호가 동일하지 않습니다</p>
          ) : null}
          {pwd.length > 7 && pwdCheck.length > 7 && pwd === pwdCheck ? (
            <p>비밀번호가 동일합니다</p>
          ) : null}
          <label htmlFor="nickName" className="pt-[1rem]">
            닉네임
          </label>
          <div className="relative">
            <input
              id="nickName"
              type="text"
              minLength={2}
              maxLength={10}
              className="placeholder:placeholder:text=[#909090] w-full border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
              placeholder="닉네임을 입력해주세요"
              {...register('nickName', {
                required: '닉네임을 입력해주세요',
                minLength: {
                  value: 2,
                  message: '2글자 이상 작성해주세요',
                },
                maxLength: 10,
              })}
            />
            <Button className="absolute bottom-6 right-0 top-[5%] h-[2.8125rem] w-[5rem] rounded-3xl border-[.0625rem] border-[#9664FF] bg-white px-2 py-1 text-sm text-[#9664FF]">
              중복확인
            </Button>
            <p>{errors.nickName?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="pt-[1rem] ">이용약관 동의</label>
            <TermsOfUse />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button className={'btn-purple' + ' mb-6'}>{confirmText}</Button>
          </div>
        </form>
      </div>
    </ModalBackground>
  );
};

export default SignUpModal;
