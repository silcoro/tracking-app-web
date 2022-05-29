import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from "../../redux/action";
import Card from "../Card/Card";


const ListProduct = () => {
    const productsList = useSelector(state => state.products)
    console.log('productsList', productsList)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

return (
    
    <Card ProductItem={productsList}/>
)

}

export default ListProduct