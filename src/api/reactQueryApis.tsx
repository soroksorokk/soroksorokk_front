import { LoginProps } from '../components/Modal/LoginModal';
import { RegisterProps } from '../type/type';
import { signUpApi, privateApi } from './axios';

// login 할 때 post 요청 함수
const onSubmitHandler = async (data: LoginProps) => {
  const user = {
    email: data.email,
    password: data.password,
  };
  const response = await privateApi.post('/api/auth/sign-in', user);
  return response;
};

// signUp 할 때 post 함수
interface SignUpRequestProps extends RegisterProps {
  profileImgFile: File | null;
}

const onSignUpSubmitHandler = async (data: SignUpRequestProps) => {
  console.log('data', data);

  const signUpRequest = {
    email: data.email,
    password: data.password,
    nickName: data.nickName,
    option1: true,
    option2: false,
  };

  const formData = new FormData();

  if (data.profileImgFile) {
    formData.append('image', data.profileImgFile);
  }

  formData.append(
    'signUpRequest',
    new Blob([JSON.stringify(signUpRequest)], { type: 'application/json' }),
  );

  for (const entry of formData) {
    console.log('entries', entry);
  }

  const response = await signUpApi.post('/api/auth/sign-up', formData);
  return response;
};

export { onSubmitHandler, onSignUpSubmitHandler };
