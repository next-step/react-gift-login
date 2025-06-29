import { SexContainerWrapperItem } from '@/styles/Sex/SexItemStyle.styles';

function SexItem({
  sex,
  selectSex,
  onClick,
}: {
  sex: string;
  selectSex: string;
  onClick?: () => void;
}) {
  const selected = sex === selectSex;
  return (
    <SexContainerWrapperItem selected={selected} onClick={onClick}>
      {sex}
    </SexContainerWrapperItem>
  );
}

export default SexItem;
