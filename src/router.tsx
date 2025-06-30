import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import LoginPage from '@/pages/LoginPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
    </>,
  ),
);
