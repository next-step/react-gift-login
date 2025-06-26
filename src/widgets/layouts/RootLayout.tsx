import { Outlet } from "react-router-dom";

import * as Styles from "./RootLayout.styled";
import { NavTop } from "@/widgets/layouts/NavTop";

export const RootLayout = () => {
    return (
        <Styles.Container>
            <NavTop />
            <Outlet />
        </Styles.Container>
    );
};
