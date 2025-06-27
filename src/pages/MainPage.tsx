import styled from "@emotion/styled";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import SelectFriendSection from "@/sections/SelectFriendSection";
import CategorySection from "@/sections/CategorySection";
import RankingSection from "@/sections/RankingSection/RankingSection";

const Container = styled.div`
  ${({ theme }) => `
    background: ${theme.colors.kakaoYellow};
  `}
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 16px;
  border-radius: 20px;
`;
const Line1 = styled.span`
  ${({ theme }) => `
    color: ${theme.colors.gray700};
  `}
`;
const Line2 = styled.span``;

const MainPage = () => {
  return (
    <>
      <NavigationBar />
      <SelectFriendSection />
      <CategorySection />
      <Container>
        <Line1>카카오테크 캠퍼스 3기 여러분</Line1>
        <Line2>프론트엔드 2단계 과제 화이팅! 🎉</Line2>
      </Container>
      <RankingSection />
    </>
  );
};

export default MainPage;
