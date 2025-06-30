import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import Header from '@/components/Header';
import { ROUTE_PATH } from '@/constants/routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTE_PATH.LOGIN} element={<LoginPage />} />
        <Route path={ROUTE_PATH.HOME} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
