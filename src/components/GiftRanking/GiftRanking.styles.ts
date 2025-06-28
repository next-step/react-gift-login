import styled from '@emotion/styled';

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.spacing5};
    background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.h2`
    margin: 20px 0 20px 12px;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const CategoryFilter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 12px 20px 12px;
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 10px 0;
    background-color: #fff;
    border: none;
    border-radius: 16px;
    cursor: pointer;

    font-size: 13px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

    div {
        font-size: 14px;
        width: 44px;
        height: 44px;
        border-radius: 16px;
        padding: 20px;
        background-color: ${({ isActive, theme }) =>
                isActive ? theme.colors.blue700 : theme.colors.blue100};
        color: ${({ isActive, theme }) =>
                isActive ? theme.colors.gray00 : theme.colors.blue400};
        
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    p {
        color: ${({ isActive }) => (isActive ? '#217cf9' : '#c9c9c9')};
    }

    transition: background-color 0.2s ease, color 0.2s ease;
`;

export const SortOptions = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0;
    margin: 0 auto 20px;
    background-color: #f2f7ff;
    padding: 10px 0;
    border-radius: 12px;
    max-width: 688px;
    height: 50px;
    text-align: center;
`;

export const SortSpan = styled.span<{ isActive: boolean }>`
    flex: 1;
    font-size: 14px;
    font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
    color: ${({ isActive }) => (isActive ? '#217cf9' : '#a0bfe9')};
    cursor: pointer;
    transition: color 0.2s ease;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

export const Card = styled.div`
    background: #fff;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 12px;
`;

export const ImageWrapper = styled.div`
    position: relative;
`

export const RankBadge = styled.div<{ rank: number }>`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 24px;
    height: 24px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray00};
    background-color: ${({ rank, theme }) =>
            rank <= 3 ? theme.colors.red600 : theme.colors.gray500};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

export const ProductImage = styled.img`
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: 1;
`;

export const BrandName = styled.div`
    margin-top: 8px;
    font-size: 13px;
    color: #888;
`;

export const ProductName = styled.div`
    margin-top: 4px;
    font-size: 15px;
    font-weight: 500;
    color: #333;
`;

export const Price = styled.div`
    margin-top: 6px;
    font-size: 15px;
    font-weight: bold;
    color: #000;
`;


export const MoreButton = styled.button`
    width: 480px;
    height: 45px;
    display: block;
    margin: 20px auto 0;
    padding: ${({ theme }) => `${theme.spacing.spacing2} ${theme.spacing.spacing6}`};
    background-color: ${({ theme }) => theme.colors.gray00};
    border: 1px solid ${({ theme }) => theme.colors.gray500};
    border-radius: 12px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`;
