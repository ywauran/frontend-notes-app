import React from 'react';
import { useEffect, useState } from 'react';
import AddPage from './pages/AddPage';
import Homepage from './pages/Homepage';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import { getUserLogged, putAccessToken } from '../src/utils/network-data';
import Header from './components/Header';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import './styles/style.css'

function App() {
  const navigate = useNavigate();
  const [authedUser, setAuthedUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const changeTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('data-theme', changeTheme);
      return changeTheme;
    });
  };

  const themeContextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  
  const [locale, setLocale] = React.useState('id')

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const changeLanguage = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('languange', changeLanguage);
      return changeLanguage
    });
  };

  const localeContextValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);



  const loginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  const logout = () => {
    setAuthedUser(null);
    navigate('/')
    putAccessToken('');
  }

  React.useState(() => {
    async function setUserLogged() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setLoading(false);
    };

    setUserLogged();
  }, [authedUser]);

  if (loading) {
    return (
      <div className='h-screen w-screen flex flex-col items-center justify-center'>
        <div className='text-center'>
          <div>
              <svg className='inline mr-2 w-8 h-8 text-gray-200 animate-spin fill-black' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z' fill='currentColor'/>
                  <path d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z' fill='currentFill'/>
              </svg>
          </div>
        </div>
      </div>
    )
  }




  if (authedUser === null) {
    return (
      <ThemeContext.Provider value={themeContextValue}>
        <LocaleContext.Provider value={localeContextValue}>
          <div className='p-5'>
            <header className='px-10' >
              <h1 className={`text-xl sm:text-3xl font-bold text-center`}>{localeContextValue.locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1>
            </header>
            <main className={`px-10`}>
              <Routes>
                <Route path='/*' element={<Login loginSuccess={loginSuccess} />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </main>
          </div>
        </LocaleContext.Provider>
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} w-screen h-screen`}>
          <div className='flex justify-between items-center px-8 sm:px-24'>
            <Link to={'/'}><h1 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-2xl font-bold py-2 text-center`}>{localeContextValue.locale === 'id' ? 'Aplikasi Catatan' : 'Note App'}</h1></Link>
            <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-xl font-semibold`}>{authedUser.name}</h2>
          </div>
          <Header user={authedUser} logout={logout}/>
          <main className={`px-10 sm:px-32`}>
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Homepage />} />
              <Route path='/add' element={<AddPage />} />
              <Route path='/notes/:id' element={<DetailPage />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
