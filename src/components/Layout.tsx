import styled from '@emotion/styled'
import type { ReactNode } from 'react'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  
  & > .inner {
    width: 100%;
    max-width: 720px;
    padding: 0 16px; 
    box-sizing: border-box;
  }
`

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
  <Wrapper>
    <div className="inner">{children}</div>
  </Wrapper>
  )
}
