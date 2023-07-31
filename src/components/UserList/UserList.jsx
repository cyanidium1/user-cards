import React, { useEffect, useState } from 'react';
import User from 'components/User/User';
import s from './UserList.module.css';
import axios from 'axios';
import Button from 'components/Button/Button';

const UserList = () => {
  const [data, updData] = useState([]);
  const [filteredArray, updFiltered] = useState(data);
  const [filterBtn, updFilterBtn] = useState(1);

  const [numOfCards, setNumOfCards] = useState(3);
  const [follows, setFollows] = useState(
    JSON.parse(localStorage.getItem('follows')) ?? []
  );

  useEffect(() => {
    axios
      .get(`https://64c3c20767cfdca3b6603e52.mockapi.io/api/cards/users`)
      .then(res => {
        updData(res.data);
        updFiltered(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  const updLocalStorage = id => {
    if (!follows.includes(id)) {
      setFollows([...follows, id]);
    } else {
      setFollows(follows.filter(number => number !== id));
    }
  };
  localStorage.setItem('follows', JSON.stringify(follows));

  const loadMore = () => {
    setNumOfCards(numOfCards + 3);
  };

  const showOpt = num => {
    switch (num) {
      case 1:
        updFiltered(data);
        updFilterBtn(1);
        break;
      case 2:
        updFiltered(data.filter(el => follows.includes(el.id)));
        updFilterBtn(2);
        break;
      case 3:
        updFiltered(data.filter(el => !follows.includes(el.id)));
        updFilterBtn(3);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={s.filter}>
        <Button
          onClick={showOpt}
          text={'All'}
          num={1}
          isActive={filterBtn === 1}
        />
        <Button
          onClick={showOpt}
          text={'Followed'}
          num={2}
          isActive={filterBtn === 2}
        />
        <Button
          onClick={showOpt}
          text={'Not followed'}
          num={3}
          isActive={filterBtn === 3}
        />
      </div>
      <ul className={s.container}>
        {filteredArray.slice(0, numOfCards).map(el => (
          <li key={el.id}>
            <User
              info={el}
              isFollowed={follows.includes(el.id)}
              onClick={updLocalStorage}
            />
          </li>
        ))}
      </ul>
      {filteredArray.length > numOfCards && (
        <div className={s.load}>
          <Button onClick={loadMore} text={'Load more'} />
        </div>
      )}
    </>
  );
};

export default UserList;
