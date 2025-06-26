import { Link } from "react-router-dom";

import { ChevronLeft, User } from "lucide-react";

import { KakaoGiftLogo } from "@/app/assets/KakaoGiftLogo";

import * as Styles from "./NavTop.styled";

export const NavTop = () => {
    return (
        <Styles.Wrapper>
            <Styles.Container>
                <Styles.Item align="left">
                    <Link to="/">
                        <ChevronLeft />
                    </Link>
                </Styles.Item>

                <Styles.Item align="center">
                    <KakaoGiftLogo height={44} />
                </Styles.Item>

                <Styles.Item align="right">
                    <User />
                </Styles.Item>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
