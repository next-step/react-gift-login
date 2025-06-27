import { Global } from "@emotion/react";
import reset from "@/styles/reset";
import Layout from "@/layout/Layout";
import MainPage from "@/pages/MainPage";

function App() {
  return (
    <>
      <Global styles={reset} />
      <Layout>
        <MainPage />
      </Layout>
    </>
  );
}

export default App;
