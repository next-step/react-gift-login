import { GlobalResetStyle } from "@styles/reset";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={GlobalResetStyle} />
      <div>카카오 테크 캠퍼스 2단계 미션 1</div>
    </>
  );
}

export default App;
