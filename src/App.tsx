import { Global } from '@emotion/react';
import './App.css';
import { reset } from './styles/reset';

function App() {
  return (
    <>
      <Global styles={reset} />
      <div>홈 화면입니다</div>
    </>
  );
}

export default App;
