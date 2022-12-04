import { ActionTypes } from "./../costants/action.types"
import { API } from "../../backend"

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await fetch(`${API}/products`)
        const data = await response.json()
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: data
        })
    } catch (error) {
        console.log(`err : ${error}`)
    }
}

export const fetchProduct = (productId) => async (dispatch) => {
    try {
        const response = await fetch(`${API}/products/${productId}`)
        const data = await response.json()
        dispatch({
            type: ActionTypes.SELECTED_PRODUCT,
            payload: data
        })
    } catch (error) {
        console.log(`err : ${error}`)
    }
}

// Part 1 : without middleware -> API calls in the components
// export const setProducts = (products) => {
//     return {
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products
//     }
// }

// export const selectedProduct = (product) => {
//     return {
//         type: ActionTypes.SELECTED_PRODUCT,
//         payload: product
//     }
// }

export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}