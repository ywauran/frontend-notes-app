import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

const NoteList = ({ notes }) => {
  return (
    <div className='flex flex-col flex-wrap space-y-4 px-5'>
      {notes.length
        ? notes.map((note) => <NoteItem key={note.id} {...note} />)
        : 'Tidak ada catatan'}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
