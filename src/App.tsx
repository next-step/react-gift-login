import React from 'react'
import styled from '@emotion/styled'
import TestComponent from '@/components/TestComponent'
import { Button, SecondaryButton } from '@/components/StyledButton'

const AppContainer = styled.div`
  text-align: center;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  font-family: 'Pretendard', sans-serif;
`

const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Pretendard', sans-serif;
`

const Description = styled.p`
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-family: 'Pretendard', sans-serif;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

function App() {
  return (
    <AppContainer>
      <Title>React Gift Login</Title>
      <Description>Welcome to the gift login application!</Description>
      <TestComponent />
      <ButtonContainer>
        <Button>Primary Button</Button>
        <SecondaryButton>Secondary Button</SecondaryButton>
      </ButtonContainer>
    </AppContainer>
  )
}

export default App
