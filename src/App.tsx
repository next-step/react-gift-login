import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import Header from '@/components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
