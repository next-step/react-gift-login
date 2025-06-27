import React from 'react'
import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'

const Section = styled.section`
  width: 100%;
  background: #f5f6f7;
  padding: 32px 0 0 0;
`

const Card = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 32px;
  display: flex;
  align-items: center;
  padding: 32px 40px;
  box-sizing: border-box;
  box-shadow: none;
  gap: 24px;
`

const AddCircle = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: #ffe066;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PlusIcon = styled(AddIcon)`
  color: #393939;
  font-size: 2.5rem;
`

const GuideText = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #393939;
  margin-left: 8px;
`

const GiftFriendsSection = () => {
  return (
    <Section>
      <Card>
        <AddCircle>
          <PlusIcon fontSize="inherit" />
        </AddCircle>
        <GuideText>선물할 친구를 선택해 주세요.</GuideText>
      </Card>
    </Section>
  )
}

export default GiftFriendsSection 