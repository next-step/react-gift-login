import styled from '@emotion/styled';

interface Category {
  name: string;
  image: string;
}

const Card = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;

const Image = styled.img`
  height: 50%;
`;

const Name = styled.div`
  margin-top: ${({ theme }) => theme.spacing.spacing2};
  font-size: 0.8rem;
  font-weight: 400;
`;

export const CategoryCard = ({ name, image }: Category) => {
  return (
    <Card>
      <Image src={image} />
      <Name>{name}</Name>
    </Card>
  );
};
