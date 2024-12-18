import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Havbar';
import HomePage from './pages/HomePage';
import PaintingDetails from './components/PaintingDetails';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/painting/:id" element={<PaintingDetails />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
