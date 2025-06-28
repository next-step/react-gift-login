import { categories } from '../../data/categories';
import * as S from './CategorySection.styles';

const CategorySection = () => {
  return (
    <S.Section>
      <S.Title>선물 테마</S.Title>
      <S.Grid>
        {categories.slice(0, 15).map((category) => (
          <S.Item key={category.themeId}>
            <S.Image 
              src={category.image}
              alt={category.name}
            />
            <S.Name>{category.name}</S.Name>
          </S.Item>
        ))}
      </S.Grid>
    </S.Section>
  );
};

export default CategorySection; 