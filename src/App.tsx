/** @jsxImportSource @emotion/react */
import { Global, ThemeProvider, css } from '@emotion/react';
import { reset } from './styles/reset';
import { theme } from './styles/theme';
import { FriendSelect } from './components/FriendSelect';
import { Header } from './components/Header';

const containerStyle = css`
  max-width: 720px;
  margin: 0 auto;
  padding: 16px;
  background-color: ${theme.colors.backgroundDefault};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={reset} />
      <div css={containerStyle}>
        <Header />
        <FriendSelect />
      </div>
    </ThemeProvider>
  );
};

export default App;
