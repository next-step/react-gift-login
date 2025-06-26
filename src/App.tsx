<<<<<<< HEAD
/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import NavBar from './components/NavBar';
import CategorySection from './components/CategorySection';
import theme from './styles/theme';
import { categories } from './data/categories';
import FriendSelector from './components/FriendSelector';
import Banner from './components/Banner';
import RankingSection from './components/RankingSection';
=======
import { useState } from 'react'
import viteLogo from '/vite.svg'
>>>>>>> eunchae-04

function App() {
  return (
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>
        <FriendSelector />
        <CategorySection categories={categories} />
        <Banner/>
        <RankingSection/>
      </main>
    </ThemeProvider>
  );
}

export default App;
=======
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
      </div>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> eunchae-04
