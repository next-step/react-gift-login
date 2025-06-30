import { useNavigate, useLocation } from "react-router-dom";
import colors from "@/styles/theme/colors";
import fontSizes from "@/styles/theme/fontSizes";
import spacing from "@/styles/theme/spacing";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = () => {
    navigate(from, { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 56px)",
        padding: `0 ${spacing.spacing4}`,
      }}
    >
      <h1
        style={{
          fontSize: fontSizes.title1Bold,
          marginBottom: spacing.spacing8,
        }}
      >
        kakao
      </h1>
      <input
        type="email"
        placeholder="이메일"
        style={{
          width: "100%",
          maxWidth: "360px",
          marginBottom: spacing.spacing4,
          padding: `${spacing.spacing4} ${spacing.spacing2}`,
          border: "none",
          borderBottom: `1px solid ${colors.gray.gray300}`,
          fontSize: fontSizes.body1Regular,
        }}
      />
      <input
        type="password"
        placeholder="비밀번호"
        style={{
          width: "100%",
          maxWidth: "360px",
          marginBottom: spacing.spacing8,
          padding: `${spacing.spacing4} ${spacing.spacing2}`,
          border: "none",
          borderBottom: `1px solid ${colors.gray.gray300}`,
          fontSize: fontSizes.body1Regular,
        }}
      />
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          maxWidth: "360px",
          backgroundColor: colors.semantic.kakaoYellow,
          border: "none",
          padding: spacing.spacing4,
          fontSize: fontSizes.body1Bold,
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        로그인
      </button>
    </div>
  );
}
