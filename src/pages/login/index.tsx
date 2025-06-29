import { css, useTheme } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <div css={wrapperCss}>
      <h1 css={titleCss(theme)}>kakao</h1>

      <form css={formCss} onSubmit={(e) => e.preventDefault()}>
        <label css={labelCss(theme)}></label>
        <input css={inputCss(theme)} placeholder="이메일" />

        <label css={labelCss(theme)}></label>
        <input css={inputCss(theme)} type="password" placeholder="비밀번호" />

        <button css={buttonCss(theme)} onClick={handleLogin}>
          로그인
        </button>
      </form>
    </div>
  );
}

const wrapperCss = css`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px 80px;
  box-sizing: border-box;
`;

const titleCss = (theme: any) => css`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 48px;
  color: ${theme.colors.semantic.text.default};
`;

const formCss = css`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const labelCss = (theme: any) => css`
  font-size: 0.875rem;
  color: ${theme.colors.semantic.text.placeholder};
`;

const inputCss = (theme: any) => css`
  border: none;
  border-bottom: 1px solid ${theme.colors.semantic.border.default};
  padding: 12px 0;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: ${theme.colors.semantic.text.placeholder};
  }
`;

const buttonCss = (theme: any) => css`
  width: 100%;
  background-color: ${theme.colors.brand.kakao.yellow};
  color: ${theme.colors.brand.kakao.brown};
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-weight: 700;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.brand.kakao.yellowHover};
  }

  &:active {
    background-color: ${theme.colors.brand.kakao.yellowActive};
  }
`;
