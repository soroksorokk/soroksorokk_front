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

export interface editorDataType {
  file?: string | null;
  artist?: string;
  song?: string;
  feel?: [];
  title?: string;
  tag?: [];
  content?: string;
}

export interface feelDataType {
  feel_id: number;
  feel: CategoryEmoji;
  desc: string;
}
export interface EmojiType {
  key: number;
  onClick: (id: number) => void;
  emoji: feelDataType;
  selectValue: number;
}

// enum

export enum CategoryEmoji {
  angry = '😠', // 화남
  happy = '🥰', // 행복
  sad = '😭', // 슬픔
  calm = '😌', // 평온
  exciting = '🤩', // 신남
  depressed = '🥺', // 감동
}
