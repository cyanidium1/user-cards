import React from 'react';
import s from './DropdownMenu.module.css';

const DropdownMenu = ({ showOpt }) => {
  const handleChange = event => {
    showOpt(event.target.value);
  };

  return (
    <div>
      <label className={s.item}>
        Which users do you want to see?
        <select className={s.item} onChange={handleChange}>
          <option className={s.item} value="1">
            All
          </option>

          <option className={s.item} value="2">
            Following
          </option>

          <option className={s.item} value="3">
            Not following
          </option>
        </select>
      </label>
    </div>
  );
};

export default DropdownMenu;
