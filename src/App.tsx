import { Global } from '@emotion/react'
import { globalReset } from '@/styles/reset'

function App() {
  return (
    <>
      <Global styles={globalReset} />
      <main>
        <h1>셋팅 중입니다..</h1>
      </main>
    </>
  )
}

export default App
