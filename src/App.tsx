import Background, {Inner} from '@src/components/Background'
import Title from '@src/components/Title'
import Banner from '@src/components/Banner'
import Maintheme from '@src/components/Maintheme'
import Realtime from './components/Realtime'
function App() {
  return (
    <>
      <Background>
        <Inner>
          <header>
            <Title />
          </header>
          <main>
            <Banner />
            <Maintheme />
            <Realtime />
          </main>
        </Inner>
      </Background>
    </>
  )
}

export default App
