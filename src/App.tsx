import { Global } from '@emotion/react'
import { GlobalResetStyle } from '../styles/reset'

function App() {
  return (
    <>
      <Global styles={GlobalResetStyle} />
      <div className="App">
        <h1>react-gift-login page</h1>
      </div>
    </>
  )
}

export default App
