import { CategoryContainerStyle } from '@/styles/Category/CategoryStyle.styles';

type CategoryType = {
  category: string;
  onClick: () => void;
  selectedCategory: string;
};

function Category({ category, onClick, selectedCategory }: CategoryType) {
  const selected = category === selectedCategory;
  return (
    <CategoryContainerStyle onClick={onClick} selected={selected}>
      {category}
    </CategoryContainerStyle>
  );
}

export default Category;
