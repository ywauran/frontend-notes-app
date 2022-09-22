import React from 'react';
import PropsTypes from 'prop-types';

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
      <form className='flex flex-col space-y-4 mt-4' onSubmit={this.onSubmitEventHandler}>
        <input
          type='text'
          placeholder='Judul'
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          className='w-[80%] mx-auto bg-[#373737] text-white placeholder:text-white px-4 py-2'
        />
        <input
          type='text'
          placeholder='Body'
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          className='w-[80%] mx-auto bg-[#373737] text-white placeholder:text-white px-4 py-2'
        />
        <button type='submit' className='w-[80%] mx-auto py-2 bg-[#169E16] font-bold'>Save</button>
      </form>
    );
  }
}

NoteInput.propsTypes = {
  addNote: PropsTypes.func.isRequired,
};

export default NoteInput;