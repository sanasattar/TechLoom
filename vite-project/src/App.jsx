import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;