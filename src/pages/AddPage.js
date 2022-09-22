import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/data';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }
  return (
    <div>
      <h2 className='text-center text-xl'>Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}

export default AddPage;
