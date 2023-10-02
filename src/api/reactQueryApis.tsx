import { LoginProps } from '../components/Modal/LoginModal';
import { EditorDataType, RegisterProps } from '../type/type';
import { formDataApi, privateApi } from './axios';

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
    return;
  } else if (data.nickNameCheck !== true) {
    return;
  }
  const response = await formDataApi.post('/api/auth/sign-up', formData);
  return response;
};

// 글쓰기 create(POST)

const onSubmitNewPost = async (data: EditorDataType) => {
  const formData = new FormData();

  const req = {
    image: null,
    content: data.content,
    artist: data.artist,
    mood: data.mood,
    music: data.music,
    title: data.title,
    tags: data.tags,
  };

  if (data.image) {
    formData.append('image', data.image);
  } else {
    formData.append('image', '');
  }

  formData.append(
    'req',
    new Blob([JSON.stringify(req)], { type: 'application/json' }),
  );

  for (let key of formData.keys()) {
    console.log(key, ':', formData.get(key));
  }

  const response = await formDataApi.post('/api/feeds', formData);
  return response;
};

export { onSubmitHandler, onSignUpSubmitHandler, onSubmitNewPost };
