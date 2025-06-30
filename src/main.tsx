import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyles } from '@/styles/global';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';
import PageLayout from '@/Layout/PageLayout';
import HomePage from '@/pages/HomPage';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: '*', element : <NotFoundPage />}
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
