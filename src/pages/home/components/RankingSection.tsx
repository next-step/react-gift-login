import { css } from "@emotion/react";
import { useState } from "react";
import { RankingFilter } from "./RankingFilter";
import { RankingTab } from "./RankingTab";
import { RankingGrid } from "./RankingGrid";
import {
  type GenderType,
  RANKING_TABS,
  type TabType,
} from "../../../constants/ranking";

export const RankingSection = () => {
  const [gender, setGender] = useState<GenderType>("ALL");
  const [tab, setTab] = useState<TabType>(RANKING_TABS[0]);

  return (
    <section css={sectionStyle}>
      <h2 css={titleStyle}>실시간 급상승 선물랭킹</h2>
      <RankingFilter selected={gender} onChange={setGender} />
      <RankingTab selected={tab} onChange={setTab} />
      <RankingGrid gender={gender} tab={tab} />
    </section>
  );
};

const sectionStyle = css`
  padding: 24px 16px;
`;

const titleStyle = css`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;
