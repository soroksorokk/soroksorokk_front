import React from 'react';

// type

export type isCategoryShowProps = {
  toggleOn: boolean;
  setToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
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
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface RegisterProps {
  image: File | null;
  email: string;
  emailCheck?: boolean | string;
  password: string;
  passwordCheck: string;
  nickName: string;
  nickNameCheck?: boolean | string;
  option1?: boolean;
  option2?: boolean;
}

export interface EditorDataType {
  file?: string | null;
  artist?: string;
  song?: string;
  feel?: [];
  title?: string;
  tags: string[];
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

export interface ToggleWidth {
  basic: string;
  small: string;
}

export interface ToggleCircleMove {
  basic: string;
  short: string;
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
