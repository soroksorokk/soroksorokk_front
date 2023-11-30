import { ReactComponent as GitHubLoginIcon } from '../../assets/githubIcon.svg';

const GithubLogin = () => {
  const handleGihhubLogtin = () => {
    console.log('허허허');
  };

  return (
    <GitHubLoginIcon
      width={40}
      height={40}
      fill="#D9D9D9"
      className="cursor-pointer hover:fill-purple"
      onClick={handleGihhubLogtin}
    />
  );
};

export default GithubLogin;
