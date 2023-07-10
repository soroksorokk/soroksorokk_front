import React from 'react';
import { ChildrenProps } from '../../type/type';
import { isDetailPostOpenState } from '../../store/isDetailPostOpenState';
import { useRecoilState } from 'recoil';

const PostCardBox = ({ children }: ChildrenProps) => {
  /**
   * post card list가 담기는 컴포넌트임
   */
  const [isDetailPostOpen] = useRecoilState(isDetailPostOpenState);
  return (
    <div
      className={`mt-3 grid grid-cols-3 grid-rows-2 gap-4 px-[1.8125rem] mobile_xs:grid-cols-1 mobile_sm:grid-cols-1 ${
        isDetailPostOpen
          ? 'tablet:grid-cols-1 desktop:grid-cols-2'
          : 'tablet:grid-cols-2 desktop:grid-cols-3'
      } notebook:grid-cols-2 desktop:notebook:grid-cols-3`}
    >
      {children}
    </div>
  );
};

export default PostCardBox;
