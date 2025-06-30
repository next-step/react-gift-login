import { Routes, Route } from 'react-router-dom'

import GiftPage from '@/features/Gift/pages/GiftPage'
import LoginPage from '@/features/Login/pages/LoginPage'
import NotFoundPage from '@/features/NotFound/pages/NotFoundPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<GiftPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRouter
