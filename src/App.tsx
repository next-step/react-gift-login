import { Global, css } from '@emotion/react';
import { useTheme } from '@emotion/react';

import { globalStyle } from '@/styles/globalStyle';
import reset from '@/styles/reset';
import Nav from '@/components/nav';
import CategorySection from '@/components/categorySection';
import MessageSection from '@/components/messageSection';
import GiftRecipientList from '@/components/giftRecipientList';
import TrendRanking from '@/components/trendRanking';

function App() {
  const theme = useTheme();

  return (
    <>
      <Global
        styles={css`
          ${reset};
          ${globalStyle(theme)};
        `}
      />
      <Nav />
      <GiftRecipientList />
      <CategorySection />
      <MessageSection />
      <TrendRanking />
    </>
  );
}

export default App;
