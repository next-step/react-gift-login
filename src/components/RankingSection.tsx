/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { rankingItems, genderItems, actionItems } from '../data/ranking';

export const RankingSection = () => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedGender, setSelectedGender] = useState('ALL');
  const [selectedAction, setSelectedAction] = useState('받고 싶어한');
  
  const sectionStyle = css`
    padding: ${theme.spacing.spacing4};
    background-color: white;
  `;

  const titleStyle = css`
    ${theme.typography.title1Bold}
    color: ${theme.semantic.text.default};
    margin-bottom: ${theme.spacing.spacing4};
  `;

  const genderFilterStyle = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacing.spacing3};
  `;

  const actionFilterStyle = css`
    display: flex;
    justify-content: space-around;
    padding: ${theme.spacing.spacing4};
    background-color: ${theme.colors.blue[100]};
    border-radius: 10px;
  `;

  const actionButtonStyle = (isSelected: boolean) => css`
    ${baseButtonStyle}
    margin: 0;
    text-align: left;
    ${isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
    color: ${isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
  `;

  const genderButtonStyle = css`
    ${baseButtonStyle}
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const genderIconContainerStyle = (isSelected: boolean) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    margin-bottom: ${theme.spacing.spacing1};
    ${theme.typography.label1Bold}
    background-color: ${isSelected ? theme.colors.blue[700] : theme.colors.blue[100]};
    border-radius: 15px;
    color: ${isSelected ? theme.colors.blue[200] : theme.colors.blue[400]};
  `;

  const genderTextStyle = (isSelected: boolean) => css`
    margin: 0;
    text-align: left;
    ${isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
    color: ${isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
  `;

  const gridStyle = css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${theme.spacing.spacing2};
    row-gap: ${theme.spacing.spacing7};
    margin-bottom: ${theme.spacing.spacing4};
  `;

  const rankBadgeStyle = (rank: number) => css`
    position: absolute;
    top: ${theme.spacing.spacing1};
    left: ${theme.spacing.spacing1};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background-color: ${rank <= 3 ? theme.colors.red[600] : theme.colors.gray[600]};
    border-radius: 4px;
    ${theme.typography.label2Bold}
    color: white;
    z-index: 1;
  `;

  const itemImageStyle = css`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 8px;
    margin-bottom: ${theme.spacing.spacing2};
    object-fit: cover;
  `;

  const brandNameStyle = css`
    ${theme.typography.label1Regular}
    color: ${theme.colors.gray[700]};
    margin-bottom: ${theme.spacing.spacing1};
  `;

  // 공통 텍스트 스타일
  const productTextStyle = css`
    ${theme.typography.body2Regular}
    margin: 0;
    text-align: left;
  `;

  const priceStyle = css`
    ${theme.typography.title2Bold}
    color: ${theme.semantic.text.default};
    margin: 0;
    text-align: left;
    word-break: break-word;
  `;

  const productNameStyle = css`
    ${productTextStyle}
    margin-bottom: ${theme.spacing.spacing2};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  const moreButtonStyle = css`
    width: 70%;
    padding: ${theme.spacing.spacing3};
    border: 1px solid ${theme.colors.gray[400]};
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
    ${theme.typography.body2Regular}
    color: ${theme.semantic.text.default};
    display: block;
    margin: ${theme.spacing.spacing10} auto ${theme.spacing.spacing8};
  `;

  return (
    <section css={sectionStyle}>
      <h3 css={titleStyle}>실시간 급상승 선물랭킹</h3>
      
      <div css={css`margin-bottom: ${theme.spacing.spacing4};`}>
        <div css={genderFilterStyle}>
          {genderItems.map(option => (
            <button key={option.key} css={genderButtonStyle} onClick={() => setSelectedGender(option.key)}>
              <div css={genderIconContainerStyle(selectedGender === option.key)}>{option.icon}</div>
              <p css={genderTextStyle(selectedGender === option.key)}>{option.label}</p>
            </button>
          ))}
        </div>
        
        <div css={actionFilterStyle}>
          {actionItems.map(action => (
            <button key={action} css={actionButtonStyle(selectedAction === action)} onClick={() => setSelectedAction(action)}>
              {action}
            </button>
          ))}
        </div>
      </div>

      <div css={gridStyle}>
        {(isExpanded ? rankingItems : rankingItems.slice(0, 6)).map((item, index) => (
          <div key={`${item.id}-${index}`} css={itemStyle}>
            <span css={rankBadgeStyle(index + 1)}>{index + 1}</span>
            <img css={itemImageStyle} src={item.imageURL} alt={item.name} />
            <p css={brandNameStyle}>{item.brandInfo.name}</p>
            <h6 css={productNameStyle}>{item.name}</h6>
            <p css={priceStyle}>{item.price.sellingPrice.toLocaleString()} <span>원</span></p>
          </div>
        ))}
      </div>

      <button css={moreButtonStyle} onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? '접기' : '더보기'}
      </button>
    </section>
  );
};
  // theme를 사용하지 않은 스타일을 컴포넌트 외부로 옮겼습니다. 
  const baseButtonStyle = css`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  `;

  const itemStyle = css`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
  `;
