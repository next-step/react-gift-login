import { Global, css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';

import { globalStyle } from '@/styles/globalStyle';
import reset from '@/styles/reset';
import Nav from '@/components/nav';
import CategorySection from '@/components/categorySection';
import MessageSection from '@/components/messageSection';
import GiftRecipientList from '@/components/giftRecipientList';
import TrendRanking from '@/components/trendRanking';
import LoginForm from '@/Login/loginForm';

const MainPage = () => (
  <>
    <Nav />
    <GiftRecipientList />
    <CategorySection />
    <MessageSection />
    <TrendRanking />
  </>
);

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
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  );
}

export default App;
