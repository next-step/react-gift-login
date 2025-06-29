import { createBrowserRouter, RouterProvider } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import FriendSelector from './components/FriendSelector/FriendSelector';
import CategorySection from './components/CategorySection/CategorySection';
import MessageSection from './components/MessageSection/MessageSection';
import RankingSection from './components/RankingSection/RankingSection';
import Login from './pages/Login/Login';

const HomePage = () => (
  <>
    <Navigation />
    <FriendSelector />
    <CategorySection />
    <MessageSection />
    <RankingSection />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App