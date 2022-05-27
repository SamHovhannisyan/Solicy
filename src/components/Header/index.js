import React from 'react';
import { useDispatch } from 'react-redux';
import css from './header.module.css';
import { item_get, sortAction } from './../../store/actions/mainAction';

function Header() {

    const dispatch = useDispatch();

    const addItem = () => {
        dispatch(item_get(Math.floor(Math.random() * 100)))
    }

    const sortItem = () => {
        dispatch(sortAction())
    }

  return (
    <div>
      <div className={css.btnDiv}>
          <button onClick={addItem}>Add card</button>
          <button onClick={sortItem}>Sort card</button>
      </div>
    </div>
  )
}

export default Header;
