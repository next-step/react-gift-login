import { css } from "@emotion/react";
import { FiArrowLeft, FiUser } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <nav css={navStyle}>
      <div css={leftStyle}>
        {!isHomePage && (
          <button onClick={() => navigate(-1)} css={iconButtonCss}>
            <FiArrowLeft size={24} />
          </button>
        )}
      </div>
      <div css={centerStyle}>선물하기</div>
      <div css={rightStyle}>
        <button onClick={() => navigate("/login")} css={iconButtonCss}>
          <FiUser size={24} />
        </button>
      </div>
    </nav>
  );
};

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid #dcdee3;
`;

const leftStyle = css`
  display: flex;
  align-items: center;
  width: 24px;
`;

const centerStyle = css`
  font-size: 16px;
  font-weight: 700;
`;

const rightStyle = css`
  display: flex;
  align-items: center;
`;

const iconButtonCss = css`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
