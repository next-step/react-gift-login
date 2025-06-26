/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { FiArrowLeft, FiUser } from 'react-icons/fi';

const NavBar = () => {
  return (
    <nav css={navStyle}>
      <FiArrowLeft size={24} color="#000" />
      <h1 css={titleStyle}>선물하기</h1>
      <FiUser size={24} color="#000"/>
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

const titleStyle = css`
  font-size: 18px;
  font-weight: 600;
  color: #000;
`;
