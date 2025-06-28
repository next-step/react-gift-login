import styled from '@emotion/styled'

const SelectFriendsWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  padding: 20px;
  box-sizing: border-box;
`

const SelectFriendsBox = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  border-radius: 15px;
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  justify-content: left;
  cursor: pointer;
`

const SelectFriendsBoxPlusButton = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.semantic.kakaoYellow};
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '+';
    font-size: 34px;
    font-weight: 100;
    color: ${({ theme }) => theme.colors.gray[1000]};
  }
`

const SelectFriendsBoxText = styled.span`
  font-size: 17px;
  font-weight: bold;
  padding: 20px 10px;
`

function FriendSelector() {
    return (
        <SelectFriendsWrapper>
            <SelectFriendsBox>
              <SelectFriendsBoxPlusButton></SelectFriendsBoxPlusButton>
              <SelectFriendsBoxText>선물할 친구를 선택해 주세요.</SelectFriendsBoxText>
            </SelectFriendsBox>
          </SelectFriendsWrapper>
    )
}

export default FriendSelector;