/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import type { ThemeType } from '@/styles/theme';
import backIcon from '@/assets/icons/back.png';
import userIcon from '@/assets/icons/user.png';

const container = (theme: ThemeType) => css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  height: 50px;

  background-color: ${theme.color.semantic.background.default};
  border-bottom: 1px solid ${theme.color.semantic.border.default};
`;

const back = css`
  width: 24px;
  height: 24px;
  background-image: url(${backIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const title = (theme: ThemeType) => css`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.color.semantic.text.default};
`;
const user = css`
  width: 24px;
  height: 24px;
  background-image: url(${userIcon});
  background-size: contain;
  background-repeat: no-repeat;
`;

const NavigationBar = () => {
    const theme = useTheme() as ThemeType;

    return (
        <nav css={container(theme)}>
            <div css={back} />
            <div css={title(theme)}>선물하기</div>
            <div css={user} />
        </nav>
    );
};

export default NavigationBar;
