import styled from '@emotion/styled'
<<<<<<< HEAD
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
=======
import { Navbar } from './Navbar'
import type { ReactNode } from 'react'

const Wrapper = styled.div`
   max-width: 600px;  
  margin: 0 auto;     
  width: 100;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  flex: 1;
`;
>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
<<<<<<< HEAD
  <Wrapper>
    <div className="inner">{children}</div>
  </Wrapper>
  )
}
=======
    <Wrapper>
      
      <Inner>
        <Navbar/>
        {children}  {/* ✅ LoginPage나 홈 콘텐츠 */}
      </Inner>
    </Wrapper>
  )
}
export default Layout;
>>>>>>> 5b4be5d (style: 로그인 화면 구현 완료)
