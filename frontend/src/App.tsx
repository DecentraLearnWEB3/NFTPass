import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Catalog from './pages/Catalog';
import Footer from './components/Footer';
import CreateEvent from './pages/CreateEvent';

function App() {
  return (
    <BrowserRouter>
     <NavBar />
     <main className="main-content">
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/catalog" element={<Catalog />} />
         <Route path="/create" element={<CreateEvent />} />
       </Routes>
       
     </main>
     <Footer></Footer>
   </BrowserRouter>
  );
}

export default App;
