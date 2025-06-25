import styled from '@emotion/styled';
import { IoArrowBack, IoPersonOutline } from 'react-icons/io5';

const NavigationBar = () => {
    return (
        <FixedHeader>
            <Container>
                <Icon>
                    <IoArrowBack size={24} />
                </Icon>
                <Title>선물하기</Title>
                <Icon>
                    <IoPersonOutline size={24} />
                </Icon>
            </Container>
        </FixedHeader>
    );
};

export default NavigationBar;

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.gray.gray300};
  z-index: 1000;
`;

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.spacing2};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.spacing.spacing11};
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.semantic.backgroundFill};
`;

const Icon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.button`
  ${({ theme }) => `
    font: ${theme.typography.title1Bold};
  `}
`;

