import GlobalStyle from '@/styles/global'
import {ThemeProvider} from "@emotion/react";
import theme from './styles/theme'
import Main from './page/main';

function App() {
  return (
      <>
        <ThemeProvider theme={theme}>      
          <GlobalStyle />  
          <Main></Main>
          <div>테스트용 for test</div>
          <div>세상에 이런 폰트가 나오다니 천재인듯</div>
        </ThemeProvider>
      </>
  )
}

export default App