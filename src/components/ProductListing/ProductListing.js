import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductComponent from '../ProductComponent/ProductComponent'
import { setProducts } from "./../../redux/actions/productActions"

const ProductListing = () => {

    const dispatch = useDispatch()

    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products`)
            const data = await response.json()
            console.log(data)
            dispatch(setProducts(data))
        } catch (error) {
            console.log(`err : ${error}`)
        }
    }

    useEffect(() => {
        fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='ui grid container' >
            <ProductComponent />
        </div>
    )
}

export default ProductListing