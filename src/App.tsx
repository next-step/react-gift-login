import Background from '@src/components/Background'
import Center from '@src/components/Center'
import Title from '@src/components/Title'
import Banner from '@src/components/Banner'
function App() {
  return (
    <>
      <Background>
        <Center>
          <header>
            <Title />
          </header>
          <main>
            <Banner />
          </main>
        </Center>
      </Background>
    </>
  )
}

export default App
