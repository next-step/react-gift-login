import type { ThemeType } from "@/types/ThemeType";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import RankingList from "@/components/RankingList";
import type { RankingCategoryTargetType } from "@/types/RankingCategoryTargetType";
import { rankingCategoryTarget } from "@/assets/rankingCategoryTarget";

const rankingCategoryTargetList: RankingCategoryTargetType[] = rankingCategoryTarget;
const rankingCategoryRankList = {
  MANY_WISH: "받고 싶어한",
  MANY_RECEIVE: "많이 선물한",
  MANY_WISH_RECEIVE: "위시로 받은",
} as const;

const Ranking = () => {
  const [category, setCategory] = useState(0);
  const [wishCategory, setWishCategory] = useState(0);
  const theme = useTheme();
  return (
    <Container>
      <Title>실시간 급상승 선물랭킹</Title>
      <NavBar>
        <CategoryList>
          {rankingCategoryTargetList.map((e, index) => (
            <Category
              key={index}
              onClick={() => {
                setCategory(index);
              }}
            >
              <CategoryImg selected={category == index ? true : false} theme={theme}>
                {e.image}
              </CategoryImg>
              <CategoryName selected={category == index ? true : false} theme={theme}>
                {e.name}
              </CategoryName>
            </Category>
          ))}
        </CategoryList>
        <WishCategoryList>
          {Object.entries(rankingCategoryRankList).map((e, index) => (
            <WishCategory
              key={index}
              selected={wishCategory == index ? true : false}
              theme={theme}
              onClick={() => {
                setWishCategory(index);
              }}
            >
              {e}
            </WishCategory>
          ))}
        </WishCategoryList>
      </NavBar>
      <RankingList />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.spacing4};
  background-color: ${({ theme }) => theme.color.backgroundColor.default};
`;
const Title = styled.h3`
  font: ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;
const NavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const CategoryList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.spacing5};
`;
const Category = styled.button`
  width: 3.625rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.spacing1};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
type SelectedAndTheme = {
  selected: boolean;
  theme: ThemeType;
};
const CategoryImg = styled.div<SelectedAndTheme>`
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${(props) => (props.selected ? props.theme.color.blue600 : props.theme.color.blue200)};
  color: ${(props) => (props.selected ? props.theme.color.gray00 : props.theme.color.gray500)};
  font-weight: bold;
`;
const CategoryName = styled.p<SelectedAndTheme>`
  font: ${({ theme }) => theme.typography.label1Bold};
  color: ${(props) => (props.selected ? props.theme.color.blue600 : props.theme.color.gray500)};
`;
const WishCategoryList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.blue200};
  border: 1px solid ${({ theme }) => theme.color.blue300};
  border-radius: 15px;
  padding: 12px 16px;
  margin-bottom: 20px;
`;
const WishCategory = styled.button<SelectedAndTheme>`
  width: 100%;
  font: ${(props) => (props.selected ? props.theme.typography.label1Bold : props.theme.typography.label1Regular)};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.selected ? props.theme.color.blue600 : props.theme.color.blue400)};
  cursor: pointer;
`;

export default Ranking;
