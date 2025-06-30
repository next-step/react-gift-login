/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

type TargetGroupFilter = '전체' | '여성이' | '남성이' | '청소년이';
type PreferenceFilter = '받고 싶어한' | '많이 선물한' | '위시로 받은';

import { useState } from 'react';
import SelectableButton from '../common/SelectableButton';

const TARGET_GROUP_OPTIONS: { icon: string; label: TargetGroupFilter }[] = [
  { icon: 'ALL', label: '전체' },
  { icon: '💁‍♀️', label: '여성이' },
  { icon: '🙋‍♂️', label: '남성이' },
  { icon: '🧒', label: '청소년이' },
];

const PREFERENCE_OPTIONS: PreferenceFilter[] = [
  '받고 싶어한',
  '많이 선물한',
  '위시로 받은',
];

export default function FilterButtons() {
  const [selected, setSelected] = useState<TargetGroupFilter>(() => {
    return (
      (localStorage.getItem('selectedTargetGroup') as TargetGroupFilter) ||
      '전체'
    );
  });
  const [subSelected, setSubSelected] = useState<PreferenceFilter>(() => {
    return (
      (localStorage.getItem('selectedPreference') as PreferenceFilter) ||
      '받고 싶어한'
    );
  });

  return (
    <>
      <Container>
        {TARGET_GROUP_OPTIONS.map(({ icon, label }) => (
          <SelectableButton
            key={label}
            icon={icon}
            label={label}
            isActive={selected === label}
            onClick={() => {
              setSelected(label);
              localStorage.setItem('selectedTargetGroup', label);
            }}
            direction="vertical"
          />
        ))}
      </Container>
      <SubContainer>
        {PREFERENCE_OPTIONS.map((label) => (
          <SelectableButton
            key={label}
            label={label}
            isActive={subSelected === label}
            onClick={() => {
              setSubSelected(label);
              localStorage.setItem('selectedPreference', label);
            }}
          />
        ))}
      </SubContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

const SubContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue200};
  width: 90%;
  margin-top: 12px;
  gap: 8px;
  border-radius: 25px;
  margin-bottom: 16px;
`;
