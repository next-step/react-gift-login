import styled from '@emotion/styled';
import { products } from '@/data/products';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 12px;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 12px;
  text-align: center;
`;

const Img = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const Name = styled.div`
  font-size: 15px;
  margin-bottom: 4px;
`;

const Price = styled.div`
  font-weight: bold;
  color: #222;
`;

function ProductList() {
  return (
    <List>
      {products.map((p, idx) => (
        <Item key={p.id}>
          <Img src={p.imageURL} alt={p.name} />
          <Name>{p.name}</Name>
          <Price>{p.price.toLocaleString()}원</Price>
        </Item>
      ))}
    </List>
  );
}

export default ProductList;
