import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between items-center bg-[#292828] text-white px-5 sm:px-10 py-5 text-xl sm:text-2xl'>
      <h1>
        <Link to={'/'}>Aplikasi Catatan</Link>
      </h1>
      <nav className='flex space-x-4 text-sm sm:text-xl'>
        <ul>
          <li>
            <Link to={'/add'}>Tambah</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
