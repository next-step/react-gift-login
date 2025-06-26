import { ThemeProvider } from '@emotion/react';
import { theme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import Layout from '@/components/Layout/Layout';
import NavigationBar from '@/components/NavigationBar/NavigationBar';
import CategorySection from '@/components/CategorySection/CategorySection';
import AddFriend from '@/components/OtherSection/AddFriend';
import Fighting from '@/components/OtherSection/Fighting';
import RisingSection from '@/RisingSection/RisingSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <NavigationBar />
        <AddFriend />
        <CategorySection />
        <Fighting />
        <div></div>
        <RisingSection />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
