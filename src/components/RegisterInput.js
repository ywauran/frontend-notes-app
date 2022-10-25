import React from 'react';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';
 
class RegisterInput extends React.Component {
  constructor(props) {
    super(props)
 
    this.state = {
      name: '',
      email: '',
      password: '',
    }
 
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }
 
  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }
 
  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    })
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
      <LocaleConsumer>
        {
          ({ locale }) => {
            return (
              <form onSubmit={this.onSubmitHandler} className='flex flex-col space-y-4'>
                <input type='text' placeholder={ locale === 'id' ? 'Name' : 'Name'} value={this.state.name} onChange={this.onNameChange} className='w-[80%] mx-auto bg-white text-black border-2 border-black placeholder:text-black px-4 py-2' />
                <input type='email' placeholder='Email' value={this.state.email} onChange={this.onEmailChange} className='w-[80%] mx-auto bg-white text-black border-2 border-black placeholder:text-black px-4 py-2'/>
                <input type='password' placeholder={ locale === 'id' ? 'Kata Sandi' : 'Password'} autoComplete='current-password' value={this.state.password} onChange={this.onPasswordChange} className='w-[80%] mx-auto bg-white text-white border-2 border-black placeholder:text-black px-4 py-2'/>
                <button className='w-[80%] mx-auto py-2 bg-[#169E16] font-bold text-white'>{locale === 'id' ? 'Daftar' : 'Register'}</button>
              </form>
            )
          }
        }
      </LocaleConsumer>
    )
  }
}
 
RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
 
export default RegisterInput;