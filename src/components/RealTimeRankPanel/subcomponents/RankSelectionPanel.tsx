import styled from "@emotion/styled";
import { rank, type rankType } from "../enumerators";
import theme from "@src/styles/kakaoTheme";
import { useState } from "react";

function RankSelectionPanel() {
  const [selected, setSelected] = useState<rankType>(rank.MANY_WISH);

  return (
    <RankSelectionPanelWrapper>
      {Object.entries(rank).map(([key, r]) => {
        return (
          <RankButton
            key={key}
            selected={selected === r}
            onClick={() => {
              setSelected(r);
              console.log(`&rankType=${r.query}`);
            }}
          >
            {r.label}
          </RankButton>
        );
      })}
    </RankSelectionPanelWrapper>
  );
}

const RankButton = styled.button<{ selected: boolean }>`
  height: 50px;
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 15px;
  font-weight: bold;
  color: ${({ selected }) =>
    selected ? theme.colors.blue.blue600 : theme.colors.blue.blue300};
`;

const RankSelectionPanelWrapper = styled.div`
  width: 92.5%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.blue.blue100};
  border: 2px solid ${theme.colors.blue.blue200};
  border-radius: 10px;
`;

export default RankSelectionPanel;
