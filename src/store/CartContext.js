import { createContext } from 'react';

const calcTotalPrice = cartList =>
    cartList
        .map(cart => cart.qty * cart.price)
        .reduce((acc, cur) => acc + cur, 0);

export const cartReducer = (state, action) => {
    const cartList = [...state.cartList];
    const index = cartList.findIndex(cart => cart.id === action.payload.id);
    switch (action.type) {
        case 'add_to_cart':
            if (index === -1) {
                cartList.push(action.payload);
            } else {
                cartList[index].qty += action.payload.qty;
            }

            return {
                ...state,
                cartList,
                total: calcTotalPrice(cartList),
            };
        case 'change_cart_qty':
            cartList[index].qty = action.payload.qty;

            return {
                ...state,
                cartList,
                total: calcTotalPrice(cartList),
            };
        case 'remove_cart_item':
            cartList.splice(index, 1);

            return {
                ...state,
                cartList,
                total: calcTotalPrice(cartList),
            };
        default:
            return state;
    }
};

export const cartInit = {
    cartList: [],
};

export const CartContext = createContext({});
