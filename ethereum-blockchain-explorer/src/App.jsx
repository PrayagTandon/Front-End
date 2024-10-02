import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Transfer from './components/Transfer';
import Blocks from './components/Blocks';

function App() {
  return (
    <Router>

      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Navigation />
        <div className="p-6">
          <Dashboard />
          <Routes>
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transfer" element={<Transfer />} />
            <Route path="/blocks" element={<Blocks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
