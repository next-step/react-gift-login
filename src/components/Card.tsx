import styled from '@emotion/styled';

interface CardProps {
  rank: number;
  imageUrl: string;
  brand: string;
  name: string;
  price: number;
}

const CardWrapper = styled.div`
  width: 210px;
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const RankNumber = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  background:${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.gray00};
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};;
  padding: 2px 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 16px 12px 12px 12px;
  text-align: left;
`;

const Brand = styled.div`
  color:${({ theme }) => theme.colors.gray700};
  font-size: ${({ theme }) => theme.typography.body2Bold.fontSize};
  margin-bottom: 2px;
`;

const Name = styled.div`
  color:${({ theme }) => theme.colors.gray1000};
  font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
  margin-bottom: 8px;
`;

const Price = styled.div`
  color:${({ theme }) => theme.colors.gray1000};
   font-size: ${({ theme }) => theme.typography.body1Bold.fontSize};
   font-weight: ${({ theme }) => theme.typography.body1Bold.fontWeight};;
  font-weight: 900;
  margin-top: 4px;
`;

function Card({ rank, imageUrl, brand, name, price }: CardProps) {
  return (
    <CardWrapper>
      <RankNumber>{rank}</RankNumber>
      <Image src={imageUrl}/>
      <Info>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>
        <Price>
          {price.toLocaleString()} <span style={{ fontWeight: 500, fontSize: '1rem' }}>원</span>
        </Price>
      </Info>
    </CardWrapper>
  );
}

export default Card;