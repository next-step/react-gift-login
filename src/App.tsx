import { Global } from '@emotion/react';
import reset from "@/styles/reset";
import Layout from "@/layout/Layout"
import NavigationBar from "@/components/NavigationBar"

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Layout>
        <NavigationBar/>
      </Layout>
    </>
  );
}

export default App;
