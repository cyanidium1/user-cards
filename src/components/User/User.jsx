import React from 'react';
import s from './User.module.css';
import goitLogo from '../../images/Logo.png';
import mainPicture from '../../images/picture2 1.png';
import userPicture from '../../images/Boy.png';
import Follow from 'components/Follow/Follow';
import frame from '../../images/frame.svg';

const User = ({ info, isFollowed, onClick }) => {
  const avatar = info.avatar ? info.avatar : userPicture;

  const { followers, tweets } = info;

  const handleClick = () => {
    onClick(info.id);
  };

  return (
    <div className={s.container}>
      <img className={s.goitLogo} src={goitLogo} alt="goit logo" />
      <img src={mainPicture} alt="main logo" />
      <div className={s.userBlock}>
        <div className={s.line}></div>
        <img className={s.userPicture} src={avatar} alt="user pic" />
        <img className={s.frame} src={frame} alt="frame" />
      </div>

      <p className={s.text}>{tweets} tweets</p>
      <p className={s.text}>{followers.toLocaleString()} followers</p>
      <Follow text="Follow" action={handleClick} isFollowed={isFollowed} />
    </div>
  );
};

export default User;
