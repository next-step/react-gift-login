import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GiftHome from '@/pages/GiftHome';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiftHome />} />
      </Routes>
    </BrowserRouter>
  );
};
