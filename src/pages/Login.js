import React from 'react';
import { login } from '../utils/network-data';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { Link } from 'react-router-dom';
import LocaleConsumer from '../contexts/LocaleContext';

function Login({loginSuccess}) {
    async function onLogin({ email, password }) {
        const { error, data } = await login({ email, password });
        if (!error) {
          loginSuccess(data);
        }
      }
     
      return (
        <LocaleConsumer>
          {
            ({ locale }) => {
              return (
                <section >
                  <div className='flex flex-col space-y-3'>
                    <h2 className='text-lg sm:text-2xl text-center font-semibold'>{ locale === 'id' ? 'Masuk Ke Akun Anda' : 'Login To Your Account'}</h2>
                    <LoginInput login={onLogin} />
                    <p className='w-[80%] mx-auto'>{ locale === 'id' ? 'Belum punya akun? ' : 'Don`t have an account yet? '}<Link to='/register' className='underline font-semibold'>{ locale === 'id' ? 'Daftar Sekarang' : 'Register Now' }</Link></p>
                  </div>
                </section>
              )
            }
          }
        </LocaleConsumer>
      );
    }
     
    Login.propTypes = {
      loginSuccess: PropTypes.func.isRequired,
    }

export default Login