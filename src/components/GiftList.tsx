import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import type { GiftItemsType } from '@/types/giftItems';
import giftItems from '@/mock_data/giftItems';
import { GiftCard } from './GiftCard';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const List = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 96%;
  height: 100%;
  background-color: white;
`;

export const GiftList = () => {
  const [arr, setArr] = useState<GiftItemsType[][]>([]);

  useEffect(() => {
    let result = [];
    let tempArr = [];
    for (let i = 1; i <= giftItems.length; i++) {
      if (i % 3 !== 0) {
        tempArr.push(giftItems[i - 1]);
      } else {
        tempArr.push(giftItems[i - 1]);
        result.push(tempArr);
        tempArr = [];
      }
    }
    setArr(result);
  }, []);

  console.log(arr);

  return (
    <Container>
      {arr.map((itemBundle, i) => {
        return (
          <List key={i}>
            {itemBundle.map((item, j) => {
              return (
                <GiftCard
                  key={`(${i}, ${j})`}
                  image={item.imageURL}
                  brandName={item.brandInfo.name}
                  price={item.price.basicPrice}
                />
              );
            })}
          </List>
        );
      })}
    </Container>
  );
};
