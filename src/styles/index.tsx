import { baseStyles } from "@/styles/base";
import { fontStyles } from "@/styles/font";
import { resetStyles } from "@/styles/reset";

import { css } from "@emotion/react";
import { Global } from "@emotion/react";

export const GlobalStyles = () => {
    return (
        <Global
            styles={css`
                ${baseStyles}
                ${resetStyles}
                ${fontStyles}
            `}
        />
    );
};
