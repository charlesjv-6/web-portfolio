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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/web-portfolio" />} />
          <Route path="/web-portfolio/*" element={<AppLayout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function AppLayout() {
  return (
    <div>
      <SideBar />
      <main>
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
      </main>
    </div>
  );
}


export default App;
