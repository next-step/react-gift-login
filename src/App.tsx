import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from '@/GlobalStyles';
import Navibar from '@/Navibar';
import Login from '@/Login';
import NotFound from '@/NotFound';
import Homepage from '@/Homepage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navibar />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage/>}
        />
        <Route path="/homepage/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
