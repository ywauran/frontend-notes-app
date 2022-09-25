import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import { Link } from 'react-router-dom';


const NoteItem =  ({ id, title, createdAt, body }) => {
  const { theme } = useContext(ThemeContext);

  return (
  <div className={ `${theme === 'dark' ? 'border-white' : 'border-black'} ${theme === 'dark' ? 'text-white' : 'text-black'}  text-justify border-2  p-2`}>
    <Link to={`/notes/${id}`}><h3 className='text-lg'>{title}</h3></Link>
    <NoteItemBody createdAt={createdAt} body={body}/>
  </div>
  );
};

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteItem;
