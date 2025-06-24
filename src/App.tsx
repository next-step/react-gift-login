import { Global, css } from '@emotion/react';
import reset from './styles/reset';

function App() {
  // ...
  return (
    <>
      <Global
        styles={css`
          ${reset}
        `}
      />
      {<div>카카오테크캠퍼스 Frontend 2단계</div>}
    </>
  );
}

export default App;
