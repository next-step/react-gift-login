import styled from '@emotion/styled'
import categories from '../mocks/category.mock'

const CategoryWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 10px;
  padding: 30px 10px;
  box-sizing: border-box;
`
const CategoryTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography['title1Bold'].fontSize};
  font-weight: ${({ theme }) => theme.typography['title1Bold'].fontWeight};
  line-height: ${({ theme }) => theme.typography['title1Bold'].lineHeight};
`

const CategoryItemWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding-top: 16px;
  box-sizing: border-box;
  cursor: pointer;
`

function CategoryItemList() {

    return (
      <>
        {categories.map((item) => (
          <CategoryItem key={item.themeId}>
            <CategoryItemImg src={item.image} alt={item.name}></CategoryItemImg>
            <CategoryItemTitle>{item.name}</CategoryItemTitle>
    
          </CategoryItem>
        ))}
      </>
    )
}

const CategoryItem = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CategoryItemImg = styled.img`
  width: 50px;
  height: 50px;
`

const CategoryItemTitle = styled.p`
  font-size: 11px;
  text-align: center;
`

function GiftCategorySelector() {
    return (
        <CategoryWrapper>
            <CategoryTitle>선물 테마</CategoryTitle>
            <CategoryItemWrapper>
              <CategoryItemList></CategoryItemList>
            </CategoryItemWrapper>
          </CategoryWrapper>
    )
}

export default GiftCategorySelector;