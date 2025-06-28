/** @jsxImportSource @emotion/react */
import { css, useTheme, type Theme as ThemeType } from '@emotion/react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <div css={backgroundStyle(theme)}>
      <div css={cardStyle(theme)}>
        <h1 css={logoStyle}>kakao</h1>
        <input type="text" placeholder="이메일" css={inputStyle(theme)} />
        <input type="password" placeholder="비밀번호" css={inputStyle(theme)} />
        <button onClick={handleLogin} css={loginButtonStyle(theme)}>
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

const backgroundStyle = (theme: ThemeType) => css`
  background-color: ${theme.color.semantic.backgroundDefault};
  min-height: 100vh;
`;

const cardStyle = (theme: ThemeType) => css`
  max-width: 450px;
  margin: 48px auto;
  background-color: ${theme.color.semantic.backgroundDefault};
  padding: 180px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.03);
`;

const logoStyle = css`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

const inputStyle = (theme: ThemeType) => css`
  padding: 12px 16px;
  border: none;
  border-bottom: 1px solid ${theme.color.gray.gray400};
  background-color: transparent;
  font-size: 14px;
  &::placeholder {
    color: ${theme.color.semantic.textPlaceholder};
  }
  &:focus {
    outline: none;
    border-bottom: 1px solid ${theme.color.gray.gray600};
  }
`;

const loginButtonStyle = (theme: ThemeType) => css`
  margin-top: 16px;
  padding: 12px;
  background-color: ${theme.color.yellow.yellow600};
  border: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
`;
