import { useState } from 'react'
import { Global } from '@emotion/react';
import { resetStyle } from '@/styles/reset';

function App() {
  return (
    <>
      <Global styles={resetStyle} /> 
      <h1>Hello React</h1>
    </>
  )
}

export default App