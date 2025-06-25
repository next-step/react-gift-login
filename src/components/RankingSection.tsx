/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import { rankingItems } from '../data/ranking';

const RankingSection = () => {
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

  const filterContainerStyle = css`
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
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    margin: 0;
    text-align: left;
    ${isSelected ? theme.typography.label1Bold : theme.typography.label1Regular}
    color: ${isSelected ? theme.colors.blue[700] : theme.colors.gray[700]};
  `;

  const genderButtonStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
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
    gap: ${theme.spacing.spacing2};
    margin-bottom: ${theme.spacing.spacing4};
  `;

  const itemStyle = css`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    position: relative;
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
    ${theme.typography.label2Regular}
    color: ${theme.colors.gray[700]};
    margin-bottom: ${theme.spacing.spacing1};
  `;

  const productNameStyle = css`
    ${theme.typography.body2Bold}
    color: ${theme.semantic.text.default};
    margin-bottom: ${theme.spacing.spacing2};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `;

  const priceStyle = css`
    ${theme.typography.body2Bold}
    color: ${theme.semantic.text.default};
  `;

  const moreButtonStyle = css`
    width: 100%;
    padding: ${theme.spacing.spacing3};
    border: 1px solid ${theme.colors.gray[300]};
    border-radius: 8px;
    background-color: white;
    cursor: pointer;
    ${theme.typography.body1Regular}
    color: ${theme.semantic.text.default};
  `;

  return (
    <section css={sectionStyle}>
      <h3 css={titleStyle}>실시간 급상승 선물랭킹</h3>
      
      <div css={filterContainerStyle}>
        <div css={genderFilterStyle}>
          <button css={genderButtonStyle} onClick={() => setSelectedGender('ALL')}>
            <div css={genderIconContainerStyle(selectedGender === 'ALL')}>ALL</div>
            <p css={genderTextStyle(selectedGender === 'ALL')}>전체</p>
          </button>
          <button css={genderButtonStyle} onClick={() => setSelectedGender('여성이')}>
            <div css={genderIconContainerStyle(selectedGender === '여성이')}>👩🏻</div>
            <p css={genderTextStyle(selectedGender === '여성이')}>여성이</p>
          </button>
          <button css={genderButtonStyle} onClick={() => setSelectedGender('남성이')}>
            <div css={genderIconContainerStyle(selectedGender === '남성이')}>👨🏻</div>
            <p css={genderTextStyle(selectedGender === '남성이')}>남성이</p>
          </button>
          <button css={genderButtonStyle} onClick={() => setSelectedGender('청소년이')}>
            <div css={genderIconContainerStyle(selectedGender === '청소년이')}>👦🏻</div>
            <p css={genderTextStyle(selectedGender === '청소년이')}>청소년이</p>
          </button>
        </div>
        
        <div css={actionFilterStyle}>
          <button css={actionButtonStyle(selectedAction === '받고 싶어한')} onClick={() => setSelectedAction('받고 싶어한')}>
            받고 싶어한
          </button>
          <button css={actionButtonStyle(selectedAction === '많이 선물한')} onClick={() => setSelectedAction('많이 선물한')}>
            많이 선물한
          </button>
          <button css={actionButtonStyle(selectedAction === '위시로 받은')} onClick={() => setSelectedAction('위시로 받은')}>
            위시로 받은
          </button>
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
        <p>{isExpanded ? '접기' : '더보기'}</p>
      </button>
    </section>
  );
};

export default RankingSection; 