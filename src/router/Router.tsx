import LoginPage from "@src/pages/LoginPage";
import Mainpage from "@src/pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
