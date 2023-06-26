import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from "./pages/Home";
import Jogo from "./pages/Jogo";
import Search from "./pages/Search";

//components
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="jogo/:id" element={<Jogo />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
