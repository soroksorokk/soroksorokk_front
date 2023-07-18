import MainLayout from '../UI/MainLayout';
import MainPageBox from '../UI/MainPostListBox';
import Subtitle from '../UI/Subtitle';
import TextEditor from '../components/editor/TextEditor';
import Header from '../components/mainPage/Header';
import { getTodayDate } from '../utils/utils';

const NewPostPage = () => {
  const dayText = getTodayDate();

  return (
    <>
      <Header />
      <MainLayout>
        <MainPageBox>
          <Subtitle
            leftText={'작성중...'}
            rightText={`${dayText.month}, ${dayText.day} ${dayText.year}`}
          />
          <TextEditor />
        </MainPageBox>
      </MainLayout>
    </>
  );
};

export default NewPostPage;
