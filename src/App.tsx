import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 16px;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>{/*Header, Category, ProductList 등 컴포넌트 배치*/}</Container>
  );
}

export default App;
