import React from 'react';
import PropsTypes from 'prop-types';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { LocaleConsumer } from '../contexts/LocaleContext';

class NoteInput extends React.Component {

  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
        <ThemeConsumer>
          {
            ({ theme }) => {
              return (
                <form className='flex flex-col space-y-4 mt-4' onSubmit={this.onSubmitEventHandler}>
                  <LocaleConsumer>
                    {
                      ({ locale }) => {
                        return (
                          <input
                            type='text'
                            placeholder={ locale === 'id' ? 'Judul' : 'Title'}
                            value={this.state.title}
                            onChange={this.onTitleChangeEventHandler}
                            className={`${theme === 'dark' ? 'border-white' : 'border-black'} ${theme === 'dark' ? 'bg-black' : 'bg-white'} ${theme === 'dark' ? 'placeholder:text-white' : 'placeholder:text-black'} ${theme === 'dark' ? 'text-white' : 'text-black' } w-[80%] mx-auto  border-2  px-4 py-2`}
                          />
                        )
                      }
                    }
                  </LocaleConsumer>
                  <LocaleConsumer>
                    {
                      ({ locale }) => {
                        return (
                          <input
                            type='text'
                            placeholder={ locale === 'id' ? 'Bodi' : 'Body'}
                            value={this.state.body}
                            onChange={this.onBodyChangeEventHandler}
                            className={`${theme === 'dark' ? 'border-white' : 'border-black'} ${theme === 'dark' ? 'bg-black' : 'bg-white'} ${theme === 'dark' ? 'placeholder:text-white' : 'placeholder:text-black'} ${theme === 'dark' ? 'text-white' : 'text-black' } w-[80%] mx-auto  border-2  px-4 py-2`}
                          />
                        )
                      }
                    }
                  </LocaleConsumer>
                  <LocaleConsumer>
                    {
                      ({ locale }) => {
                        return (
                          <button type='submit' className='w-[80%] mx-auto py-2 bg-[#169E16] font-bold text-white'>{ locale === 'id' ? 'Simpan' : 'Save'}</button>
                        )
                      }
                    }
                  </LocaleConsumer>
                </form>
              )
            }
          }
        </ThemeConsumer>

    );
  }
}

NoteInput.propsTypes = {
  addNote: PropsTypes.func.isRequired,
};

export default NoteInput;