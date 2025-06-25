import Background, {Inner} from '@src/components/Background'
import Title from '@src/components/Title'
import Banner from '@src/components/Banner'
import Maintheme from '@src/components/Maintheme'
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
          </main>
        </Inner>
      </Background>
    </>
  )
}

export default App
