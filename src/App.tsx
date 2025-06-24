import { GlobalResetStyle } from './styles/reset'
import { Global } from "@emotion/react";

const App = () => {
  return (
    <>
      <Global styles={GlobalResetStyle} />
      <div>카카오테크캠퍼스 2단계</div>
    </>
  );
};

export default App;