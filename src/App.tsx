import { useState } from 'react';
import viteLogo from '/vite.svg';
import GlobalStyle from './styles/GlobalStyle';  // GlobalStyle 임포트

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyle />  {/* 전역 스타일 적용 */}
      
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
