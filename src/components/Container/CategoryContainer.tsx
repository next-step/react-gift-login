import Category from '@/components/Category';
import { CategoryContainerStyle } from '@/styles/Category/CategoryContainer.styles';
import { useState } from 'react';

type CategoryType = '받고 싶어한' | '많이 선물한' | '위시로 받은';
const CATEGORY_TYPE = {
  받고싶어한: '받고 싶어한',
  많이선물한: '많이 선물한',
  위시로받은: '위시로 받은',
} as const;

function CategoryContainer() {
  const [selectCategory, setSelectCategory] = useState<CategoryType>(CATEGORY_TYPE.받고싶어한);
  function handleCategoryClick(category: CategoryType) {
    setSelectCategory(category);
  }
  return (
    <CategoryContainerStyle>
      <Category
        onClick={() => handleCategoryClick(CATEGORY_TYPE.받고싶어한)}
        category="받고 싶어한"
        selectedCategory={selectCategory}
      />
      <Category
        onClick={() => handleCategoryClick(CATEGORY_TYPE.많이선물한)}
        category="많이 선물한"
        selectedCategory={selectCategory}
      />
      <Category
        onClick={() => handleCategoryClick(CATEGORY_TYPE.위시로받은)}
        category="위시로 받은"
        selectedCategory={selectCategory}
      />
    </CategoryContainerStyle>
  );
}

export default CategoryContainer;
