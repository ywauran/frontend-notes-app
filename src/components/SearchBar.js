import React from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';
import { ThemeConsumer } from '../contexts/ThemeContext';

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <ThemeConsumer>
      {
        ({ theme }) => {
          return (
            <LocaleConsumer>
              {({ locale }) => {
                return (
                  <div className='w-[80%] mx-auto'>
                    <input
                      type='text'
                      placeholder={
                        locale == 'id' ? 'Cari berdasarkan judul' : 'Search by title'
                      }
                      value={keyword}
                      onChange={(event) => keywordChange(event.target.value)}
                      className={` ${theme === 'dark' ? 'bg-black' : 'bg-white'} ${theme === 'dark' ? 'border-white' : 'border-black'} ${ theme === 'dark' ? 'placeholder:text-white' : 'placeholder:text-black'} ${ theme === 'dark' ? 'text-white' : 'text-black'} border-2  my-4 px-4 py-2 w-full mx-auto`}
                    />
                  </div>
                )
              }}
            </LocaleConsumer>
          )
        }
      }
    </ThemeConsumer>
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
