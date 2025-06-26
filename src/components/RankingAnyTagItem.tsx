import styled from '@emotion/styled';

const anyTagItemlist = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const StyledRankingAnyTagItem = styled.div`
  width: 300px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.blue200};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const RankingAnyTagItem = () => {
  return (
    <>
      {anyTagItemlist.map((item: string) => {
        return (
          <StyledRankingAnyTagItem key={item} className='ranking-any-tag-item'>
            <p>{item.toLocaleLowerCase()}</p>
          </StyledRankingAnyTagItem>
        );
      })}
    </>
  );
};

export default RankingAnyTagItem;
