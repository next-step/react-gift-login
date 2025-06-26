import styled from '@emotion/styled';
import PlusIcon from '@/assets/add.svg?react';

const Container = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 96%;
  height: 70px;
  margin-top: ${({ theme }) => theme.spacing.spacing4};
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
  border-radius: 15px;
  background-color: white;
`;

const PlusBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 60%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.yellow600};
  border-radius: 15px;
  margin-left: ${({ theme }) => theme.spacing.spacing4};
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.title2Bold};
  color: black;
  margin-left: ${({ theme }) => theme.spacing.spacing4};
`;

export const SelectFriend = () => {
  return (
    <Container>
      <PlusBtn>
        <PlusIcon fill="black" />
      </PlusBtn>
      <Text>선물할 친구를 선택해 주세요.</Text>
    </Container>
  );
};
