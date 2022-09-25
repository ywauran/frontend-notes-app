import React from 'react';
import { useNavigate } from 'react-router-dom';
import NoteInput from '../components/NoteInput';
import { addNote } from '../utils/network-data';
import { ThemeConsumer } from '../contexts/ThemeContext';
import { LocaleConsumer } from '../contexts/LocaleContext';

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate('/');
  }

  return (
    <div>
      <ThemeConsumer>
        {
          ({ theme }) => {
            <LocaleConsumer>
              {
                ({ locale }) => {
                  return (
                    <h2 className={`${theme === 'dark' ? 'text-white' : 'text-black'} text-center text-xl font-semibold`}>{ locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</h2>
                  )
                }
              }
            </LocaleConsumer>
          }
        }
      </ThemeConsumer>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}

export default AddPage;
