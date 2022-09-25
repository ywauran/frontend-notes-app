import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNote, getNote } from '../utils/network-data';
import { BiTrash } from 'react-icons/bi';
import ThemeContext from '../contexts/ThemeContext';
import { showFormattedDate }  from '../utils/index';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  

  const [note, setNote] = useState({
    title: '',
    body: '',
    createdAt: '',
  });

  useEffect(() => {
    async function getNoteDetail(id) {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      }
    }

    getNoteDetail(id);
  }, [id]);

  return (
    <div className={`${theme === 'dark' ? 'text-white' : 'text-black'} ${theme === 'dark' ? 'border-white' : 'border-black'}  p-5 border-2`}>
      <h3 className='text-lg'>{note.title}</h3>
      <p className='text-md'>{showFormattedDate(note.createdAt)}</p>
      <p className='text-sm text-justify'>{note.body}</p>
      <div className='flex justify-end'>
        <button onClick={() => {
          deleteNote(id);
          navigate('/');
        }}>
          <BiTrash/>
        </button>
      </div>
    </div>
  )
}

export default DetailPage;

