import GlobalStyle from '@/styles/global'
import {ThemeProvider} from "@emotion/react";
import theme from './styles/theme'
import Main from './page/Main';
import Navbar from './component/Navbar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>      
          <GlobalStyle />  
          <Navbar />
          <Main />
        </ThemeProvider>
      </BrowserRouter>
  )
}

export default App