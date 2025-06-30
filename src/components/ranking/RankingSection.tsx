/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import type { Theme } from "@emotion/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { rankingList } from "@/mock/rankingList";

type GroupKey = "ALL" | "FEMALE" | "MALE" | "TEEN";
type ActionKey = "WANT" | "GIVE" | "WISH";

const GROUP_PARAM = "group";
const ACTION_PARAM = "action";

const groupOptions = [
  { key: "ALL", label: "전체", icon: "ALL" },
  { key: "FEMALE", label: "여성이", icon: "👩🏻" },
  { key: "MALE", label: "남성이", icon: "👨🏻" },
  { key: "TEEN", label: "청소년이", icon: "👦🏻" },
] as const;

const actionOptions = [
  { key: "WANT", label: "받고 싶어한" },
  { key: "GIVE", label: "많이 선물한" },
  { key: "WISH", label: "위시로 받은" },
] as const;

export const RankingSection = () => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedGroup =
    (searchParams.get(GROUP_PARAM) as GroupKey) ?? "ALL";
  const selectedAction =
    (searchParams.get(ACTION_PARAM) as ActionKey) ?? "WANT";

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(key, value);
    setSearchParams(newParams);
  };

  return (
    <section css={section(theme)}>
      <h3 css={title(theme)}>실시간 급상승 선물랭킹</h3>

      <div css={filterContainer(theme)}>
        <div css={groupFilterContainer(theme)}>
          {groupOptions.map(({ key, label, icon }) => (
            <button
              key={key}
              css={groupButton}
              onClick={() => updateParam(GROUP_PARAM, key)}
            >
              <div css={groupIcon(theme, selectedGroup === key)}>{icon}</div>
              <p css={groupText(theme, selectedGroup === key)}>{label}</p>
            </button>
          ))}
        </div>

        <div css={actionFilter(theme)}>
          {actionOptions.map(({ key, label }) => (
            <button
              key={key}
              css={actionButton(theme, selectedAction === key)}
              onClick={() => updateParam(ACTION_PARAM, key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div css={grid(theme)}>
        {(isExpanded ? rankingList : rankingList.slice(0, 6)).map((item, idx) => (
          <div key={item.id} css={itemStyle}>
            <span css={rankBadge(theme, idx + 1)}>{idx + 1}</span>
            <img css={itemImg(theme)} src={item.imageURL} alt={item.name} />
            <p css={brandName(theme)}>{item.brandInfo.name}</p>
            <h6 css={productName(theme)}>{item.name}</h6>
            <p css={priceStyle(theme)}>
              {item.price.sellingPrice.toLocaleString()} <span>원</span>
            </p>
          </div>
        ))}
      </div>

      <button css={moreButton(theme)} onClick={() => setIsExpanded((prev) => !prev)}>
        <p>{isExpanded ? "접기" : "더보기"}</p>
      </button>
    </section>
  );
};


const section = (theme: Theme) => css`
  padding: ${theme.spacing.spacing4};
  background-color: white;
`;

const title = (theme: Theme) => css`
  ${theme.typography.title1Bold}
  color: ${theme.colors.textDefault};
  margin-bottom: ${theme.spacing.spacing4};
`;

const filterContainer = (theme: Theme) => css`
  margin-bottom: ${theme.spacing.spacing4};
`;

const groupFilterContainer = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.spacing3};
`;

const groupButton = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
`;

const groupIcon = (theme: Theme, isSelected: boolean) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-bottom: ${theme.spacing.spacing1};
  border-radius: 17px;
  ${theme.typography.label1Bold}
  background-color: ${isSelected ? theme.colors.blue700 : theme.colors.blue100};
  color: ${isSelected ? theme.colors.blue200 : theme.colors.blue400};
`;

const groupText = (theme: Theme, isSelected: boolean) => css`
  ${isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
  color: ${isSelected ? theme.colors.blue700 : theme.colors.gray700};
`;

const actionFilter = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  padding: ${theme.spacing.spacing4};
  background-color: ${theme.colors.blue100};
  border-radius: 10px;
`;

const actionButton = (theme: Theme, isSelected: boolean) => css`
  cursor: pointer;
  color: ${isSelected ? theme.colors.blue700 : theme.colors.gray700};
  ${isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
`;

const grid = (theme: Theme) => css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${theme.spacing.spacing2};
  margin-bottom: ${theme.spacing.spacing4};
`;

const itemStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
`;

const rankBadge = (theme: Theme, rank: number) => css`
  position: absolute;
  top: ${theme.spacing.spacing1};
  left: ${theme.spacing.spacing1};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: ${rank <= 3 ? theme.colors.red600 : theme.colors.gray600};
  color: white;
  ${theme.typography.label2Bold}
`;

const itemImg = (theme: Theme) => css`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  margin-bottom: ${theme.spacing.spacing2};
  object-fit: cover;
`;

const brandName = (theme: Theme) => css`
  ${theme.typography.label2Regular}
  color: ${theme.colors.gray700};
  margin-bottom: ${theme.spacing.spacing1};
`;

const productName = (theme: Theme) => css`
  ${theme.typography.body2Bold}
  color: ${theme.colors.textDefault};
  margin-bottom: ${theme.spacing.spacing2};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const priceStyle = (theme: Theme) => css`
  ${theme.typography.body2Bold}
  color: ${theme.colors.textDefault};
`;

const moreButton = (theme: Theme) => css`
  width: 100%;
  padding: ${theme.spacing.spacing3};
  border: 1px solid ${theme.colors.gray300};
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  ${theme.typography.body1Regular}
  color: ${theme.colors.textDefault};
`;
