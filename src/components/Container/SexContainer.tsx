import SexItem from '@/components/SexItem';
import { useState } from 'react';

import styled from '@emotion/styled';

export const SexContainerWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

function SexContainer() {
  const [selectSex, setSelectsex] = useState<string>('All');
  function handleSelect(sex: string) {
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
