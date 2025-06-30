import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GiftShop from '@/pages/GiftShop';
import Login from '@/pages/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GiftShop />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
