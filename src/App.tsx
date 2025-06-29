/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import NavigationBar from '@/components/common/NavigationBar';
import CategorySection from '@/components/home/CategorySection';
import FriendSelectSection from './components/home/FriendSelectSection';
import BannerSection from './components/home/BannerSection';

function App() {
  const theme = useTheme();

  return (
    <div
      css={css`
        background-color: ${theme.colors.gray100};
        min-height: 100vh;
      `}
    >
      <div
        css={css`
          max-width: 720px;
          margin: 0 auto;
          background-color: ${theme.colors.gray00};
          min-height: 100vh;
        `}
      >
        <NavigationBar />
        <FriendSelectSection />
        <CategorySection />
        <BannerSection />
      </div>
    </div>
  );
}

export default App;
