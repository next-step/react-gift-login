import styled from '@emotion/styled'
import TestComponent from '@/components/TestComponent'
import { Button, SecondaryButton } from '@/components/StyledButton'

const AppContainer = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.spacing8};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.semanticColors.background.fill};
  font-family: 'Pretendard', sans-serif;
  max-width: 720px; /* Mobile First Design */
  margin: 0 auto;
`

const Title = styled.h1`
  color: ${props => props.theme.semanticColors.text.default};
  margin-bottom: ${props => props.theme.spacing.spacing4};
  font-size: ${props => props.theme.typography.title1Bold.fontSize};
  font-weight: ${props => props.theme.typography.title1Bold.fontWeight};
  line-height: ${props => props.theme.typography.title1Bold.lineHeight};
  font-family: 'Pretendard', sans-serif;
`

const Description = styled.p`
  color: ${props => props.theme.semanticColors.text.sub};
  font-size: ${props => props.theme.typography.body1Regular.fontSize};
  font-weight: ${props => props.theme.typography.body1Regular.fontWeight};
  line-height: ${props => props.theme.typography.body1Regular.lineHeight};
  margin-bottom: ${props => props.theme.spacing.spacing8};
  font-family: 'Pretendard', sans-serif;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.spacing4};
  margin-top: ${props => props.theme.spacing.spacing8};
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
