import React from 'react';
import s from './Follow.module.css';

const Follow = ({ isFollowed, action }) => {
  return (
    <button
      className={isFollowed ? s.followed : s.notFollowed}
      onClick={() => action()}
    >
      {isFollowed ? 'Following' : 'Follow'}
    </button>
  );
};

export default Follow;
