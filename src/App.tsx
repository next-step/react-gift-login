import { Global } from '@emotion/react';
import reset from "@/styles/reset";
import Layout from "@/layout/Layout"
import NavigationBar from "@/components/NavigationBar"
import CategorySection from "@/components/CategorySection"

function App() {
  return (
    <>
      <Global styles={reset}/>
      <Layout>
        <NavigationBar/>
        <CategorySection/>
      </Layout>
    </>
  );
}

export default App;
