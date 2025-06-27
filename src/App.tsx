import './App.css';
import PresentThemeContainer from '@components/PresentThemeContainer';
import PresentRankingContainer from '@/components/PresentRankingContainer';
import SelectFriendContainer from '@components/SelectFriendContainer';
import styled from '@emotion/styled';
import NavigationBar from './components/NavigationBar';

const StyledTopestDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.gray400};
`;

function App() {
  return (
    <>
      <StyledTopestDiv>
        <NavigationBar></NavigationBar>
        <SelectFriendContainer></SelectFriendContainer>
        <PresentThemeContainer></PresentThemeContainer>
        <PresentRankingContainer></PresentRankingContainer>
      </StyledTopestDiv>
    </>
  );
}
export default App;
