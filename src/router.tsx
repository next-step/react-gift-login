import { Header } from "@/components/main";
import { LoginPage, MainPage, NotFoundPage } from "@/pages";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
