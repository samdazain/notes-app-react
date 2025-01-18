import React from 'react';
import { FiArchive } from 'react-icons/fi';
import { func } from 'prop-types';

const ArchiveButton = ({ onArchive }) => {
  return (
    <button onClick={onArchive} className="text-yellow-500">
      <FiArchive />
    </button>
  );
};

ArchiveButton.propTypes = {
  onArchive: func.isRequired,
};

export default ArchiveButton;
