import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import GlobalModal from './components/Modal/GlobalModal';
import ErrorPage from './router/ErrorPage';
import NewPostPage from './router/NewPostPage';
import App from './App';
import Header from './components/mainPage/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/newPost/:postId',
    element: <NewPostPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalModal />
      <Header />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
