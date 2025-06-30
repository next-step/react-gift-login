import { useNavigate, useLocation } from "react-router-dom";
import type { Theme } from '@/theme';
import { css } from "@emotion/react";
import useCustomTheme from './useCustomTheme';
import Button from "@/Button";
interface LocationState {
  from?: {
    pathName: string;
  };
}

const logContainer = (theme: Theme) => css`
  max-width: 360px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.spacing1};
  color: ${theme.colors.semantic.textDefault};
`;

const logStyle = (theme: Theme) => css`
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${theme.colors.semantic.borderDefault};
  border-radius: 6px;
  outline: none;
  &::placeholder {
    color: ${theme.colors.gray400};
  }
`;


const Login = () => {
  const theme = useCustomTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState | null;
  const from = state?.from?.pathName ?? '/';

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <div css={logContainer(theme)}>
      <h2 style={{textAlign:"center"}}>KaKao</h2>
      <input placeholder="아이디" css={logStyle(theme)} />
      <input type="password" placeholder="비밀번호" css={logStyle(theme)} />
      <Button
       onClick={handleLogin}
       baseColor={theme.colors.semantic.kakaoYellow}
        >로그인</Button>
    </div>
  );
};

export default Login;
