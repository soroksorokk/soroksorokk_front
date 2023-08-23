
import { getTodayDate } from '../../utils/utils';
import { ReactComponent as PostBtn } from '../../assets/writeBtn.svg';
import { useRecoilState } from 'recoil';
import { isDetailPostOpenState } from '../../store/isDetailPostOpenState';
import { isNewPostState } from '../../store/isNewPostState';
import { useNavigate } from 'react-router-dom';
// import isLoggedInState from '../../store/isLoggedInState';
import useLoggedIn from '../../hook/useLoggedIn';
import useModal from '../../hook/useModal';

const PostListHeader = () => {
  /**
   * util에 있는 현재 시간을 리턴하는 함수를 import 해옴
   */
  const currentDate = getTodayDate();

  const [isDetailPostOpen, setIsDetailPostOpen] = useRecoilState(
    isDetailPostOpenState,
  );
  const [isNewPost, setIsNewPost] = useRecoilState(isNewPostState);
  const { showModal } = useModal();
  const isLoggedIn = useLoggedIn();
  const navigate = useNavigate();

  /**
   * 글쓰기 버튼을 누르면 isNewPost가 true가 됨
   * 만약 포스트카드가 눌려 디테일 포스트가 보인다면(true인 상태)
   * false로 만들어주어 디테일 포스트를 닫히게 함
   */
  const handleNewPostClick = () => {
    if (isLoggedIn) {
      setIsNewPost(false);
      setIsDetailPostOpen(false);
      navigate('newPost/:postId');
    } else {
      setIsDetailPostOpen(false);
      setIsNewPost(false);
      showModal({
        modalType: 'LoginModal',
        modalProps: {
          title: '로그인',
          confirmText: '로그인',
        },
      });
    }
  };

  return (
    <>
      <div className="mb-5 flex justify-end tablet:hidden notebook:hidden desktop:hidden">
        <span>{`${currentDate.day} ${currentDate.month} ${currentDate.year}`}</span>
      </div>
      <div className="mt-1 flex w-full items-center justify-between">
        <h1 className="mobile_xs:text-2xl mobile_sm:text-2xl">오늘의 음악</h1>
        <div className="flex items-center justify-between text-lg font-semibold">
          <div className="px-4 ">
            <span className="mobile_xs:hidden mobile_sm:hidden">
              {`${currentDate.day} ${currentDate.month} ${currentDate.year}`}
            </span>
          </div>
          <PostBtn
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={handleNewPostClick}
          />
        </div>
      </div>
    </>
  );
};

export default PostListHeader;
