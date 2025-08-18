import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './component/NavBar';
import Footer from './component/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
