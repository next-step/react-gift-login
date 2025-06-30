import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "@/App";
import LoginPage from "@/pages/LoginPage";
import NotFoundPage from "@/pages/NotFoundPage";
import Header from "@/components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element: <App /> },
      { path: "login", element: <LoginPage /> },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
