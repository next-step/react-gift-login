import Header from '@/components/Header';
import React from 'react';
import styled from '@emotion/styled';
import { FiPlus } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <Header title="선물하기" />
      <HomeContainer>
        <SelectFriendSection>
          <SelectFriend>
            <FiPlusIcon size={16} />
            <SelectFriendText>선물할 친구를 선택해 주세요.</SelectFriendText>
          </SelectFriend>
        </SelectFriendSection>
      </HomeContainer>
    </>
  );
};

export default Home;

export const HomeContainer = styled.main`
  padding-top: 56px;
  width: 100%;
  max-width: 720px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  overflow-y: auto;
  margin: 0 auto;
`;

export const SelectFriendSection = styled.section`
  background-color: ${({ theme }) => theme.colors.gray200};
  width: 100%;
  display: flex;
  padding: 16px 12px;
`;

export const SelectFriend = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.backgroundDefault};
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  border-radius: 18px;
  max-width: 720px;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.spacing4}`};
  gap: ${({ theme }) => theme.spacing.spacing2};
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
  }
`;

export const FiPlusIcon = styled(FiPlus)`
  background-color: ${({ theme }) => theme.colors.kakaoYellow};
  border-radius: 16px;
  width: 36px;
  height: 36px;
  padding: ${({ theme }) => theme.spacing.spacing1};
`;

export const SelectFriendText = styled.p`
  ${({ theme }) => `
    font-size: ${theme.font.subtitle1Bold.size};
    font-weight: ${theme.font.subtitle1Bold.weight};
    line-height: ${theme.font.subtitle1Bold.lineHeight};
  `}
`;
