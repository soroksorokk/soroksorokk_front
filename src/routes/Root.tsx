import Header from '../components/MainPage/Header';
import MainLayout from '../UI/MainLayout';
import { Outlet } from 'react-router-dom';
import GlobalModal from '../components/Modal/GlobalModal';
import MainPostListBox from '../UI/MainPostListBox';

const Root = () => {
  return (
    <>
      <GlobalModal />
      <Header />
      <MainLayout>
        <MainPostListBox>
          <Outlet />
        </MainPostListBox>
      </MainLayout>
    </>
  );
};

export default Root;
