import styled from '@emotion/styled';
import BackArrow from '@/assets/chevron_left.svg?react';
import User from '@/assets/user.svg?react';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4%;
  background-color: white;
`;

const Text = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  color: black;
`;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Header = () => {
  const svgSize = 30;
  // rem 단위 사용 필요??

  return (
    <Container>
      <Btn>
        <BackArrow width={svgSize} height={svgSize} fill="black" style={{ marginLeft: '10px' }} />
      </Btn>
      <Btn>
        <Text>선물하기</Text>
      </Btn>
      <Btn>
        <User width={svgSize} height={svgSize} fill="black" style={{ marginRight: '10px' }} />
      </Btn>
    </Container>
  );
};
