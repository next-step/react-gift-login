import React from 'react';
import styled from '@emotion/styled';
import { css, ThemeProvider } from '@emotion/react';
import { theme } from '@/theme/theme';
import productData from '../data/productData';
import categoryData from '@/data/categotyData';

const Wrapper = styled.section`
  padding: 0px 16px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  width: 100%;
  text-align: left;
`;

const MarginBox1 = styled.div`
  width: 100%;
  height: 20px;
  background-color: transparent;
`;

const SelectionBanner = styled.div`
  border-radius: 1rem;
  background-color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReceiverType = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const TypeButton = styled.button`
  width: 3.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const AllButtonLogo = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  background-color: rgb(33, 124, 249);
  transition: background-color 200ms;
`;

const ButtonLogo = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(170, 206, 253);
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  background-color: rgb(239, 246, 255);
  transition: background-color 200ms;
`;

const TypeTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(134, 139, 148);
  margin: 0px;
  text-align: left;
`;

const MarginBox2 = styled.div`
  width: 100%;
  height: 16px;
  background-color: transparent;
`;

const PresentType = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(239, 246, 255);
  border-radius: 0.5rem;
  padding: 12px 16px;
`;

const PresentTypeButton = styled.div`
  width: 100%;
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1875rem;
  color: rgb(33, 124, 249);
  transition:
    color 200ms,
    font-weight 200ms;
`;

const PresentDisplayContainer = styled.div`
  width: 100%;
`;

const PresentDisplay = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`;

const NumberLogo = styled.span`
  position: absolute;
  z-index: 2;
  width: 1.25rem;
  min-width: 1.25rem;
  height: 1.25rem;
  min-height: 1.25rem;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1;
  font-weight: 700;
  top: 0.25rem;
  left: 0.25rem;
  color: rgb(255, 255, 255);
  background-color: rgb(252, 106, 102);
`;

const ProductBox = styled.div`
  width: 100%;
  position: relative;
`;

const ProductInfo = styled.div`
  width: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  overflow: hidden;
`;

const SubProductName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProdudctName = styled.h6`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  text-align: left;
  word-break: break-word;
`;

const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const MoreButton = styled.button`
  max-width: 30rem;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid rgb(220, 222, 227);
`;

const MoreButtonFont = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1875rem;
  color: rgb(42, 48, 56);
  margin: 0px;
  width: 100%;
  text-align: center;
`;

const PresentRanking = () => {
  const {
    name,
    imageURL,
    price: { sellingPrice },
    brandInfo,
  } = productData;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Title>실시간 급상승 선물랭킹</Title>
        <MarginBox1 />
        <SelectionBanner>
          <ReceiverType>
            <TypeButton>
              <AllButtonLogo>ALL</AllButtonLogo>
              <p
                css={css`
                  font-size: 0.875rem;
                  font-weight: 700;
                  line-height: 1.1875rem;
                  color: rgb(33, 124, 249);
                  margin: 0px;
                  text-align: left;
                `}
              >
                전체
              </p>
            </TypeButton>
            <TypeButton>
              <ButtonLogo>👩🏻</ButtonLogo>
              <TypeTitle>여성이</TypeTitle>
            </TypeButton>
            <TypeButton>
              <ButtonLogo>👨🏻</ButtonLogo>
              <TypeTitle>남성이</TypeTitle>
            </TypeButton>
            <TypeButton>
              <ButtonLogo>👦🏻</ButtonLogo>
              <TypeTitle>청소년이</TypeTitle>
            </TypeButton>
          </ReceiverType>
        </SelectionBanner>
        <MarginBox2 />
        <PresentType>
          <PresentTypeButton>받고 싶어한</PresentTypeButton>
          <PresentTypeButton>많이 선물한</PresentTypeButton>
          <PresentTypeButton>위시로 받은</PresentTypeButton>
        </PresentType>
        <MarginBox2 />
        <PresentDisplayContainer>
          <PresentDisplay>
            <ProductBox>
              <NumberLogo>1</NumberLogo>
              <ProductInfo>
                <ProductImage src={imageURL} alt={name}></ProductImage>
                <div
                  css={css`
                    width: 100%;
                    height: 12px;
                    background-color: transparent;
                  `}
                ></div>
                <SubProductName>{brandInfo.name}</SubProductName>
                <ProdudctName>{brandInfo.name}</ProdudctName>
                <div
                  css={css`
                    width: 100%;
                    height: 4px;
                    background-color: transparent;
                  `}
                ></div>
                <ProductPrice>
                  {sellingPrice}
                  <span
                    css={css`
                      font-weight: 400;
                    `}
                  >
                    원
                  </span>
                </ProductPrice>
              </ProductInfo>
            </ProductBox>
            <ProductBox>
              <NumberLogo>2</NumberLogo>
              <ProductInfo>
                <ProductImage src={imageURL} alt={name}></ProductImage>
                <div
                  css={css`
                    width: 100%;
                    height: 12px;
                    background-color: transparent;
                  `}
                ></div>
                <SubProductName>{brandInfo.name}</SubProductName>
                <ProdudctName>{brandInfo.name}</ProdudctName>
                <div
                  css={css`
                    width: 100%;
                    height: 4px;
                    background-color: transparent;
                  `}
                ></div>
                <ProductPrice>
                  {sellingPrice}
                  <span
                    css={css`
                      font-weight: 400;
                    `}
                  >
                    원
                  </span>
                </ProductPrice>
              </ProductInfo>
            </ProductBox>
            <ProductBox>
              <NumberLogo>3</NumberLogo>
              <ProductInfo>
                <ProductImage src={imageURL} alt={name}></ProductImage>
                <div
                  css={css`
                    width: 100%;
                    height: 12px;
                    background-color: transparent;
                  `}
                ></div>
                <SubProductName>{brandInfo.name}</SubProductName>
                <ProdudctName>{brandInfo.name}</ProdudctName>
                <div
                  css={css`
                    width: 100%;
                    height: 4px;
                    background-color: transparent;
                  `}
                ></div>
                <ProductPrice>
                  {sellingPrice}
                  <span
                    css={css`
                      font-weight: 400;
                    `}
                  >
                    원
                  </span>
                </ProductPrice>
              </ProductInfo>
            </ProductBox>
            <ProductBox>
              <NumberLogo>4</NumberLogo>
              <ProductInfo>
                <ProductImage src={imageURL} alt={name}></ProductImage>
                <div
                  css={css`
                    width: 100%;
                    height: 12px;
                    background-color: transparent;
                  `}
                ></div>
                <SubProductName>{brandInfo.name}</SubProductName>
                <ProdudctName>{brandInfo.name}</ProdudctName>
                <div
                  css={css`
                    width: 100%;
                    height: 4px;
                    background-color: transparent;
                  `}
                ></div>
                <ProductPrice>
                  {sellingPrice}
                  <span
                    css={css`
                      font-weight: 400;
                    `}
                  >
                    원
                  </span>
                </ProductPrice>
              </ProductInfo>
            </ProductBox>
            <ProductBox>
              <NumberLogo>5</NumberLogo>
              <ProductInfo>
                <ProductImage src={imageURL} alt={name}></ProductImage>
                <div
                  css={css`
                    width: 100%;
                    height: 12px;
                    background-color: transparent;
                  `}
                ></div>
                <SubProductName>{brandInfo.name}</SubProductName>
                <ProdudctName>{brandInfo.name}</ProdudctName>
                <div
                  css={css`
                    width: 100%;
                    height: 4px;
                    background-color: transparent;
                  `}
                ></div>
                <ProductPrice>
                  {sellingPrice}
                  <span
                    css={css`
                      font-weight: 400;
                    `}
                  >
                    원
                  </span>
                </ProductPrice>
              </ProductInfo>
            </ProductBox>
            <ProductBox>
              <NumberLogo>6</NumberLogo>
              <ProductInfo>
                <ProductImage src={imageURL} alt={name}></ProductImage>
                <div
                  css={css`
                    width: 100%;
                    height: 12px;
                    background-color: transparent;
                  `}
                ></div>
                <SubProductName>{brandInfo.name}</SubProductName>
                <ProdudctName>{brandInfo.name}</ProdudctName>
                <div
                  css={css`
                    width: 100%;
                    height: 4px;
                    background-color: transparent;
                  `}
                ></div>
                <ProductPrice>
                  {sellingPrice}
                  <span
                    css={css`
                      font-weight: 400;
                    `}
                  >
                    원
                  </span>
                </ProductPrice>
              </ProductInfo>
            </ProductBox>
          </PresentDisplay>
        </PresentDisplayContainer>
        <div
          css={css`
            width: 100%;
            height: 32px;
            background-color: transparent;
          `}
        ></div>
        <MoreButtonContainer>
          <MoreButton>
            <MoreButtonFont>더보기</MoreButtonFont>
          </MoreButton>
        </MoreButtonContainer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default PresentRanking;
