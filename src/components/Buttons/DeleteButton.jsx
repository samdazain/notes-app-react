import React from 'react';
import { FiTrash } from 'react-icons/fi';
import { func } from 'prop-types';

const DeleteButton = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="text-red-500">
      <FiTrash />
    </button>
  );
};

DeleteButton.propTypes = {
  onDelete: func.isRequired,
};

export default DeleteButton;
