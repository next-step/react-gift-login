import { BrowserRouter, Routes, Route } from 'react-router';
import { GiftPage } from '@/pages/GiftPage';
import { Login } from '@/pages/Login';
import { NotFound } from '@/pages/NotFound';
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiftPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
