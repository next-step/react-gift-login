import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import RankingPage from "./pages/RankingPage";
import MyGiftPage from "./pages/MyGiftPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 pb-20 font-sans">
        <Header />
        <nav className="bg-white shadow-md py-3 px-4 flex justify-center space-x-6 text-gray-700 border-b border-gray-200">
          <Link
            to="/"
            className="hover:text-blue-600 font-semibold text-lg py-1 px-3 rounded-md hover:bg-blue-50 transition-colors"
          >
            홈
          </Link>
          <Link
            to="/ranking"
            className="hover:text-blue-600 font-semibold text-lg py-1 px-3 rounded-md hover:bg-blue-50 transition-colors"
          >
            랭킹
          </Link>
          <Link
            to="/my-gifts"
            className="hover:text-blue-600 font-semibold text-lg py-1 px-3 rounded-md hover:bg-blue-50 transition-colors"
          >
            내 선물함
          </Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/my-gifts" element={<MyGiftPage />} />
            <Route
              path="*"
              element={
                <div className="container mx-auto py-10 text-center text-xl font-bold text-gray-700">
                  404 - 페이지를 찾을 수 없습니다!
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
