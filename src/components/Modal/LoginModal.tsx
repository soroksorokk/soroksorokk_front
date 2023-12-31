import useModal from '../../hook/useModal';
import ModalBackground from '../../UI/ModalBackground';
import Button from '../../UI/Button';
import useWidthResize from '../../hook/useWidthResize';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import isLoggedInState from '../../store/isLoggedInState';
import { useMutation } from '@tanstack/react-query';
import { onSubmitHandler } from '../../api/reactQueryApis';
import GithubLogin from '../SocialLogin/GithubLogin';
import GoogleLogin from '../SocialLogin/GoogleLogin';

export interface LoginModalProps {
  title?: string;
  confirmText?: string;
}

export interface LoginProps {
  email: string;
  password: string;
}

const LoginModal = ({ title, confirmText }: LoginModalProps) => {
  const { hideModal } = useModal();
  const windowsWIdth = useWidthResize();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<LoginProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  //useModal에서 빼온 hideModal을 사용해 모달백그라운드를 누르면 닫히게 설정함
  const onClose = () => {
    hideModal();
  };

  const signInMutation = useMutation(onSubmitHandler, {
    onSuccess: (res) => {
      console.log('로그인 성공', res);
      const userToken = {
        authorization: res.headers.authorization,
        'authorization-refresh': res.headers['authorization-refresh'],
      };
      if (res.status === 200) {
        localStorage.setItem('userToken', JSON.stringify(userToken));
        setIsLoggedIn(true);
        hideModal();
        navigate('/');
      }
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const submitHandler = (data: LoginProps) => {
    signInMutation.mutate(data);
  };

  const { showModal } = useModal();

  const handleSignUpModalClick = () => {
    showModal({
      modalType: 'SignUpModal',
      modalProps: {
        title: '회원가입',
        confirmText: '완료',
      },
    });
  };

  return (
    <ModalBackground onClose={onClose}>
      <div
        className={
          windowsWIdth.width < 768
            ? 'h-screen w-full overflow-y-auto bg-white p-[4rem] scrollbar-hide'
            : 'modal-box'
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
        <h1 className="pt-[1.25rem]">{title}</h1>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col">
          <input
            type="email"
            className="placeholder:placeholder:text=[#909090] my-3 border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
            placeholder="이메일을 입력해주세요"
            id="email"
            {...register('email')}
          />
          <input
            type="password"
            className="placeholder:placeholder:text=[#909090] my-3 border-b-[.0625rem] border-[#909090] p-4 text-sm outline-none focus:border-[#9664FF]"
            placeholder="비밀번호를 입력해주세요"
            id="password"
            {...register('password')}
          />
          <div className="flex flex-col items-center justify-center">
            <Button
              onClick={handleSignUpModalClick}
              type="button"
              className={'btn-purple' + ' mb-2 bg-white text-[#838383]'}
            >
              회원가입
            </Button>
            <Button className="btn-purple mb-6 w-full text-white">
              {confirmText}
            </Button>
          </div>
          <div className="flex items-center justify-center gap-x-4 ">
            <GithubLogin />
            <GoogleLogin />
          </div>
        </form>
      </div>
    </ModalBackground>
  );
};

export default LoginModal;
