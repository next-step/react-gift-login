import Login from "@/pages/Login";
import Main from "@/pages/Main";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";
//TODO: createBrowserRouter 사용해보기
export const ROUTE_PATH = {
  HOME: "/",
  LOGIN: "/login",
  NOT_FOUND: "*",
};
const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <Main />,
  },
  {
    path: ROUTE_PATH.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_PATH.NOT_FOUND,
    element: <NotFound />,
  },
]);

export default router;

