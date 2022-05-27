export const ITEM_ADD = "ITEM_ADD";
export const ITEM_DELETE = "ITEM_DELETE";
export const ITEM_SORT = "ITEM_SORT";

const initialState = {
    items: [],
    itemSorting: false
}

export const mainReducer = (state = initialState, action) => {
    switch(action.type) {

        case ITEM_ADD:

        let items = {
            id: action.payload,
            randomNumber: action.payload
        }

        const mainItems = [...state.items, items]

        return {...state, items: mainItems}

        case ITEM_DELETE:

            const filterData = state.items?.filter((item) => {
                return item.id !== action.payload
            })
    
        return {...state, items: filterData}

        case ITEM_SORT:

        //    let sortData = [...state.items.sort(function(a, b) {
        //         return a.randomNumber - b.randomNumber;
        //       })];

              return {...state, itemSorting: true};

        default:
            return state;
    }
}