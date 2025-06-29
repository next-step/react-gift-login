import styled from '@emotion/styled';

interface RankingSortProps {
  selectedSort: string;
  onSelect: (label: string) => void;
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

const RankingSort = ({ selectedSort, onSelect }: RankingSortProps) => {
  const labels = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <SortWrapper>
      {labels.map(label => (
        <SortButton
          key={label}
          isActive={selectedSort === label}
          onClick={() => onSelect(label)}
        >
          {label}
        </SortButton>
      ))}
    </SortWrapper>
  );
};

export default RankingSort;
