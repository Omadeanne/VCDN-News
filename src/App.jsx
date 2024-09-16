import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import TrendingNews from './pages/TrendingNews';
import LocalNews from './pages/LocalNews';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ContactUs from './pages/ContactUs';
import ArticlePage from './pages/ArticlePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Home Page */}
        <Route index element={<Home />} />
        {/* Other Pages */}
        <Route path="trending-news" element={<TrendingNews />} />
        <Route path="local-news" element={<LocalNews />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="/readMore/:postId" element={<ArticlePage />} />
      </Route>
    </Routes>
  );
}

export default App;
