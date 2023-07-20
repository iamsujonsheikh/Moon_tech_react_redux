import { ADD_TO_CART } from "../actionTypes/actionTypes"

const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export default addToCart;