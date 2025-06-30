import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <button
        style={{ marginTop: "2rem", padding: "0.5rem 1rem" }}
        onClick={() => navigate("/")}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}
