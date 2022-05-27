import React from 'react';
import css from './mainItem.module.css';
import { useDispatch } from 'react-redux';
import { delete_item } from '../../store/actions/mainAction';

function MainItem({item}) {

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(delete_item(id))
    };

  return (
        <div className={css.itemStayle} key={item.id}>
            <span onClick={() => deleteItem(item.id)}>x</span>
            <div>
                <h2>{item?.randomNumber}</h2>
            </div>
        </div>
  )
}

export default MainItem;