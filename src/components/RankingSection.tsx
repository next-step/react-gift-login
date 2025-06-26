/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import { useState } from 'react';
import { mockProducts } from '@/data/products';

const RankingSection = () => {
  const theme = useTheme();
  const [visibleCount, setVisibleCount] = useState(6);
  const isExpanded = visibleCount === mockProducts.length;

  const [selectedFilter, setSelectedFilter] = useState('전체');
  const [selectedSort, setSelectedSort] = useState('받고 싶어한');

  const toggleVisibleCount = () => {
    setVisibleCount(isExpanded ? 6 : mockProducts.length);
  };

  const sectionStyle = css`
    padding: ${theme.spacing[0]} ${theme.spacing[4]};
    margin-bottom: ${theme.spacing[5]};
  `;

  const titleStyle = css`
    ${theme.typography.title.title1Bold};
    margin-bottom: ${theme.spacing[4]};
  `;

  const filterGroupStyle = css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing[2]};
    margin-bottom: ${theme.spacing[4]};
  `;

  const filterButtonStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${theme.spacing[2]};
    margin-bottom: ${theme.spacing[2]};
    border: none;
    background-color: ${theme.color.semantic.background.default};
    cursor: pointer;
  `;

  const emojiStyle = (isSelected: boolean) => css`
    background: ${isSelected ? theme.color.blue[700] : theme.color.blue[200]};
    border: none;
    border-radius: 16px;
    margin-bottom: 4px;
    width: 2.75rem;
    height: 2.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${isSelected ? theme.color.gray[0] : theme.color.blue[400]};
    ${theme.typography.subtitle.subtitle2Bold};
  `;

  const labelStyle = (isSelected: boolean) => css`
    color: ${isSelected
      ? theme.color.blue[700]
      : theme.color.semantic.text.sub};
    ${isSelected
      ? theme.typography.subtitle.subtitle2Bold
      : theme.typography.subtitle.subtitle2Regular};
    margin: 0px;
    text-align: left;
  `;

  const sortGroupStyle = css`
    display: flex;
    justify-content: center;
    border: 1px solid rgba(70, 132, 233, 0.1);
    background-color: ${theme.color.blue[100]};
    border-radius: 0.5rem;
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    margin-bottom: ${theme.spacing[4]};
  `;

  const sortButtonStyle = (isActive: boolean) => css`
    flex: 1 1 0%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${isActive
      ? theme.typography.subtitle.subtitle2Bold
      : theme.typography.subtitle.subtitle2Regular};
    color: ${isActive ? theme.color.blue[600] : theme.color.blue[400]};
    background-color: ${theme.color.blue[100]};
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: 200ms;
  `;

  const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${theme.spacing[2]};
    row-gap: ${theme.spacing[7]};
    margin-bottom: ${theme.spacing[4]};
  `;

  const itemStyle = css`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
  `;

  const imageStyle = css`
    aspect-ratio: 1;
    border-radius: 8px;
    margin-bottom: ${theme.spacing[2]};
    object-fit: fit;
  `;

  const brandStyle = css`
    ${theme.typography.label.label1Regular}
    color: ${theme.color.gray[700]};
    margin-bottom: ${theme.spacing[1]};
  `;

  const nameStyle = css`
    ${theme.typography.body.body2Regular}
    text-align: left;
    margin-bottom: ${theme.spacing[2]};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  const priceStyle = css`
    ${theme.typography.title.title2Bold}
    color: ${theme.color.semantic.text.default};
    text-align: left;
    word-break: break-word;
  `;

  const moreButtonWrapperStyle = css`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: ${theme.spacing[5]};
  `;

  const moreButtonStyle = css`
    max-width: 30rem;
    width: 100%;
    padding: ${theme.spacing[3]};
    border-radius: 4px;
    border: 1px solid rgb(220, 222, 227);
    background-color: ${theme.color.semantic.background.default};
    cursor: pointer;
  `;

  const rankBadgeStyle = (rank: number) => css`
    position: absolute;
    top: ${theme.spacing[1]};
    left: ${theme.spacing[1]};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: ${rank <= 3
      ? theme.color.red[600]
      : theme.color.gray[600]};
    border-radius: 4px;
    ${theme.typography.label.label2Bold}
    color: ${theme.color.gray[0]};
    z-index: 1;
  `;

  return (
    <section css={sectionStyle}>
      <h3 css={titleStyle}>실시간 급상승 선물랭킹</h3>

      <div css={filterGroupStyle}>
        {[
          { emoji: 'ALL', label: '전체' },
          { emoji: '👩🏻', label: '여성이' },
          { emoji: '👨🏻', label: '남성이' },
          { emoji: '👦🏻', label: '청소년이' },
        ].map(filter => {
          const isSelected = selectedFilter === filter.label;
          return (
            <button
              key={filter.label}
              css={filterButtonStyle}
              onClick={() => setSelectedFilter(filter.label)}
            >
              <div css={emojiStyle(isSelected)}>{filter.emoji}</div>
              <p css={labelStyle(isSelected)}>{filter.label}</p>
            </button>
          );
        })}
      </div>

      <div css={sortGroupStyle}>
        {['받고 싶어한', '많이 선물한', '위시로 받은'].map(label => (
          <button
            key={label}
            css={sortButtonStyle(selectedSort === label)}
            onClick={() => setSelectedSort(label)}
          >
            {label}
          </button>
        ))}
      </div>

      <div css={gridStyle}>
        {(isExpanded ? mockProducts : mockProducts.slice(0, 6)).map(
          (item, index) => (
            <div key={`${item.id}-${index}`} css={itemStyle}>
              <span css={rankBadgeStyle(index + 1)}>{index + 1}</span>
              <img css={imageStyle} src={item.imageURL} alt={item.name} />
              <p css={brandStyle}>{item.brandInfo.name}</p>
              <h6 css={nameStyle}>{item.name}</h6>
              <p css={priceStyle}>
                {item.price.sellingPrice.toLocaleString()} <span>원</span>
              </p>
            </div>
          )
        )}
      </div>

      <div css={moreButtonWrapperStyle}>
        <button css={moreButtonStyle} onClick={toggleVisibleCount}>
          {isExpanded ? '접기' : '더보기'}
        </button>
      </div>
    </section>
  );
};

export default RankingSection;
