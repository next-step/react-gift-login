import * as S from './ItemCard.styles';

interface ItemCardProps {
  imageUrl: string;
  title: string;
  subtitle?: string;    // 브랜드명
  price?: number;       // 가격 (있을 때만 표시)
  rank?: number;        // 순위 (있을 때만 표시)
  onClick?: () => void;
  variant?: 'category' | 'product'; // 카테고리용인지 상품용인지
}

const ItemCard = ({ 
  imageUrl, 
  title, 
  subtitle,
  price,
  rank,
  onClick,
  variant = 'category'
}: ItemCardProps) => {
  return (
    <S.Card onClick={onClick}>
      {rank && <S.RankBadge rank={rank}>{rank}</S.RankBadge>}
      <S.Image src={imageUrl} alt={title} variant={variant} />
      
      {variant === 'category' ? (
        <S.Title>{title}</S.Title>
      ) : (
        <>
          {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
          <S.ProductName>{title}</S.ProductName>
          {price && <S.Price>{price.toLocaleString()} <span>원</span></S.Price>}
        </>
      )}
    </S.Card>
  );
};

export default ItemCard; 