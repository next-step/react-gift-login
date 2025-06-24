import { Global, css } from '@emotion/react';
import resetStyles from '@/reset';

const globalStyles = css`
  body {
    font-family: 'Pretendard', Pretendard, sans-serif;
  }
`;

function App() {
  return (
    <>
      <Global styles={[resetStyles, globalStyles]} />
    </>
  );
}

export default App;
