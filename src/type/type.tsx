import React from 'react';

// type

export type isCategoryShowProps = {
  isCategoryShow: boolean;
  setIsCategoryShow: React.Dispatch<React.SetStateAction<boolean>>;
  categoryEmojis?: {
    feel: CategoryEmoji;
    desc: string;
  };
  setCategoryEmojis?: React.Dispatch<
    React.SetStateAction<{
      feel: CategoryEmoji;
      desc: string;
    }>
  >;
};

// interface

export interface ChildrenProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export interface ButtonProps extends ChildrenProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  passwordCheck: string;
  nickName: string;
}

// enum

export enum CategoryEmoji {
  angry = '😠',
  happy = '🥰',
  sad = '😭',
  calm = '😌',
  delight = '🤩',
  depressed = '🥺',
}
