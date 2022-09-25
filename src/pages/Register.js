import React from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';
 
function RegisterPage() {
    const navigate = useNavigate();

  async function onRegisterHandler(user) {
        const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (
            <section >
              <div className='flex flex-col mt-4 space-y-4'>
                <RegisterInput register={onRegisterHandler} />
                <p className='w-[80%] mx-auto'>{locale === 'id' ? 'Kembali ke' : 'Back to'} <Link to='/' className='underline font-semibold'>{ locale === 'id' ? 'Masuk' : 'Login'}</Link></p>
              </div>
            </section>
          )
        }
      }
    </LocaleConsumer>
  )
}
 
export default RegisterPage;