/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { MdFace2, MdFace, MdFace6 } from 'react-icons/md';
import { mockItems } from '../../data/mockItems';

import {
  sectionWrapper,
  tabRow,
  tabButton,
  iconStyle,
  subTabRow,
  subTabButton,
  cardGrid,
  card,
  rankBadge,
  image,
  brand,
  name,
  price,
  moreButton,
} from './RankingSection.style';

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

export default RankingSection;