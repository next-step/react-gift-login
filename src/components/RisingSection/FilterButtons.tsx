/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

type MainFilterOption = '전체' | '여성이' | '남성이' | '청소년이';
type SubFilterOption = '받고 싶어한' | '많이 선물한' | '위시로 받은';

import { useState } from 'react';

const OPTIONS: { icon: string; label: MainFilterOption }[] = [
  { icon: 'ALL', label: '전체' },
  { icon: '💁‍♀️', label: '여성이' },
  { icon: '🙋‍♂️', label: '남성이' },
  { icon: '🧒', label: '청소년이' },
];

const SUB_OPTIONS: SubFilterOption[] = [
  '받고 싶어한',
  '많이 선물한',
  '위시로 받은',
];

export default function FilterButtons() {
  const [selected, setSelected] = useState<MainFilterOption>('전체');
  const [subSelected, setSubSelected] =
    useState<SubFilterOption>('받고 싶어한');

  return (
    <>
      <Container>
        {OPTIONS.map(({ icon, label }) => (
          <Button
            key={label}
            isActive={selected === label}
            onClick={() => setSelected(label)}
          >
            <Icon>{icon}</Icon>
            <Label isActive={selected === label}>{label}</Label>
          </Button>
        ))}
      </Container>
      <SubContainer>
        {SUB_OPTIONS.map((label) => (
          <Button
            key={label}
            isActive={subSelected === label}
            onClick={() => setSubSelected(label)}
          >
            <Label isActive={subSelected === label}>{label}</Label>
          </Button>
        ))}
      </SubContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  margin-bottom: 16px;
`;

const Button = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  margin-right: 30px;
  border-radius: 20px;
  border: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue500 : theme.colors.blue200};
  cursor: pointer;
  width: 80px;
`;

const Icon = styled.div`
  font-size: 20px;
`;

const Label = styled.span<{ isActive: boolean }>`
  font-size: 12px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.textDefault : theme.colors.gray800};
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.blue200};
  width: 100%;
  margin-top: 12px;
  gap: 8px;
  border-radius: 25px;
  margin-bottom: 16px;
`;
