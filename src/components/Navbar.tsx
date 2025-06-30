/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export function Navbar() {
  return (
    <NavBar>
      {/* 뒤로가기 */}
      <IconButton aria-label="Back">
        <Icon className="material-icons-outlined">arrow_back_ios</Icon>
      </IconButton>

      {/* 가운데 타이틀 */}
      <Title>선물하기</Title>

      {/* 로그인 (현재) */}
      <IconButton right aria-label="My page">
        {/* TODO : 로그인 아이콘 변경해야함 */}
        <Icon className="material-icons-outlined">person</Icon>
      </IconButton>
    </NavBar>
  );
}

/* Styled Components */

// 네비게이션 컨테이너 (상단 고정 + 가운데 정렬)
const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  width: 100%;
  max-width: 720px; /* 모바일 퍼스트, 태블릿 제한 */
  margin: 0 auto;

  height: 56px;
  background-color: ${({ theme }) => theme.semanticColors.background.default};

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 아이콘 버튼 – 좌/우 위치만 prop으로 분기
const IconButton = styled.button<{ right?: boolean }>`
  height: 100%;
  aspect-ratio: 1 / 1; /* 정사각형 터치 영역 */
  border: none;
  background: none;
  cursor: pointer;

  position: absolute;
  top: 0;
  ${({ right, theme }) =>
    right
      ? css`
          right: ${theme.spacing.spacing4};
        `
      : css`
          left: ${theme.spacing.spacing4};
        `}

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.semanticColors.text.default};
`;

// Material Icons 스타일
const Icon = styled.span`
  font-family: 'Material Icons Outlined';
  font-size: ${({ theme }) => theme.typography.title.title1Regular.fontSize};
  line-height: 1;
`;

// 가운데 타이틀
const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.title.title2Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title.title2Bold.fontWeight};
  line-height: ${({ theme }) => theme.typography.title.title2Bold.lineHeight};
  color: ${({ theme }) => theme.semanticColors.text.default};
`;
