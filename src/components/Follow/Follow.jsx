import React from 'react';
import s from './Follow.module.css';

const Follow = ({ isFollowed, action }) => {
  return (
    <button
      className={isFollowed ? s.followed : s.notFollowed}
      onClick={() => action()}
    >
      {isFollowed ? 'Followed' : 'Follow'}
    </button>
  );
};

export default Follow;
