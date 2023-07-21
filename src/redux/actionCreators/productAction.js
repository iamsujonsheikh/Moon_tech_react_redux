import { ADD_TO_CART, REMOVE_FROM_CARD } from "../actionTypes/actionTypes"

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export default addToCart;

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CARD,
        payload: product
    }
}