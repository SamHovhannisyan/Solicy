import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { items, itemSorting } from "../../store/selectors/itemSelectors";
import MainItem from './mainItem';
import css from './item.module.css';

function Item() {

    const itemsData = useSelector(items, shallowEqual);
    const sorting = useSelector(itemSorting, shallowEqual);


    console.log(itemsData, "-------");

    return (
        <div>
            <div className={css.mainDiv}>
                {!sorting ?
                    itemsData?.map((item) => {
                        return <MainItem item={item} />
                    }) : itemsData?.sort((a, b) => a.randomNumber - b.randomNumber)
                                    .map(item => {
                                        return <MainItem item={item} />
                                    })
                }
            </div>
        </div>
    )
}

export default Item;