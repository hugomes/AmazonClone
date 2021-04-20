export const initialState = {
    basket:[],
    user: null
};

export const getBasketTotal = (basket) => 
    basket?.reduce((total, item)=> total + item.price,0);

export const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            if(action.idx >= 0){
                newBasket.splice(action.idx, 1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);
            }

            return {
                ...state, 
                basket: newBasket
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
    }
}

export default reducer;