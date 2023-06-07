import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';
import RootLayout from './layout/layout';

function App() {
  return (
    <div className=" bg-antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-gradient-to-r from-blue-950 to-gray-950  ">
      <Router>
        <RootLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </RootLayout>
      </Router>
    </div>
  );
}

export default App;
