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

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = (product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}