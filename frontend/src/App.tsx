import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/dashboard" element={<Dashboard />} />
       </Routes>
     </main>
   </BrowserRouter>
  );
}

export default App;
