import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentList = () => {
  return (
    <div className="flex w-[27.75rem] flex-col border-b border-[#dcdcdc] bg-white py-4">
      <CommentInput />
      <Comment />
    </div>
  );
};

export default CommentList;
