export interface GiftTheme {
  themeId: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  name: string;
  imageURL: string;
  price: {
    basicPrice: number;
    discountRate: number;
    sellingPrice: number;
  };
  brandInfo: {
    id: number;
    name: string;
    imageURL: string;
  };
}

export type AgeFilter = '전체' | '여성이' | '남성이' | '청소년이';
export type SortType = '받고 싶어한' | '많이 선물한' | '위시로 받은';
