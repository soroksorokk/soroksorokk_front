import MainLayout from '../UI/MainLayout';
import MainPageBox from '../UI/MainPostListBox';
import Subtitle from '../UI/Subtitle';
import TextEditor from '../components/editor/TextEditor';

const NewPostPage = () => {
  const date = new Date();

  const todayDate = {
    year: date.getFullYear(),
    day: date.getDate(),
    month: date.toLocaleString('en-US', { month: 'short' }),
  };

  const { year, day, month } = todayDate;
  console.log(todayDate);

  return (
    <>
      <MainLayout>
        <MainPageBox>
          <Subtitle
            leftText={'작성중...'}
            rightText={`${month}, ${day} ${year}`}
          />
          <TextEditor />
        </MainPageBox>
      </MainLayout>
    </>
  );
};

export default NewPostPage;
