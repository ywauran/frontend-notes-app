import React from 'react';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div className='flex flex-col space-x-6 items-center'>
      <div className='flex flex-col space-x-4'>
        <h1 className='text-center text-4xl font-bold'>404</h1>
        <h2 className='text-center text-3xl font-bold'>Halaman Tidak Ditemukan</h2>
      </div>
      <div>
        <h3 className='text-[#169E16] underline'><Link to={'/'}>Kembali Ke Beranda</Link></h3>
      </div>
    </div>
  );
};

export default NotFound;
