import SexItem from '@/components/SexItem';
import { useState } from 'react';
import { SexContainerWrapper } from '@/styles/Sex/SexContainer.styles';

type SexType = 'All' | '남성' | '여성' | '청소년';

function SexContainer() {
  const [selectSex, setSelectsex] = useState<SexType>('All');
  function handleSelect(sex: SexType) {
    setSelectsex(sex);
  }
  return (
    <SexContainerWrapper>
      <SexItem sex="All" selectSex={selectSex} onClick={() => handleSelect('All')} />
      <SexItem sex="남성" selectSex={selectSex} onClick={() => handleSelect('남성')} />
      <SexItem sex="여성" selectSex={selectSex} onClick={() => handleSelect('여성')} />
      <SexItem sex="청소년" selectSex={selectSex} onClick={() => handleSelect('청소년')} />
    </SexContainerWrapper>
  );
}

export default SexContainer;
