import img from 'assets/react.svg'
import GlobalStyles from '@/styles/GlobalStyles'
import { ThemeProvider } from '@emotion/react'
import { theme } from './styles/theme/index';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <img src={img} alt="React logo" />
      <h1>Hello Vite + React!</h1>
    </ThemeProvider>
  );
}

export default App
