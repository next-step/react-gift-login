import { Global } from '@emotion/react'
import './App.css'
import { reset } from '@styles/reset'

function App() {
  return (
    <>
      <Global styles={reset}></Global>
    </>
  )
}

export default App
