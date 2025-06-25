import styled from '@emotion/styled';

const StyledDiv = styled.div`
  background-color: #fee500;
  color: #2a3038;
  padding: 16px;
  border-radius: 8px;
  margin: 8px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.375rem;
`;

export const ThemeExample = () => {
  return (
    <div>
      <StyledDiv>
        카카오 노란색 배경에 디자인 토큰이 적용된 예시입니다!
      </StyledDiv>
      <div
        style={{
          color: '#b0b3ba',
          fontSize: '0.875rem',
          margin: '8px',
        }}
      >
        useTheme 훅으로 직접 스타일을 적용한 예시입니다.
      </div>
    </div>
  );
};
