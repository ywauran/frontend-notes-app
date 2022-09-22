import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';
import DeleteButton from './DeleteButton';

const NoteDetail = ({ id, title, createdAt, body, onDelete }) => {
  return (
    <div className='px-5'>
      <h3 className='text-lg'>{title}</h3>
      <p className='text-md'>{showFormattedDate(createdAt)}</p>
      <p className='text-sm text-justify'>{body}</p>
      <div className='flex justify-end px-5'>
        <DeleteButton id={id} onDelete={onDelete}/>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
