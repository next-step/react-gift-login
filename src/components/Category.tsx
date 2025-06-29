import { CategoryContainerStyle } from '@/styles/Category/CategoryStyle.styles';

function Category({
  category,
  onClick,
  selectCategory,
}: {
  category: string;
  onClick?: () => void;
  selectCategory?: string;
}) {
  const selected = category === selectCategory;
  return (
    <CategoryContainerStyle onClick={onClick} selected={selected}>
      {category}
    </CategoryContainerStyle>
  );
}

export default Category;
