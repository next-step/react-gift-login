import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { RankingFilter } from "./RankingFilter";
import { RankingTab } from "./RankingTab";
import { RankingGrid } from "./RankingGrid";
import {
  type GenderType,
  RANKING_TABS,
  type TabType,
} from "../../../constants/ranking";

const GENDER_KEY = "ranking_gender";
const TAB_KEY = "ranking_tab";

export const RankingSection = () => {
  const [gender, setGender] = useState<GenderType>(() => {
    return (localStorage.getItem(GENDER_KEY) as GenderType) || "ALL";
  });

  const [tab, setTab] = useState<TabType>(() => {
    return (localStorage.getItem(TAB_KEY) as TabType) || RANKING_TABS[0];
  });

  useEffect(() => {
    localStorage.setItem(GENDER_KEY, gender);
  }, [gender]);

  useEffect(() => {
    localStorage.setItem(TAB_KEY, tab);
  }, [tab]);

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
