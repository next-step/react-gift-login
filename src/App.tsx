import GlobalStyle from "@/styles/global";
import Layout from "./components/Layout";
import Header from "./components/Header";
import CategorySection from "@/sections/CategorySection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header />
        <CategorySection />
      </Layout>
    </>
  );
}

export default App;
