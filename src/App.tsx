import { useState } from 'react'
import { Global } from '@emotion/react';
import { resetStyle } from '@/styles/reset';
import { MainLayout } from './components/MainLayout';

function App() {
  return (
    <>
      <Global styles={resetStyle} /> 
      <MainLayout>
        <h1>Hell React</h1>
      </MainLayout>
    </>
  )
}

export default App