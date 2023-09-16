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

  if (data.emailCheck !== true) {
    return console.log('이메일 중복체크 안 됐다');
  } else if (data.nickNameCheck !== true) {
    return console.log('닉네임 중복확인 안 했다');
  }
  const response = await signUpApi.post('/api/auth/sign-up', formData);
  return response;
};

// const handleCommentPost = async(data:any) => {

// };
const postComment = async ({ comment, params }: any) => {
  const formData = new FormData();
  formData.append('comment', comment);

  try {
    const response = await signUpApi.post(
      `/api/feeds/${params.feedId}/comments`,
      formData,
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const getComment = async () => {};
export { onSubmitHandler, onSignUpSubmitHandler, postComment, getComment };
