import Header from './Header'
import styled from '@emotion/styled'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  )
}

const Content = styled.main`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
`;
