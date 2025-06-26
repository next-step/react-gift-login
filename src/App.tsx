import { RouterProvider } from "react-router-dom";

import { browserRouter } from "@/Router";
import { theme } from "@/app/theme";
import { ThemeProvider } from "@emotion/react";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={browserRouter} />
        </ThemeProvider>
    );
}
