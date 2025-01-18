import React from 'react';
import { FiInbox } from 'react-icons/fi';
import { func } from 'prop-types';

const UnarchiveButton = ({ onUnarchive }) => {
  return (
    <button onClick={onUnarchive} className="text-yellow-500">
      <FiInbox />
    </button>
  );
};

UnarchiveButton.propTypes = {
  onUnarchive: func.isRequired,
};

export default UnarchiveButton;
