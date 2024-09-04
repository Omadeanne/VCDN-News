import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
// import SearchBar from './component/SearchBar';


function App() {
  return (
    <Router>
      <Navbar />
      {/* <SearchBar/> */}

      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home/>} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
