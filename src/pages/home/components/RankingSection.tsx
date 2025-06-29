import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { RankingFilter } from "./RankingFilter";
import { RankingTab } from "./RankingTab";
import { RankingGrid } from "./RankingGrid";
import {
  type GenderType,
  RANKING_TABS,
  type TabType,
} from "../../../constants/ranking";
import { LOCAL_STORAGE_KEYS } from "@/constants/localStorage";

export const RankingSection = () => {
  const [gender, setGender] = useState<GenderType>(() => {
    return (
      (localStorage.getItem(LOCAL_STORAGE_KEYS.RANKING_GENDER) as GenderType) ||
      "ALL"
    );
  });

  const [tab, setTab] = useState<TabType>(() => {
    return (
      (localStorage.getItem(LOCAL_STORAGE_KEYS.RANKING_TAB) as TabType) ||
      RANKING_TABS[0]
    );
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.RANKING_GENDER, gender);
  }, [gender]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.RANKING_TAB, tab);
  }, [tab]);

  return (
    <Section>
      <Title>실시간 급상승 선물랭킹</Title>
      <RankingFilter selected={gender} onChange={setGender} />
      <RankingTab selected={tab} onChange={setTab} />
      <RankingGrid gender={gender} tab={tab} />
    </Section>
  );
};

const Section = styled.section`
  padding: 24px 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`;
