import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
  return (
    <div className='app'>
      <SideBar />
      <main>
        <BrowserRouter basename='web-portfolio'>
          <Routes>
            {/* Redirect to /web-portfolio */}
            <Route path="/" element={<Navigate to="/web-portfolio" />} />
            {/* Define other routes */}
            <Route element={<Index />} path='/web-portfolio' />
            <Route element={<About />} path='/web-portfolio/about' />
            <Route element={<Offers />} path='/web-portfolio/offers' />
            <Route element={<SearchResult />} path='/web-portfolio/search' />
            <Route element={<Details />} path='/web-portfolio/product-detail' />
            <Route element={<Policy />} path='/web-portfolio/policy' />
            <Route element={<FAQ />} path='/web-portfolio/faq' />
            <Route element={<Error />} path='/web-portfolio/*' />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;