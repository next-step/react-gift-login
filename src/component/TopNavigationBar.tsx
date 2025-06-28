import NavArrowLeftIcon from '@/assets/nav-arrow-left.svg?react'
import ProfileIcon from '@/assets/profile.svg?react'
import { Nav, Icon } from './TopNavigationBar.styles'

const TopNavigationBar: React.FC = () => {
  return (
    <Nav>
      <Icon>
        <NavArrowLeftIcon />
      </Icon>
      <div>선물하기</div>
      <Icon>
        <ProfileIcon />
      </Icon>
    </Nav>
  )
}

export default TopNavigationBar
