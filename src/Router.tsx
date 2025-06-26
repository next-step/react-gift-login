import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import SignInPage from "@/pages/auth/SignInPage";

import { RootLayout } from "@/widgets/layouts";

const router = createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/auth">
            <Route path="signin" element={<SignInPage />} />
        </Route>
    </Route>,
);

export const browserRouter = createBrowserRouter(router);
