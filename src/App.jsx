import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Navbar />

      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/categories" element={<Categories />} /> */}
          {/* <Route path="/trendingnews" element={<TrendingNews/>} /> */}
          {/* <Route path="/register" element={< />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
