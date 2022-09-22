import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

const NoteItemBody = ({ createdAt, body }) => {
  return (
    <div className=''>
      <p className='text-md'>{showFormattedDate(createdAt)}</p>
      <p className='text-sm'>{body}</p>
    </div>
  );
}

NoteItemBody.propTypes = {
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default NoteItemBody;
