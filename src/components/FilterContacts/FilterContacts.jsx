import React from "react";
import { nanoid } from 'nanoid';
import css from '../FilterContacts/FilterContacts.module.css';

const FilterContacts = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Filter<input
        type="text"
        value={value}
        id={nanoid()}
        name="filter"
        onChange={onChange} 
        className={css.input}
      />
    </label>
  );
}

export default FilterContacts;