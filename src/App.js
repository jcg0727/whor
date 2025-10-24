import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Shop from './components/Shop';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'shop':
        return <Shop />;
      case 'project':
        return <Project />;
      default:
        return <Main />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
