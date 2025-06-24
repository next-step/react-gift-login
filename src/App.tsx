import { Global } from '@emotion/react';
import reset from './styles/reset';

function App() {
  return (
    <>
      <Global styles={reset} />
    </>
  );
}

export default App;
