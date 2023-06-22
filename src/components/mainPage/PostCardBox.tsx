import React from 'react';
import { ChildrenProps } from '../../type/type';

const PostCardBox = ({ children }: ChildrenProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      {children}
    </div>
  );
};

export default PostCardBox;