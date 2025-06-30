import StyledRankingSexTagItem from '@/styles/StyledRankingSexTagItem';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const sexTagItemlist = ['전체', '여성이', '남성이', '청소년이'];

interface SexTagBtnProps {
  isSelected: boolean;
}
const StyledRankingSexTagItemBtn = styled.button<SexTagBtnProps>`
  background-color: ${({ theme }) => theme.sementicPalette.backgroundDefault};
  border: none;
  div {
    background-color: ${({ theme, isSelected }) => (isSelected ? theme.palette.blue800 : theme.palette.blue200)};
    border-radius: 10px;
    width: 45px;
    height: 45px;
  }
  p {
    color: ${({ theme, isSelected }) => (isSelected ? theme.palette.blue800 : theme.palette.gray600)};
    ${({ theme, isSelected }) => (isSelected ? theme.typography.label1Bold : theme.typography.label1Regular)}
  }
`;

const RankingSexTagItem = () => {
  const navigate = useNavigate();

  const { search } = useLocation();
  const [selected, setSelected] = useState<string | null>('전체');

  useEffect(() => {
    const params = new URLSearchParams(search);
    const value = params.get('SexTagSelected');
    if (value) {
      setSelected(value);
    }
  }, [search]);
  const handleClick = (value: string) => {
    const params = new URLSearchParams(search);
    params.set('SexTagSelected', value);
    navigate(`?${params.toString()}`, { replace: true });
  };
  return (
    <>
      {sexTagItemlist.map((item: string) => {
        return (
          <StyledRankingSexTagItemBtn isSelected={selected === item} key={item} onClick={() => handleClick(item)}>
            <StyledRankingSexTagItem className='ranking-sex-tag-item'></StyledRankingSexTagItem>
            <p>{item.toLocaleLowerCase()}</p>
          </StyledRankingSexTagItemBtn>
        );
      })}
    </>
  );
};

export default RankingSexTagItem;
