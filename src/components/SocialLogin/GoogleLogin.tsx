import { ReactComponent as GoogleLoginIcon } from '../../assets/googleIcon.svg';

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    console.log('hihi');
  };
  return (
    <GoogleLoginIcon
      width={40}
      height={40}
      fill="#D9D9D9"
      className="cursor-pointer hover:fill-purple"
      onClick={handleGoogleLogin}
    />
  );
};

export default GoogleLogin;
