import Banner from '@/component/Banner'
import FriendChoise from '@/component/FriendChoise'
import GiftRanking from '@/component/GiftRanking'
import GiftTheme from '@/component/GiftTheme'
import { GiftCategory } from '@/mock/GiftCategory'
import styled from '@emotion/styled'
import React from 'react'

const MyDiv = styled.div`
  max-width: 720px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-color: rgb(255, 255, 255);
    padding-top: 2.75rem;
`

const main = () => {
  return (
    <MyDiv>
      <FriendChoise/>
      <GiftTheme/>
      <Banner/>
      <GiftRanking/>
    </MyDiv>
  )
}

export default main
