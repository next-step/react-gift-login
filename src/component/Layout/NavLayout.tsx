import { Outlet } from 'react-router-dom'
import TopNavigationBar from '@/component/TopNavigationBar/TopNavigationBar'

const Layout = () => {
  return (
    <>
      <TopNavigationBar />
      <Outlet />
    </>
  )
}

export default Layout
