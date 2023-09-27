import React from 'react';
import { FieldError } from 'react-hook-form';

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
  disabled?: FieldError | boolean | string;
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
  image?: string | null;
  content: string;
  artist: string;
  mood: string;
  music: string;
  title: string;
  tags: string[];
}

export interface feelDataType {
  feel_id: string;
  feel: CategoryEmoji;
  desc: string;
}
export interface EmojiType {
  key: string;
  onClick: (id: string) => void;
  emoji: feelDataType;
  selectValue: string;
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
  ANGRY = '😠', // 화남
  HAPPY = '🥰', // 행복
  SAD = '😭', // 슬픔
  CALM = '😌', // 평온
  EXCITED = '🤩', // 신남
  MOVED = '🥺', // 감동
}
