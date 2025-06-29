/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import NavigationBar from '@/components/common/NavigationBar';
import CategorySection from '@/components/home/CategorySection'; // ✅ 추가

function App() {
  const theme = useTheme();

  return (
    <div
      css={css`
        max-width: 720px;
        margin: 0 auto;
        background-color: ${theme.backgroundColors.default};
        min-height: 100vh;
      `}
    >
      <NavigationBar />
      <CategorySection /> 
    </div>
  );
}

export default App;
