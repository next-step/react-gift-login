// src/components/FriendSelector.tsx
import { useState } from 'react'
import styled from '@emotion/styled'
import plusIcon from '@/assets/plus.png'

interface FriendSelectorProps {
  friends: string[]
  onSelect?: (friend: string) => void
}

const Wrapper = styled.section`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  position: relative;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  font-size: 14px;
  color: #2a3038;
  text-align: left;
  cursor: pointer;
`

const IconCircle = styled.div`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #ffe200;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

const Dropdown = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  margin: 0;
  padding: 4px 0;
  background: #fff;
  border: 1px solid #dcdee3;
  border-radius: 4px;
  list-style: none;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Item = styled.li`
  padding: 8px 12px;
  font-size: 14px;
  color: #2a3038;
  cursor: pointer;
  &:hover {
    background: #f7f8f9;
  }
`

const FriendSelector = ({ friends, onSelect }: FriendSelectorProps) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const handleSelect = (friend: string) => {
    setSelected(friend)
    setOpen(false)
    onSelect?.(friend)
  }

  return (
    <Wrapper>
      <Button onClick={() => setOpen((p) => !p)}>
        <IconCircle>
          <img src={plusIcon} alt="plus" width="16" height="16" />        </IconCircle>
        {selected ?? '선물할 친구를 선택해 주세요.'}
      </Button>

      {open && (
        <Dropdown>
          {friends.map((friend) => (
            <Item key={friend} onClick={() => handleSelect(friend)}>
              {friend}
            </Item>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  )
}

export default FriendSelector