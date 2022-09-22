import React from 'react';
import Header from '../src/components/Header';
import AddPage from './pages/AddPage';
import Homepage from './pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className='contact-app'>
      <Header/>
      <main className='bg-[#242121] text-white pt-2 pb-5'>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={<AddPage />} />
          <Route path='/notes/:id' element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
