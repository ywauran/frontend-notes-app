import React from 'react';
import PropTypes from 'prop-types';
import { BiTrash } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const DeleteButton = ({ id, onDelete }) => {
  const navigate = useNavigate();
  return (
    <button
      className='w-max'
      onClick={() => {
        onDelete(id);
        navigate('/');
      }}
    >
      <BiTrash />
    </button>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
