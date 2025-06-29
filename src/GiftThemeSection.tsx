import { css } from '@emotion/react';
import useCustomTheme from './useCustomTheme';
import category  from '../mockdata';
import type{Theme} from '@/theme';

const wrapperStyle = (theme:Theme)=>css`
padding: ${theme.spacing.spacing5};
`;

const titleStyle =  (theme:Theme)=>css`
font-size: ${theme.typography.title2Bold.fontSize};
font-weight: ${theme.typography.title2Bold.fontWeight};
line-height: ${theme.typography.title2Bold.lineHeight};
margin-bottom: ${theme.spacing.spacing4};
`;

const gridStyle = (theme:Theme)=>css`
display: grid;
grid-template-columns: repeat(5, 1fr);
gap: ${theme.spacing.spacing4};

@media (max-width: 480px) {
  grid-template-columns: repeat(3, 1fr);
}
`;

const itemStyle = (theme:Theme)=>css`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;

span {
  font-size: ${theme.typography.label1Regular.fontSize};
  font-weight: ${theme.typography.label1Regular.fontWeight};
  line-height: ${theme.typography.label1Regular.lineHeight};
  color: ${theme.colors.semantic.textDefault};
  margin-top: ${theme.spacing.spacing2};
}

img {
  width: 56px;
  height: 56px;
  object-fit: contain;
}
`;


const GiftThemeSection=()=> {
  const theme = useCustomTheme();
  return (
    <section css={wrapperStyle(theme)}>
      <h2 css={titleStyle(theme)}>선물 테마</h2>
      <div css={gridStyle(theme)}>
        {category.map((item) => (
          <div key={item.themeId} css={itemStyle(theme)}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}; export default GiftThemeSection;
