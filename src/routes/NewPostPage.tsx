import Subtitle from '../UI/Subtitle';
import { getTodayDate } from '../utils/utils';
import TextEditor from '../components/editor/TextEditor';

const NewPostPage = () => {
  const dayText = getTodayDate();
  return (
    <>
      <Subtitle
        leftText={'작성중...'}
        rightText={`${dayText.month}, ${dayText.day} ${dayText.year}`}
      />
      <TextEditor />
    </>
  );
};

export default NewPostPage;
