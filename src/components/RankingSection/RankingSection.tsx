/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import RankingHeader from './RankingHeader';
import RankingFilterTabs from './RankingFilterTabs';
import RankingGrid from './RankingGrid';

const sectionStyle = css`
  margin-top: 32px;
`;

export default function RankingSection() {
  return (
    <section css={sectionStyle}>
      <RankingHeader />
      <RankingFilterTabs />
      <RankingGrid/>
    </section>
  );
}