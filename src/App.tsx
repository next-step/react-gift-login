import { Global } from '@emotion/react'
import { globalStyle } from '@/styles/global'
import styled from '@emotion/styled'

// emotion test
const Button = styled.button`
  background-color: rgb(255, 244, 171);
  color: black;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgb(255, 238, 106);
  }
`

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <div>테스트 중입니다. 불필요한 코드 삭제 완료.</div>
      <div>testing..</div>
      <Button>테스트 버튼</Button>
    </>
  )
}

export default App
