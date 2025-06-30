import { css } from '@emotion/react';
import type { Theme } from '@/theme';
import useCustomTheme from './useCustomTheme';
import { useNavigate } from 'react-router-dom'; 
const container = (theme:Theme)=>css`
    max-width: 720px;
    height: 50px;
    background: ${theme.colors.semantic.backgroundDefault};
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin: 0 auto;
    padding: 0 16px;
  `;

  const navstyle = (theme:Theme)=>css`
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
    line-height: ${theme.typography.title1Bold.lineHeight};
    color: ${theme.colors.semantic.textDefault};
  `;

  const per = css`
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6aLBdZ-dWr4tVuP38je4WW2WVGphxmiINHA&s');
    background-size: contain;
    background-position: center;
    `


  const pre = css`
    cursor: pointer;
  `;

  const preStyle = css`
    width: 40px;
    height: 40px;
    color: black;
    font-size: 25px;
  `;

const Navibar = () => {
  const theme = useCustomTheme();
  const navigate=useNavigate();
  return (
    <div css={container(theme)}>
      <div css={pre} onClick={()=>navigate(-1)}>
        <div css={preStyle}>&lt;</div>
      </div>

      <nav css={navstyle(theme)}>선물하기</nav>

      <div css={per} onClick={()=>navigate('/homepage/login')}></div>
    </div>
  );
};

export default Navibar;
