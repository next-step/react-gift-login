import './App.css';
import PresentThemeContainer from '@components/PresentThemeContainer';
import PresentRankingContainer from '@/components/PresentRankingContainer';
import SelectFriendContainer from '@components/SelectFriendContainer';
import styled from '@emotion/styled';
import NavigationBar from './components/NavigationBar';

const StyledTopestDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.gray400};
`;
const Spacer = styled.div`
  //NavigationBar가 상단에 fixed될때 다른 컴포넌트를 가리는 문제르 해결하기 위한 공백 공간
  height: 45px;
`;
function App() {
  return (
    <>
      <StyledTopestDiv>
        <NavigationBar></NavigationBar>
        <Spacer />
        <SelectFriendContainer></SelectFriendContainer>
        <PresentThemeContainer></PresentThemeContainer>
        <PresentRankingContainer></PresentRankingContainer>
      </StyledTopestDiv>
    </>
  );
}
export default App;
