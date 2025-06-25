import { GlobalResetStyle } from "@styles/reset";
import { GlobalTypographyStyle } from "@styles/typography";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <Global styles={GlobalResetStyle} />
      <Global styles={GlobalTypographyStyle} />
      <div>카카오 테크 캠퍼스 2단계 미션 1</div>
    </>
  );
}

export default App;
