/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FiArrowLeft, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <nav css={navStyle}>
      <button onClick={handleBack} css={iconButtonStyle}>
        <FiArrowLeft size={24} color="#000" />
      </button>
      <button onClick={handleTitleClick} css={titleButtonStyle}>
        선물하기
      </button>
      <button onClick={handleLoginClick} css={iconButtonStyle}>
        <FiUser size={24} color="#000" />
      </button>
    </nav>
  );
};

export default NavBar;

const navStyle = css`
  max-width: 720px;
  height: 56px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  background-color: #fff;
`;

const iconButtonStyle = css`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const titleButtonStyle = css`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
`;