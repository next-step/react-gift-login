import type { mockItemType } from '@/mocks/mockItem';
import Item from '@/components/Item';

import styled from '@emotion/styled';
import ItemBtn from '@/components/ItemBtn';

export const ItemContainerStyle = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  align-items: center;
  padding: 5px;
`;

function ItemContainer({ itemList }: { itemList: mockItemType }) {
  const item: mockItemType[] = Array.from({ length: 20 }, () => ({
    id: itemList.id,
    name: itemList.name,
    imageURL: itemList.imageURL,
    price: {
      basicPrice: itemList.price.basicPrice,
      discountRate: itemList.price.discountRate,
      sellingPrice: itemList.price.sellingPrice,
    },
    brandInfo: {
      id: itemList.brandInfo.id,
      name: itemList.brandInfo.name,
      imageURL: itemList.brandInfo.imageURL,
    },
  }));
  return (
    <>
      <ItemContainerStyle>
        {item.map((itemData, index) => (
          <Item key={itemData.id} index={index} itemData={itemData} />
        ))}
      </ItemContainerStyle>
      <ItemBtn />
    </>
  );
}

export default ItemContainer;
