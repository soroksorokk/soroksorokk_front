import React from 'react';
import MainLayout from '../UI/MainLayout';
import MainPageBox from '../UI/MainPostListBox';
import { ChildrenProps } from '../type/type';
const NewPostPage = ({ children }: ChildrenProps) => {
  return (
    <>
      <MainLayout>
        <MainPageBox>
          {children}여기다가 글쓰기페이지 작업하심 될듯용
        </MainPageBox>
      </MainLayout>
    </>
  );
};

export default NewPostPage;
