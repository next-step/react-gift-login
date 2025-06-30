import { Routes, Route } from 'react-router-dom';
import App from './App'; 
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
<<<<<<< HEAD

const Root = () => {
  return (
    <Routes>
=======
import { Navbar } from './components/Navbar';
const Root = () => {
  return (
    <Routes>
      
>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Root;
