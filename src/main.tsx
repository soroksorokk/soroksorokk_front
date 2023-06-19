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
import Login from './router/Login';
import ErrorPage from './router/ErrorPage';
import App from './App';
import Header from './components/mainPage/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login/:id',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile/:id',
    element: <div>okok</div>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Header />
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
);
