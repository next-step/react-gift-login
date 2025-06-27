import styled from '@emotion/styled';


const PersonCategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.spacing2};
`;
const PersonBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 3.625rem;
  gap: 4px;
`;
const PersonImage = styled.div`
  ${({ theme }) => theme.typography.subtitle2Bold};
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.state.infoBackground};
  color: ${({ theme }) => theme.colors.blue.blue400};
`;
const PersonCategory = () => {
    
  return (
    <PersonCategoryWrapper>
      <PersonBtn>
        <PersonImage>ALL</PersonImage>
        <p>전체</p>
      </PersonBtn>
      <PersonBtn>
        <PersonImage>👩🏻</PersonImage>
        <p>여성이</p>
      </PersonBtn>
      <PersonBtn>
        <PersonImage>👨🏻</PersonImage>
        <p>남성이</p>
      </PersonBtn>
      <PersonBtn>
        <PersonImage>👦🏻</PersonImage>
        <p>청소년이</p>
      </PersonBtn>
    </PersonCategoryWrapper>
  );
}

export default PersonCategory
