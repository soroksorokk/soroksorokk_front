import { useRouteError } from 'react-router-dom';
import { ReactComponent as Error } from '../assets/error-icon.svg';
import MainPageBox from '../UI/MainPostListBox';
interface ErrorType {
  data: string;
  status: number;
  statusText: string;
}
const ErrorPage = (): JSX.Element => {
  const error = useRouteError() as ErrorType;
  return (
    <MainPageBox>
      <div className="flex w-full flex-col items-center justify-center">
        <div>
          <Error width={150} height={150} stroke="#eb3734" />
        </div>
        <p className="text-2xl">{error.status}</p>
        <p className="text-xl">{error.statusText}</p>
        <p className="py-3 text-lg">관리자에게 문의해주세요</p>
        <p>{error.data}</p>
      </div>
    </MainPageBox>
  );
};

export default ErrorPage;
