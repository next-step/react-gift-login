import type { ThemeType } from "@/styles/theme";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

type TypeCategory = {
  image: string;
  name: string;
  targetType: string;
};

const categoryList: TypeCategory[] = [
  {
    image: "ALL",
    name: "전체",
    targetType: "ALL",
  },
  {
    image: "👩🏻",
    name: "여성",
    targetType: "FEMALE",
  },
  {
    image: "👨🏻",
    name: "남성",
    targetType: "MALE",
  },
  {
    image: "👦🏻",
    name: "청소년",
    targetType: "TEEN",
  },
];

const Ranking = () => {
  const [category, setCategory] = useState(0);
  const [wishCategory, setWishCategory] = useState(0);
  const theme = useTheme();
  return (
    <Container>
      <Title>실시간 급상승 선물랭킹</Title>
      <NavBar>
        <CategoryList>
          {categoryList.map((e, index) => (
            <Category
              key={index}
              onClick={() => {
                setCategory(index);
              }}
            >
              <CategoryImg
                selected={category == index ? true : false}
                theme={theme}
              >
                {e.image}
              </CategoryImg>
              <CategoryName
                selected={category == index ? true : false}
                theme={theme}
              >
                {e.name}
              </CategoryName>
            </Category>
          ))}
        </CategoryList>
        <WishCategoryList>
          {["받고 싶어한", "많이 선물한", "위시로 받은"].map((e, index) => (
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
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.background_color.default};
`;
const Title = styled.h3`
  font: ${({ theme }) => theme.typography.title1Bold};
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`;
const Category = styled.button`
  width: 3.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
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
  background-color: ${(props) =>
    props.selected ? props.theme.colors.blue600 : props.theme.colors.blue200};
  color: ${(props) =>
    props.selected ? props.theme.colors.gray00 : props.theme.colors.gray500};
  font-weight: bold;
`;
const CategoryName = styled.p<SelectedAndTheme>`
  font: ${({ theme }) => theme.typography.label1Bold};
  color: ${(props) =>
    props.selected ? props.theme.colors.blue600 : props.theme.colors.gray500};
`;
const WishCategoryList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.blue200};
  border: 1px solid ${({ theme }) => theme.colors.blue300};
  border-radius: 15px;
  padding: 12px 16px;
  margin-bottom: 20px;
`;
const WishCategory = styled.button<SelectedAndTheme>`
  width: 100%;
  font: ${(props) =>
    props.selected
      ? props.theme.typography.label1Bold
      : props.theme.typography.label1Regular};
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.selected ? props.theme.colors.blue600 : props.theme.colors.blue400};
  cursor: pointer;
`;

export default Ranking;
