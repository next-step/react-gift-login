import { Global } from '@emotion/react';

import { reset } from './styles/reset';

const App = () => {
  return (
    <>
      <Global styles={reset}></Global>
    </>
  );
};

export default App;
