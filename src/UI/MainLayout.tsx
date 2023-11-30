import { ChildrenProps } from '../type/type';

function MainLayout({ children }: ChildrenProps) {
  return (
    <div className="mx-auto my-0 flex h-full w-full flex-col">{children}</div>
  );
}

export default MainLayout;
