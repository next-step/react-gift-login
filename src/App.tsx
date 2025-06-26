import './App.css';
import PresentTheme from '@/components/PresentTheme';
import Present from '@components/Present';
import SelectFriend from './components/SelectFriend';
import styled from '@emotion/styled';

const StyledTopestDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.gray400};
`;

function App() {
  return (
    <>
      <StyledTopestDiv>
        <SelectFriend></SelectFriend>
        <PresentTheme></PresentTheme>
        <Present></Present>
      </StyledTopestDiv>
    </>
  );
}
export default App;
