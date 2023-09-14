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

interface SignUpRequestProps extends RegisterProps {
  profileImgFile: File | null;
}

// signUp 할 때 post 함수
const onSignUpSubmitHandler = async (data: SignUpRequestProps) => {
  console.log('data', data);

  const signUpRequest = {
    email: data.email,
    nickName: data.nickName,
    option1: true,
    option2: false,
    password: data.password,
  };

  const formData = new FormData();

  if (data.profileImgFile) {
    formData.append('image', data.profileImgFile);
  } else {
    formData.append('image', '');
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
