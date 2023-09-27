import Subtitle from '../UI/Subtitle';
import TextEditor from '../components/editor/TextEditor';
import { getTodayDate } from '../utils/utils';
import Copy from '../components/editor/Copy';

const NewPostPage = () => {
  const dayText = getTodayDate();

  return (
    <>
      <Subtitle
        leftText={'작성중...'}
        rightText={`${dayText.month}, ${dayText.day} ${dayText.year}`}
      />
      {/* <TextEditor /> */}
      <Copy />
    </>
  );
};

export default NewPostPage;
