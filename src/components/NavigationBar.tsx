import styled from '@emotion/styled';
import { IoIosArrowBack } from 'react-icons/io';
import { LuUserRound } from 'react-icons/lu';
import Text from '@/components/Text';

const NavigationBar = () => {
  return (
    <Layout>
      <IoIosArrowBack size={25} />
      <Text fontSize="title1Bold" fontWeight="title2Bold">
        선물하기
      </Text>

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
