import { useState } from 'react';
import useModal from '../../hook/useModal';
import ModalBackground from '../../UI/ModalBackground';
import Button from '../../UI/Button';
import TermsOfUse from './TermsOfUse';
import { useForm, useWatch, useFormState } from 'react-hook-form';
import { RegisterProps } from '../../type/type';
import useWidthResize from '../../hook/useWidthResize';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { onSignUpSubmitHandler } from '../../api/reactQueryApis';
import { publicApi } from '../../api/axios';

export interface SignUpModalProps {
  title?: string;
  confirmText?: string;
}

const SignUpModal = ({ title, confirmText }: SignUpModalProps) => {
  const [profilePreview, setProfilePreview] = useState<string>('');
  const [profileImgFile, setProfileImgFile] = useState<File | null>(null);

  const navigate = useNavigate();
  const windowWidth = useWidthResize();
  const { hideModal, showModal } = useModal();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    getValues,
    setError,
    clearErrors,
    getFieldState,
    formState: { errors, isSubmitting },
  } = useForm<RegisterProps>({
    mode: 'onChange',
  });

  const onClose = () => {
    hideModal();
  };

  const handleShowLoginModal = () => {
    showModal({
      modalType: 'LoginModal',
      modalProps: {
        title: '로그인',
        confirmText: '완료',
      },
    });
  };

  const signUpMutation = useMutation(onSignUpSubmitHandler, {
    onError: (error) => {
      console.log('error', error);
    },
    onSuccess: (res) => {
      console.log('res', res);
      console.log('성공');
      hideModal();
      navigate('/');
      handleShowLoginModal();
    },
  });

  const signUpSubmitHandler = (data: RegisterProps) => {
    signUpMutation.mutate({ ...data, profileImgFile });
  };

  // 패스워드 입력과 패스워드 더블체크를 위해 패스워드 입력값을 계속 추적하는 api(useWatch) 적용
  const pwd = useWatch({ control, name: 'password', defaultValue: '' });
  const pwdCheck = useWatch({
    control,
    name: 'passwordCheck',
    defaultValue: '',
  });

  // 이미지 업로드 및 이미지 미리보기 함수
  const handleProfileImg = (e: any) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    if (file) {
      let imgUrl = URL.createObjectURL(file);
      setProfileImgFile(file);
      setProfilePreview(imgUrl);
      setValue('image', profileImgFile);
    }
  };

  const handleRemoveProfile = () => {
    setProfileImgFile(null);
    setProfilePreview('');
  };

  // 이메일 중복 확인 핸들러
  const handleDuplicateEmailCheck = async () => {
    const emailState = getFieldState('email');
    const value = getValues('email');

    if (emailState.isDirty) {
      if (emailState.invalid) {
        setError('email', {
          type: 'manual',
          message: '이메일 형식에 맞게 작성해주세요',
        });
        setValue('emailCheck', false);
      }
    }

    try {
      const response = await publicApi.post(
        `/api/auth/validations/email?value=${value}`,
      );

      if (response.status === 200) {
        setValue('emailCheck', true);
        clearErrors('emailCheck');
      } else if (response.status === 500) {
        setError('email', {
          type: 'manual',
          message: '다른 이메일을 입력해주세요',
        });
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  // 닉네임 중복확인 핸들러
  const handleDuplicateNickNameCheck = async () => {
    const value = getValues('nickName');

    if (value.length < 2) {
      setError('nickName', {
        type: 'manual',
        message: '1글자 이상 입력해주세요',
      });
    }
    try {
      const response = await publicApi.post(
        `/api/auth/validations/nickname?value=${value}`,
      );
      if (response.status == 200) {
        setValue('nickNameCheck', true);
        clearErrors('nickNameCheck');
      }
    } catch (error) {
      setError('nickName', {
        type: 'manual',
        message: '다른 닉네임을 입력해주세요',
      });
    }
  };

  return (
    <ModalBackground onClose={onClose}>
      <div
        className={
          windowWidth.width < 768
            ? 'h-screen w-full overflow-y-auto bg-white p-[2.5rem] scrollbar-hide'
            : 'modal-box h-[37.5rem] w-[30rem] overflow-y-auto scrollbar-hide'
        }
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
        {/* <FormProvider {...methods}> */}
        <form
          onSubmit={handleSubmit(signUpSubmitHandler)}
          className="flex flex-col "
        >
          <div className="flex justify-center bg-no-repeat py-[1rem]">
            <label
              className="rounded-ful relative h-28 w-28 cursor-pointer"
              htmlFor="image"
            >
              <img
                className="absolute h-28 w-28 rounded-full object-cover"
                src={
                  profilePreview ? profilePreview : `/assets/defaultProfile.png`
                }
                alt="image"
              />
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleProfileImg}
            />
          </div>

          {profilePreview && (
            <div className="flex justify-center text-rose-600">
              <span onClick={handleRemoveProfile} className="cursor-pointer">
                이미지 삭제
              </span>
            </div>
          )}

          <label htmlFor="email" className="pt-[1rem]">
            이메일
          </label>
          <div className="relative">
            <input
              id="email"
              type="email"
              className={`placeholder:placeholder:text=[#909090] w-full border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF] ${
                getValues('emailCheck') ? 'bg-inherit' : 'bg-inherit'
              }`}
              placeholder="example@email.com"
              {...register('email', {
                required: '이메일을 입력해주세요',
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: '이메일 형식에 맞지 않습니다',
                },
              })}
              disabled={getValues('emailCheck') === true}
            />
            <Button
              onClick={handleDuplicateEmailCheck}
              disabled={
                getValues('emailCheck') ||
                getFieldState('email').error ||
                !getFieldState('email').isDirty
              }
              type="button"
              className={`absolute bottom-6 right-0 top-[5%] h-[2.8125rem] w-[5rem] rounded-3xl border-[.0625rem] px-2 py-1 text-sm ${
                !getFieldState('email').isDirty ||
                getValues('emailCheck') ||
                getFieldState('email').error
                  ? 'bg-gray text-white'
                  : 'bg-[#9664FF] text-white'
              }`}
            >
              중복확인
            </Button>
          </div>
          <p className="text-sm text-red">{errors.email?.message}</p>
          {getValues('emailCheck') && <p>사용할 수 있는 이메일 입니다</p>}
          <label htmlFor="password" className="pt-[1rem]">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className="placeholder:placeholder:text=[#909090] border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
            placeholder="8~15글자 이하/ 영문/숫자/특수문자 중 2가지 포함"
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              minLength: {
                value: 8,
                message: '비밀번호는 8글자 이상 15글자 미만으로 입력해주세요',
              },
              maxLength: {
                value: 15,
                message: '비밀번호는 15글자 미만으로 입력해주세요',
              },
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[\d@$!%*?&])[a-zA-Z\d@$!%*?&]{8,15}$/,
                message: '8~15글자, 영문이나 숫자, 특수문자 중 2가지 포함',
              },
            })}
          />
          {errors.password && (
            <p className="text-xs text-red">{errors.password?.message}</p>
          )}

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
              maxLength: 15,
            })}
          />

          {errors.passwordCheck && (
            <p className="text-xs text-red">{errors.passwordCheck?.message}</p>
          )}

          {pwdCheck.length > 1 && pwd !== pwdCheck ? (
            <p className="text-xs text-red">비밀번호가 동일하지 않습니다</p>
          ) : null}
          {pwd.length > 7 && pwdCheck.length > 7 && pwd === pwdCheck ? (
            <p className="text-xs text-green-500">비밀번호가 동일합니다</p>
          ) : null}

          <label htmlFor="nickName" className="pt-[1rem]">
            닉네임
          </label>
          <div className="relative">
            <input
              id="nickName"
              type="text"
              minLength={2}
              maxLength={8}
              className="placeholder:placeholder:text=[#909090] w-full border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
              placeholder="닉네임을 입력해주세요"
              {...register('nickName', {
                required: '닉네임을 입력해주세요',
                minLength: {
                  value: 2,
                  message: '2글자 이상 작성해주세요',
                },
                maxLength: { value: 10, message: '10글자 이하만 가능합니다' },
              })}
              disabled={getValues('nickNameCheck') === true}
            />
            <Button
              onClick={handleDuplicateNickNameCheck}
              type="button"
              disabled={
                getValues('nickNameCheck') ||
                errors.nickName ||
                !getFieldState('nickName').isDirty
              }
              className={`absolute bottom-6 right-0 top-[5%] h-[2.8125rem] w-[5rem] rounded-3xl border-[.0625rem] ${
                !getFieldState('nickName').isDirty ||
                getValues('nickNameCheck') ||
                errors.nickName
                  ? 'bg-gray text-white'
                  : 'bg-[#9664FF] text-white'
              }`}
            >
              중복확인
            </Button>
            <p className="text-xs text-red">{errors.nickName?.message}</p>

            {getValues('nickNameCheck') && <p>사용할 수 있는 닉네임입니다</p>}
          </div>
          <div className="flex flex-col">
            <label className="pt-[1rem] ">이용약관 동의</label>
            <TermsOfUse />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button disabled={isSubmitting} className={'btn-purple' + ' mb-6'}>
              {isSubmitting ? '제출 중' : confirmText}
            </Button>
          </div>
        </form>
        {/* </FormProvider> */}
      </div>
    </ModalBackground>
  );
};

export default SignUpModal;
