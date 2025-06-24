import { Global, css } from '@emotion/react';

function App() {
  return (
    <>
      <Global
          styles={css`
            html, body, #root {
              height: 100%;
              margin: 0;
              padding: 0;
              background: #fff;
              font-family: 'Pretendard';
            }
            *, *::before, *::after {
              box-sizing: border-box;
            }
          `}
        />
      <div>
        Kakao Gift project
      </div>
    </>
  );
}

export default App;
