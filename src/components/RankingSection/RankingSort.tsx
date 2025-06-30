import SegmentedControl from '@/components/common/SegmentedControl';

const RankingSort = ({ selectedSort, onSelect }: RankingSortProps) => {
  const options = [
    { label: '받고 싶어한', value: 'MANY_WISH' },
    { label: '많이 선물한', value: 'MANY_RECEIVE' },
    { label: '위시로 받은', value: 'MANY_WISH_RECEIVE' },
  ];

  return (
    <SegmentedControl
      options={options}
      selectedValue={selectedSort}
      onSelect={onSelect}
    />
  );
};

export default RankingSort;

interface RankingSortProps {
  selectedSort: string;
  onSelect: (value: string) => void;
}
