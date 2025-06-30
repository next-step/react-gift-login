import { SexContainerWrapperItem } from '@/styles/Sex/SexItemStyle.styles';

type SexType = {
  sex: string;
  selectSex: string;
  onClick: () => void;
};

function SexItem({ sex, selectSex, onClick }: SexType) {
  const selected = sex === selectSex;
  return (
    <SexContainerWrapperItem selected={selected} onClick={onClick}>
      {sex}
    </SexContainerWrapperItem>
  );
}

export default SexItem;
