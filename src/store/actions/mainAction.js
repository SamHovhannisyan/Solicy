import { ITEM_ADD, ITEM_DELETE, ITEM_SORT } from './../reducers/itemReducer';


export const item_get = (randomNumber) => {
    return dispatch => {
        dispatch({type: ITEM_ADD, payload: randomNumber})
    }
}

export const delete_item = (id) => {
    return dispatch => {
        dispatch({type: ITEM_DELETE, payload: id})
    }
}

export const sortAction = (payload) => {
    return dispatch => {
        dispatch({type: ITEM_SORT, payload})
    }
}