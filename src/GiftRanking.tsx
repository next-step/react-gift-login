import { css} from '@emotion/react';
import useCustomTheme from './useCustomTheme';
import type { Theme } from '@/theme';
import { useSearchParams } from 'react-router-dom';
import Button from '@/Button';
import GiftItem from '@/GiftItem';
const tabs = ['전체', '여성이', '남성이', '청소년이'];
const subTabs = ['받고 싶어한', '많이 선물한', '위시로 받은'];

const products = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  brand: 'BBQ',
  name: 'BBQ',
  price: 29000,
  image: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
}));


const sectionStyle = (theme:Theme)=>css`
padding: ${theme.spacing.spacing5};
`;


const titleStyle= (theme:Theme)=>css`
font-size: ${theme.typography.title1Bold.fontSize};
font-weight: ${theme.typography.title1Bold.fontWeight};
margin-bottom: ${theme.spacing.spacing4};
`;

const tabsStyle= (theme:Theme)=>css`
display: flex;
gap: ${theme.spacing.spacing2};
margin-bottom: ${theme.spacing.spacing3};
`;

const subTabContainer =(theme:Theme)=> css`
display: flex;
justify-content: space-around;
margin-bottom: ${theme.spacing.spacing4};
font-size: 14px;
`;

const gridStyle = (theme:Theme)=>css`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: ${theme.spacing.spacing4};
`;


const more=(theme:Theme)=>css`
border:1px solid ${theme.colors.semantic.borderDefault};
border-radius: 10px;
display:flex;
align-items: center;
justify-content: center;
padding:5px;
`

const GiftRanking = () => {
  const theme = useCustomTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedTab = (() => {
    const genderFromSearchParams = searchParams.get('gender');
    if (genderFromSearchParams && tabs.includes(genderFromSearchParams)) {
      return genderFromSearchParams;
    }
    return '전체';
  })();

  const selectedSubTab = (() => {
    const categoryFromSearchParams = searchParams.get('category');
    if (categoryFromSearchParams && subTabs.includes(categoryFromSearchParams)) {
      return categoryFromSearchParams;
    }
    return '받고 싶어한';
  })();

  const onTabClick = (tab: string) => {
    setSearchParams({ gender: tab, category: selectedSubTab }, { replace: true });
  };
  
  const onSubTabClick = (subTab: string) => {
    setSearchParams({ gender: selectedTab, category: subTab }, { replace: true });
  };
  

  return (
    <section css={sectionStyle(theme)}>
      <h2 css={titleStyle(theme)}>실시간 급상승 선물랭킹</h2>

      <div css={tabsStyle(theme)}>
        {tabs.map((tab) => (
          <Button
          key={tab}
          selected={tab === selectedTab}
          baseColor={theme.colors.blue400}
          selectedColor={theme.colors.blue900}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </Button>
        ))}
      </div>

      <div css={subTabContainer(theme)}>
        {subTabs.map((subTab) => (
          <Button
            key={subTab}
            onClick={() => onSubTabClick(subTab)}
            selected={subTab===selectedSubTab}
            baseColor={theme.colors.blue400}
            selectedColor={theme.colors.blue900}
            transparent
          >
            {subTab}
          </Button>
        ))}
      </div>

      <div css={gridStyle(theme)}>
  {products.map((item) => (
    <GiftItem
      key={item.id}
      id={item.id}
      brand={item.brand}
      name={item.name}
      price={item.price}
      image={item.image}
      theme={theme}
    />
  ))}
</div>


      <div css={more(theme)}>더보기</div>
    </section>
  );
}; export default GiftRanking;

