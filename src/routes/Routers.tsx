import GiftsPage from '@/page/GiftPage';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GiftsPage />} />
    </Routes>
  );
};

export default AppRouter;
