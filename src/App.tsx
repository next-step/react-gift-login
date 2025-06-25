import { Global } from '@emotion/react';
import './App.css';
import { reset } from './styles/reset';
import { globalStyle } from './styles/globalStyle';

function App() {
  return (
    <>
      <Global styles={reset} />
      <Global styles={globalStyle} />
      <div>홈 화면입니다</div>
    </>
  );
}

export default App;
