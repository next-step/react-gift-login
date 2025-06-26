import styled from '@emotion/styled';
import { categories } from '@/data/categories';

const Box = styled.div`
  background-color: white;
  height: 400px;
`;

const List = styled.ul`
  display: flex;
  gap: 16px;

  flex-direction: row; // 가로로 배치
  flex-wrap: wrap;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 20px;

  margin: 30px 10px;
  padding: 35px 0px 0px 10px;
`;

const Item = styled.li`
  width: 120px;
  text-align: center;

  cursor: pointer;

  margin: 5px;
`;

const Img = styled.img`
  width: 64px;
  height: 64px;
`;

const Name = styled.div`
  font-size: 12px;
`;

function CategoryList() {
  return (
    <Box>
      <Title>선물 테마</Title>
      <List>
        {categories.map((cat) => (
          <Item key={cat.themeId}>
            <Img src={cat.image} alt={cat.name} />
            <Name>{cat.name}</Name>
          </Item>
        ))}
      </List>
    </Box>
  );
}

export default CategoryList;
