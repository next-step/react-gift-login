import ThemeItem from '@/components/ThemeItem';
import mockTheme from '@/mocks/mockdata.ts';

import styled from '@emotion/styled';
export const ThemeContainerWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 25px;
  background-color: white;
`;
export const ThemeTitle = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.title1Bold.fontSize};
    font-weight: ${theme.typography.title1Bold.fontWeight};
  `}
  width: 100%;
`;
export const Message = styled.div`
  ${({ theme }) => `
    font-size: ${theme.typography.subtitle1Regular.fontSize};
    font-weight: ${theme.typography.subtitle1Regular.fontWeight};
    color: ${theme.colors.sub};
  `}
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  height: 50px;
  width: 100%;
  margin-top: 20px;
  border-radius: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ThemeContainer() {
  return (
    <ThemeContainerWrapper>
      <ThemeTitle>선물 테마</ThemeTitle>
      {mockTheme.map((theme) => (
        <ThemeItem key={theme.themeId} theme={theme} />
      ))}
      <Message>응원 메시지!~!</Message>
    </ThemeContainerWrapper>
  );
}

export default ThemeContainer;
