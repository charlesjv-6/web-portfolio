import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';
import Index from './pages/index';
import Error from './pages/error';
import About from './pages/about';
import SearchResult from './pages/search-result';
import SideBar from './layouts/side-bar';
import Details from './pages/details';
import Offers from './pages/offers';
import FAQ from './pages/faq';
import Policy from './pages/policy';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=> setIsMobile(window.innerWidth <= 768), [])

  return isMobile ? (
    <div className='app'><SideBar />
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} path='/' index />
          <Route element={<About />} path='/about' />
          <Route element={<Offers />} path='/offers' />
          <Route element={<SearchResult />} path='/search' />
          <Route element={<Details />} path='/product-detail' />
          <Route element={<Policy />} path='/policy' />
          <Route element={<FAQ />} path='/faq' />
          <Route element={<Error />} path='*' />
        </Routes>
      </BrowserRouter>
    </main></div>
  ) : <p>Sorry, this website is not available on your device yet.</p> ;
}

export default App;
