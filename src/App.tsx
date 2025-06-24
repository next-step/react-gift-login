import { Global } from '@emotion/react';
import reset from "@/styles/reset";

function App() {
  return (
    <>
      <Global styles={reset}/>
      <div>
        Kakao Gift project
      </div>
    </>
  );
}

export default App;
