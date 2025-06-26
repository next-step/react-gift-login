import React from 'react'
import styled from '@emotion/styled'
import { MobileLayout, Header, Main, Section } from '@/components/layout'
import TestComponent from '@/components/TestComponent'
import { Button, SecondaryButton } from '@/components/StyledButton'

const WelcomeContent = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.spacing6} 0;
`

const Title = styled.h1`
  color: ${props => props.theme.semanticColors.text.default};
  margin-bottom: ${props => props.theme.spacing.spacing3};
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
  margin-bottom: ${props => props.theme.spacing.spacing6};
  font-family: 'Pretendard', sans-serif;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.spacing4};
  justify-content: center;
  flex-wrap: wrap;
`

const DemoSection = styled.div`
  padding: ${props => props.theme.spacing.spacing6};
  background-color: ${props => props.theme.semanticColors.background.fill};
  border-radius: 12px;
  margin: ${props => props.theme.spacing.spacing4} 0;
  text-align: center;
`

function App() {
  return (
    <MobileLayout>
      <Header title="카카오 선물하기" />
      
      <Main>
        <Section title="환영합니다!" subtitle="Mobile First Design이 적용된 레이아웃입니다.">
          <WelcomeContent>
            <Title>React Gift Login</Title>
            <Description>카카오 선물하기 메인 페이지 구현 중...</Description>
            
            <TestComponent />
            
            <ButtonContainer>
              <Button>카카오 버튼</Button>
              <SecondaryButton>보조 버튼</SecondaryButton>
            </ButtonContainer>
          </WelcomeContent>
        </Section>

        <Section 
          title="레이아웃 테스트" 
          subtitle="다양한 섹션들이 여기에 쭉 들어갈 예정."
          spacing="lg"
        >
          <DemoSection>
            <p>Mobile First Design (최대 720px)</p>
            <p>Design Token 적용</p>
            <p>재사용 가능한 컴포넌트</p>
            <p>Sticky Header</p>
            <p>터치 친화적 인터페이스</p>
          </DemoSection>
        </Section>
      </Main>
    </MobileLayout>
  )
}

export default App
