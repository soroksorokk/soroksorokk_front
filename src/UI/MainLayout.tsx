import React, { ReactNode } from 'react';
import { ChildrenProps } from '../type/type';

function MainLayout({ children }: ChildrenProps) {
  return (
    <div className="mx-auto my-0 flex h-full w-full flex-col items-center justify-center bg-beige">
      {children}
    </div>
  );
}

export default MainLayout;
