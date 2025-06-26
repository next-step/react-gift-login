import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import category from '@/mock_data/category';
import type { CategoryType } from '@/types/category';
import { CategoryCard } from '@/components/CategoryCard';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 35%;
  background-color: white;
`;

const Title = styled.div`
  ${({ theme }) => theme.typography.title1Bold};
  margin-top: ${({ theme }) => theme.spacing.spacing7};
  margin-left: ${({ theme }) => theme.spacing.spacing3};
  color: black;
`;

const Body = styled.div`
  flex: 1;
  width: 100%;
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25%;
`;

export const Category = () => {
  const [arr, setArr] = useState<CategoryType[][]>([]);

  useEffect(() => {
    let result = [];
    let tempArr = [];
    for (let i = 1; i <= category.length; i++) {
      if (i % 5 !== 0) {
        tempArr.push(category[i - 1]);
      } else {
        tempArr.push(category[i - 1]);
        result.push(tempArr);
        tempArr = [];
      }
    }
    setArr(result);
  }, []);

  console.log(arr);

  return (
    <Container>
      <Title>선물 테마</Title>
      <Body>
        {arr.map((itemBundle, i) => {
          return (
            <CategoryList key={i}>
              {itemBundle.map((item, j) => {
                return <CategoryCard key={`(${i}, ${j})`} name={item.name} image={item.image} />;
              })}
            </CategoryList>
          );
        })}
      </Body>
    </Container>
  );
};
