import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Main from './routes/Main';
import NewPostPage from './routes/NewPostPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RecoilRoot,
} from 'recoil';

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: '/newPost/:postId',
          element: <NewPostPage />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
