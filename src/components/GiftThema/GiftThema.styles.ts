import styled from '@emotion/styled';

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.spacing4};
    background-color: ${({ theme }) => theme.colors.gray00};
`;

export const Title = styled.h2`
    font-size: 25px;
    font-weight: bold;
    margin: 20px 0 20px 12px;
    color: ${({ theme }) => theme.colors.gray900};
`;

export const ThemeList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: ${({ theme }) => theme.spacing.spacing3};
`;

export const ThemeCard = styled.div`
    flex: 0 0 auto;
    width: 104px;
    text-align: center;
    cursor: pointer;

    img {
        width: 100%;
        border-radius: 12px;
        object-fit: cover;
        aspect-ratio: 1;
        transition: transform 0.2s ease;
    }
  
    p {
        margin-top: 6px;
        font-size: 13px;
        color: ${({ theme }) => theme.colors.gray700};
        white-space: nowrap;
    }
  
    &:hover img { 
        transform: scale(1);
    }
`;

export const YellowBox = styled.div`
    background-color: ${({ theme }) => theme.colors.semantic.brand.kakaoYellow};
    border-radius: 20px;
    padding: ${({ theme }) => theme.spacing.spacing4};
    margin-top: 30px;
    font-weight: 600;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray1000};
    line-height: 1.5;
`;