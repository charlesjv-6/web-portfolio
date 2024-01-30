import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';
import Index from './pages/index';
import Error from './pages/error';
import About from './pages/about';
import SearchResult from './pages/search-result';
import SideBar from './layouts/side-bar';
import Details from './pages/details';

function App() {
  return (
    <div className='app'><SideBar />
    <main>
      <BrowserRouter basename='web-portfolio'>
        <Routes>
          <Route element={<Index />} path='/' index />
          <Route element={<About />} path='/about' />
          <Route element={<SearchResult />} path='/search' />
          <Route element={<Error />} path='*' />
          <Route element={<Details />} path='/product-detail' />
        </Routes>
      </BrowserRouter>
    </main></div>
  );
}

export default App;
