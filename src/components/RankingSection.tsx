/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdFace2, MdFace, MdFace6 } from "react-icons/md";
import { mockItems } from '../data/mockItems';

const genderTabs = [
  { label: '전체', icon: <FaUser /> },
  { label: '여성이', icon: <MdFace2 /> },
  { label: '남성이', icon: <MdFace /> },
  { label: '청소년이', icon: <MdFace6 /> },
];

const giftTabs = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const RankingSection = () => {
  const theme = useTheme();
  const [gender, setGender] = useState('전체');
  const [giftType, setGiftType] = useState('받고 싶어한');
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? mockItems : mockItems.slice(0, 6);

  const toggleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <section css={sectionWrapper}>      
      <h2 css={css`margin-bottom: 12px;`}>실시간 급상승 선물랭킹</h2>
      <div css={tabRow}>
        {genderTabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setGender(label)}
            css={tabButton(theme, gender === label)}
          >
            <span css={iconStyle}>{icon}</span>
            {label}
          </button>
        ))}
      </div>

      <div css={subTabRow}>
        {giftTabs.map((label) => (
          <button
            key={label}
            onClick={() => setGiftType(label)}
            css={subTabButton(theme, giftType === label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div css={cardGrid}>
        {visibleItems.map((item, i) => (
          <div key={item.id} css={card}>
            <div css={rankBadge(theme, i + 1)}>{i + 1}</div>
            <img src={item.imageURL} alt={item.name} css={image} />
            <p css={brand}>{item.brand}</p>
            <p css={name}>{item.name}</p>
            <p css={price}>{item.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>

      <button onClick={toggleExpanded} css={moreButton(theme)}>
        {isExpanded ? '접기' : '더보기'}
      </button>
    </section>
  );
};

const sectionWrapper = css`
  margin-top: 40px;
`;

const tabRow = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 16px;
`;

const tabButton = (theme: any, active: boolean) => css`
  width: 100%;
  padding: 10px 0;
  font-size: ${theme.typography.body2Regular.fontSize};
  font-weight: ${theme.typography.body2Bold.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray700};
  background-color: ${active ? theme.color.blue.blue100 : theme.color.gray.gray100};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

const iconStyle = css`
  font-size: 14px;
`;

const subTabRow = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: #f7f8f9;
  border-radius: 12px;
  padding: 6px;
  margin-bottom: 24px;
`;

const subTabButton = (theme: any, active: boolean) => css`
  background: ${active ? '#fff' : 'transparent'};
  border: none;
  font-size: ${theme.typography.body1Bold.fontSize};
  font-weight: ${theme.typography.body1Bold.fontWeight};
  color: ${active ? theme.color.blue.blue700 : theme.color.gray.gray600};
  border-radius: 10px;
  padding: 8px 0;
  cursor: pointer;
  width: 100%;
`;

const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const card = css`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  text-align: center;
`;

const rankBadge = (theme: any, rank: number) => css`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color:
    ${rank === 1 || rank === 2 || rank === 3
      ? theme.color.red.red700
      : theme.color.gray.gray600};
  color: #fff;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const image = css`
  width: 100%;
  border-radius: 8px;
`;

const brand = css`
  font-size: 12px;
  margin-top: 8px;
  color: #666;
`;

const name = css`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
`;

const price = css`
  font-size: 14px;
  font-weight: 700;
  margin-top: 4px;
`;

const moreButton = (theme: any) => css`
  margin-top: 24px;
  display: block;
  padding: 10px 20px;
  background: ${theme.color.gray.gray100};
  color: ${theme.color.gray.gray900};
  border-radius: 8px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
`;

export default RankingSection;