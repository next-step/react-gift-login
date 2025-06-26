import Layout from '@/Layout'
import logo from '@/assets/logo.png'
import FriendSelector from '@/components/FriendSelector'

const friends = ['라이언', '무지', '콘']
function App() {
  return (
    <Layout logoSrc={logo}>
      <FriendSelector friends={friends} />
    </Layout>
  )
}

export default App
