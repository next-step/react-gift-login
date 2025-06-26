import { ranking_item_mock } from "@/assets/ranking_item_mock";
import styled from "@emotion/styled";
import DividerDiv from "@/components/DividerDiv";
import { useState } from "react";
import type { ThemeType } from "@/styles/theme";
import { useTheme } from "@emotion/react";

const RankingList = () => {
  const [viewCount, setViewCount] = useState(6);
  const theme = useTheme();
  return (
    <Container>
      <Content>
        {ranking_item_mock.slice(0, viewCount).map((item, index) => (
          <Item key={index + 1}>
            <ItemRank ranking={index + 1} theme={theme}>
              {index + 1}
            </ItemRank>
            <ItemContent>
              <ItemContentImg src={item.imageURL} />
              <ItemContentBrand>{item.brandInfo.name}</ItemContentBrand>
              <ItemContentTitle>{item.name}</ItemContentTitle>
              <ItemContentPrice>
                {item.price.sellingPrice}
                <span>원</span>
              </ItemContentPrice>
            </ItemContent>
          </Item>
        ))}
      </Content>
      <DividerDiv />
      <ItemContent>
        <MoreBtn
          onClick={() => {
            viewCount == 6
              ? setViewCount(ranking_item_mock.length)
              : setViewCount(6);
          }}
        >
          {viewCount == 6 ? "더보기" : "접기"}
        </MoreBtn>
      </ItemContent>
      <DividerDiv />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`;
const Item = styled.div`
  width: 100%;
  position: relative;
`;
type RankingAndTheme = {
  ranking: number;
  theme: ThemeType;
};
const ItemRank = styled.span<RankingAndTheme>`
  position: absolute;
  z-index: 2;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0.25rem;
  left: 0.25rem;
  font: ${({ theme }) => theme.typography.label2Bold};
  color: ${({ theme }) => theme.colors.gray00};
  background-color: ${(props) =>
    props.ranking <= 3
      ? props.theme.colors.red500
      : props.theme.colors.gray700};
`;
const ItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ItemContentImg = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
`;
const ItemContentBrand = styled.p`
  font: ${({ theme }) => theme.typography.subtitle2Regular};
  color: ${({ theme }) => theme.text_color.sub};
  margin-right: auto;
`;
const ItemContentTitle = styled.h6`
  font: ${({ theme }) => theme.typography.subtitle2Bold};
  color: ${({ theme }) => theme.text_color.default};
  margin-right: auto;
  margin-bottom: 5px;
`;
const ItemContentPrice = styled.p`
  font: ${({ theme }) => theme.typography.title2Bold};
  color: ${({ theme }) => theme.text_color.default};
  margin-right: auto;
  word-break: break-word;
`;
const MoreBtn = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  background-color: ${({ theme }) => theme.colors.gray00};
  cursor: pointer;
`;

export default RankingList;
