import React from 'react';

// type

export type isCategoryShowType = {
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  categoryEmoji: string;
  setCategoryEmoji: React.Dispatch<React.SetStateAction<string>>;
};

// interface

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface ButtonProps extends ChildrenProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
