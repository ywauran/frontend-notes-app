import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <div className='w-[80%] mx-auto'>
      <input
        type='text'
        placeholder='Cari berdasarkan judul'
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        className='bg-[#373737] text-white placeholder:text-white my-4 px-4 py-2 w-full mx-auto'
      />
    </div>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
