import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/style.css';
import Index from './pages/index';
import Error from './pages/error';
import SideBar from './layouts/side-bar';

function App() {
  return (
    <div className='app'><SideBar />
    <main>
      <BrowserRouter basename='web-portfolio'>
        <Routes>
          <Route element={<Index />} path='/' index />
          <Route element={<Error />} path='*' />
        </Routes>
      </BrowserRouter>
    </main></div>
  );
}

export default App;
