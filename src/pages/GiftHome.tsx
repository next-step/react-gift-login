import styled from '@emotion/styled';
import NavigationBar from '@/components/NavigationBar';
import SelectReceiverNotice from '@/components/SelectReceiverNotice';
import GiftCategoryList from '@/components/GiftCategoryList';
import GiftChart from '@/components/GiftChart';
const GiftHome = () => {
  return (
    <Layout>
      <Content>
        <NavigationBar />
        <SelectReceiverNotice />
        <GiftCategoryList />
        <GiftChart />
      </Content>
    </Layout>
  );
};

export default GiftHome;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 720px;
`;
