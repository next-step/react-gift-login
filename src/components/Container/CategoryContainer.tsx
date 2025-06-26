import Category from '@/components/Category';
import { CategoryContainerStyle } from '@/styles/CategoryContainer.styles';
import { useState } from 'react';

function CategoryContainer() {
  const [selectCategory, setSelectCategory] = useState<string>('받고 싶어한');
  function handleCategoryClick(category: string) {
    setSelectCategory(category);
  }
  return (
    <CategoryContainerStyle>
      <Category
        onClick={() => handleCategoryClick('받고 싶어한')}
        category="받고 싶어한"
        selectCategory={selectCategory}
      />
      <Category
        onClick={() => handleCategoryClick('많이 선물한')}
        category="많이 선물한"
        selectCategory={selectCategory}
      />
      <Category
        onClick={() => handleCategoryClick('위시로 받은')}
        category="위시로 받은"
        selectCategory={selectCategory}
      />
    </CategoryContainerStyle>
  );
}

export default CategoryContainer;
