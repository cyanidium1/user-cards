import React, { useEffect, useState } from 'react';
import User from 'components/User/User';
import s from './UserList.module.css';
import axios from 'axios';
import LoadMore from 'components/LoadMore/LoadMore';

const UserList = () => {
  const [data, updData] = useState([]);
  const [displayBtn, changeDisplayBtn] = useState(false);

  useEffect(() => {
    axios
      .get(`https://64c3c20767cfdca3b6603e52.mockapi.io/api/cards/users`)
      .then(res => {
        updData(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <ul className={s.container}>
        {data.map(el => (
          <li key={el.id}>
            <User info={el} />
          </li>
        ))}
      </ul>
      {displayBtn && (
        <div className={s.load}>
          <LoadMore />
        </div>
      )}
    </>
  );
};

export default UserList;
