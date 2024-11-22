import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sisters from './pages/Sisters';
import Brothers from './pages/Brothers';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sisters" element={<Sisters />} />
          <Route path="/brothers" element={<Brothers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
