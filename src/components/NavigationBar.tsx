import styled from '@emotion/styled';
import { IoIosArrowBack } from 'react-icons/io';
import { LuUserRound } from 'react-icons/lu';

const NavigationBar = () => {
  return (
    <Layout>
      <IoIosArrowBack size={25} />
      <Container>선물하기</Container>
      <LuUserRound size={25} />
    </Layout>
  );
};

export default NavigationBar;
const Layout = styled.div`
  box-sizing: border-box;
  position: fixed;
  padding: 0 8px 0 8px;
  top: 0;
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.gray00};
`;

const Container = styled.div`
  font-size: ${({ theme }) => theme.typography.title1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.title2Bold.fontWeight};
`;
