import { useRef, useState } from 'react';
import Button from '../../UI/Button';
import { useMutation } from '@tanstack/react-query';
import { postComment } from '../../api/reactQueryApis';
import { useParams } from 'react-router-dom';

const CommentInput = () => {
  const today = new Date().toDateString().slice(4, -4);
  const [comment, setComment] = useState('');
  const commentRef = useRef<HTMLTextAreaElement>(null);
  const params = useParams();

  const commentMutation = useMutation(postComment, {
    onError: (error) => {
      console.log('error', error);
    },
    onSuccess: (response) => {
      console.log('res', response);
      console.log('성공');
      setComment('');
    },
  });
  const handlePostClcik = () => {
    commentMutation.mutate({ comment, params });
  };
  return (
    <div className=" border-b border-[#dcdcdc] py-6">
      <div className="flex flex-row items-center">
        <img
          src="/assets/soondoo.jpeg"
          className=" h-[2.875rem] w-[2.875rem] rounded-full border object-cover"
        />
        <div className=" flex w-[100%] flex-row items-center justify-between">
          <p className=" mx-2 text-2xl font-semibold">닉네임</p>
          <p className=" text-[#6f6f6f]">{today}</p>
        </div>
      </div>
      <textarea
        placeholder="댓글을 작성해 보세요."
        className=" my-[.875rem] h-[7.5rem] w-[100%] rounded-lg border px-[.875rem] py-[.625rem] "
        value={comment}
        onChange={(event) => setComment(event.target.value)}
        ref={commentRef}
      />
      <div className="flex flex-row justify-end">
        <Button className={'btn-small bg-beige text-[#FC5555]'}>
          작성취소
        </Button>
        <Button onClick={handlePostClcik} className={'btn-small'}>
          댓글등록
        </Button>
      </div>
    </div>
  );
};

export default CommentInput;
