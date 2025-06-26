import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import TargetSelectionPanel from "./subcomponents/TargetSelectionPanel";
import RankSelectionPanel from "./subcomponents/RankSelectionPanel";
import Card from "./subcomponents/Card";
import { productMockData } from "@src/mock/mockData";
import type { product } from "@src/mock/mockData";
import theme from "@src/styles/kakaoTheme";

function RealTimeRankPanel() {
  const [productList, setCardList] = useState<product[]>([]);
  const [productRenderList, setProductRenderList] = useState<product[]>([]);
  const [expand, setExpand] = useState<boolean>(false);

  useEffect(() => {
    for (let i = 0; i < 21; i++) {
      setCardList((prev) => [...prev, { ...productMockData }]);
    }
  }, []);

  useEffect(() => {
    setProductRenderList(expand ? productList : productList.slice(0, 6));
  }, [expand, productList]);

  return (
    <RealTimeRankPanelWrapper>
      <TitleP>실시간 급상승 선물랭킹</TitleP>
      <TargetSelectionPanel />
      <RankSelectionPanel />
      <CardPlaceHolder>
        {productRenderList.map((p, i) => {
          return <Card key={i} no={i + 1} prod={p} />;
        })}
      </CardPlaceHolder>
      {productList.length > 6 && (
        <ExpandButton
          onClick={() => {
            setExpand(!expand);
          }}
        >
          {expand ? "접기" : "더보기"}
        </ExpandButton>
      )}
    </RealTimeRankPanelWrapper>
  );
}

const TitleP = styled.p`
  width: 95%;
  font-size: 20px;
  font-weight: bold;
`;

const ExpandButton = styled.button`
  border: 2px solid ${theme.colors.gray.gray300};
  background-color: transparent;
  border-radius: 10px;
  width: 95%;
  height: 100px;
  margin-bottom: 100px;
`;

const CardPlaceHolder = styled.div`
  padding: 20px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const RealTimeRankPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: white;
`;

export default RealTimeRankPanel;
