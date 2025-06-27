import { Link } from "react-router-dom";

import { ChevronLeft, User } from "lucide-react";

import kakaoGiftLogo from "@/app/assets/kakao-gift-logo.png";

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
                    <img src={kakaoGiftLogo} alt="카카오 선물하기" height={44} />
                </Styles.Item>

                <Styles.Item align="right">
                    <User />
                </Styles.Item>
            </Styles.Container>
        </Styles.Wrapper>
    );
};
