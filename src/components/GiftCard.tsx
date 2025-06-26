import styled from '@emotion/styled';

interface GiftItems {
  image: string;
  brandName: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 32%;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.spacing4};
`;

const Rank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 9%;
  aspect-ratio: 1/1;
  top: 5px;
  left: 5px;
  border-radius: 3px;
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: 500;
`;

const Image = styled.img`
  width: 100%;
`;

const Name1 = styled.div`
  ${({ theme }) => theme.typography.label1Regular};
  color: ${({ theme }) => theme.colors.gray600};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

const Name2 = styled.div`
  ${({ theme }) => theme.typography.label1Regular};
`;

const Price = styled.div`
  ${({ theme }) => theme.typography.label1Bold};
  margin-top: ${({ theme }) => theme.spacing.spacing2};
`;

export const GiftCard = ({ image, brandName, price }: GiftItems) => {
  return (
    <Card>
      <Rank>1</Rank>
      <Image src={image} />
      <Name1>{brandName}</Name1>
      <Name2>{brandName}</Name2>
      <Price>{price} 원</Price>
    </Card>
  );
};
