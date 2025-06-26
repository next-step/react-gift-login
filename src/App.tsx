import GlobalStyle from "@/styles/global";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Header/>
        <div>초기화 APP</div>
      </Layout>
    </>
  );
}

export default App;
