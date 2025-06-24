import { Global, css } from '@emotion/react';

const globalStyles = css`
  body {
    font-family: 'Pretendard', Pretendard, sans-serif;
  }
`;

function App() {
  return (
    <>
      <Global styles={[globalStyles]} />
    </>
  );
}

export default App;
