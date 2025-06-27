import styled from '@emotion/styled';

const sexTagItemlist = ['전체', '여성이', '남성이', '청소년이'];

const StyledRankingSexTagItem = styled.div`
  width: 60px;
  height: 50px;
  background-color: ${({ theme }) => theme.palette.blue100};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  ${({ theme }) => theme.typography.label1Regular}
  color: ${({ theme }) => theme.sementicPalette.textDefault};
`;

const RankingSexTagItem = () => {
  return (
    <>
      {sexTagItemlist.map((item: string) => {
        return (
          <StyledRankingSexTagItem key={item} className='ranking-sex-tag-item'>
            <p>{item.toLocaleLowerCase()}</p>
          </StyledRankingSexTagItem>
        );
      })}
    </>
  );
};

export default RankingSexTagItem;
