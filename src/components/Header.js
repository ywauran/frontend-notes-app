import React from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode, MdLogout } from 'react-icons/md';
import { LocaleConsumer } from '../contexts/LocaleContext';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ logout }) => {
  return (
    <ThemeConsumer>
      {
        ({ theme, toggleTheme }) => {
          return (
            <LocaleConsumer>
              {
                ({ locale, toggleLocale }) => {
                  return (
                    <header className={`${theme === 'dark' ? 'text-white' : 'text-black'} flex justify-between items-center px-10 sm:px-32 py-5 text-xl sm:text-2xl`}>
                      <div>
                        <ul className='flex space-x-4 items-center'>
                          <li>
                            <button onClick={toggleLocale}>
                              { locale }
                            </button>
                          </li>
                          <li className=''>
                            <button onClick={toggleTheme}>
                              { theme === 'dark' ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
                            </button>
                          </li>
                        </ul>
                      </div>
                      <nav className='flex space-x-4 text-sm sm:text-xl'>
                        <ul className='flex space-x-4'>
                          <li>
                            <Link to={'/add'}>{ locale === 'id' ? 'Tambah' : 'Add' }</Link>
                          </li>
                          <li>
                            <button onClick={logout}> <MdLogout /></button>
                          </li>
                        </ul>
                      </nav>
                    </header>
                  )
                }
              }
            </LocaleConsumer>
          )
        }
      }
    </ThemeConsumer>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired
}

export default Header;
