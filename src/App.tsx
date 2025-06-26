import './App.css';
import PresentThemeContainer from '@components/PresentThemeContainer';
import PresentContainer from '@components/PresentContainer';
import SelectFriendContainer from '@components/SelectFriendContainer';
import styled from '@emotion/styled';

const StyledTopestDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.gray400};
`;

function App() {
  return (
    <>
      <StyledTopestDiv>
        <SelectFriendContainer></SelectFriendContainer>
        <PresentThemeContainer></PresentThemeContainer>
        <PresentContainer></PresentContainer>
      </StyledTopestDiv>
    </>
  );
}
export default App;
