import React, { useState } from 'react';
import s from './Follow.module.css';

const Follow = ({ text, action }) => {
  const [isFollowed, changeFollowed] = useState(false);
  return (
    <button
      className={isFollowed ? s.followed : s.notFollowed}
      onClick={() => changeFollowed(!isFollowed)}
    >
      {isFollowed ? 'Followed' : 'Follow'}
    </button>
  );
};

export default Follow;
