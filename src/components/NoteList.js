import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../contexts/LocaleContext';

const NoteList = ({ notes }) => {
  return (
    <div className='flex flex-col flex-wrap space-y-4 px-5'>
      {notes.length
        ? notes.map((note) => <NoteItem key={note.id} {...note} />)
        : <LocaleConsumer>
            {({ locale }) => {
              return (
                <div>
                  {
                    locale === 'id' ? 'Tidak ada catatan' : 'Empty'
                  }
                </div>
              )
            }}
          </LocaleConsumer>}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
