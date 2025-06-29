import { Route, Routes } from 'react-router-dom';
import Home from '@src/pages/Home';
import LoginPage from '@/pages/LoginPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
