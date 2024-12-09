import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css';

function AppContent() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
