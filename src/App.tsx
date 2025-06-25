import { Global } from '@emotion/react';
import reset from "@/styles/reset";
import Layout from "@/layout/Layout"

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Layout>
        Kakao Gift project
      </Layout>
    </>
  );
}

export default App;
