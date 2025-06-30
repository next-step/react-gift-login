import { useNavigate, useLocation } from 'react-router-dom';

type LocationState = {
  from?: {
    pathname: string;
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default LoginPage;
