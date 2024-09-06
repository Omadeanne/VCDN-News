import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import Home from './pages/Home';
import TrendingNews from './pages/TrendingNews';
import LocalNews from './pages/LocalNews';
import SignIn from './pages/SignIn';
import Register from './pages/Register';


function App() {
  return (
    <>
      <Navbar />
      
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/trending-news" element={<TrendingNews />} />
          <Route path="/local-news" element={<LocalNews />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
