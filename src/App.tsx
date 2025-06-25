import { globalStyles } from './styles/GlobalStyle'
import { Global } from '@emotion/react'

function App() {

  return (
    <>
      <Global styles={globalStyles} />
      <div>
        project init
      </div>
    </>

  )
}

export default App
