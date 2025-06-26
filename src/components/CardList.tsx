import styled from '@emotion/styled';
import Card from '@/components/Card';

interface CardListProps {
  cards: {
    id: number;
    imageUrl: string;
    brand: string;
    name: string;
    price: number;
  }[];
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: 100%;
  justify-items: center;
`;

function CardList({ cards }: CardListProps) {
  return (
    <Grid>
      {cards.map((card, idx) => (
        <Card
          key={card.id}
          rank={idx + 1}
          imageUrl={card.imageUrl}
          brand={card.brand}
          name={card.name}
          price={card.price}
        />
      ))}
    </Grid>
  );
}

export default CardList;