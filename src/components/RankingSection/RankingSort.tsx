import styled from '@emotion/styled';

const RankingSort = ({ selectedSort, onSelect }: RankingSortProps) => {
  const options = [
    { label: '받고 싶어한', value: 'MANY_WISH' },
    { label: '많이 선물한', value: 'MANY_RECEIVE' },
    { label: '위시로 받은', value: 'MANY_WISH_RECEIVE' },
  ];

  return (
    <SortWrapper>
      {options.map(({ label, value }) => (
        <SortButton
          key={value}
          isActive={selectedSort === value}
          onClick={() => onSelect(value)}
        >
          {label}
        </SortButton>
      ))}
    </SortWrapper>
  );
};

export default RankingSort;

interface RankingSortProps {
  selectedSort: string;
  onSelect: (value: string) => void;
}

const SortWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: ${({ theme }) => theme.color.blue[100]};
  border-radius: 0.5rem;
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;

const SortButton = styled.button<{ isActive: boolean }>`
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme, isActive }) =>
    isActive
      ? theme.typography.subtitle.subtitle2Bold
      : theme.typography.subtitle.subtitle2Regular};
  color: ${({ theme, isActive }) =>
    isActive ? theme.color.blue[600] : theme.color.blue[400]};
  background-color: ${({ theme }) => theme.color.blue[100]};
  border: none;
  cursor: pointer;
  border-radius: 8px;
  transition: 200ms;
`;
