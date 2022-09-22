import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './NoteItemBody';
import { Link } from 'react-router-dom';

const NoteItem =  ({ id, title, createdAt, body }) => {
  return (
  <div className='text-justify'>
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
