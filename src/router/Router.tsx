import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GiftHome from '@/pages/GiftHome';
import Login from '@/pages/Login';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiftHome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
