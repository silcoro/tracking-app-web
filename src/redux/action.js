import {
    GET_PRODUCT,
    CREATE_PRODUCT

} from './constants.js';

import axios from 'axios';

// const { URL_BACK } = process.env;

export function getProducts(){
    return dispatch => {
        axios.get(`http://localhost:3001/product`)
        .then((result) => {
            return dispatch({
                type:GET_PRODUCT,
                payload:result.data
            })
        }).catch((err) => {
            console.log(`err`, err)
        });
    }
}

export function create_producto(values){
    return dispatch => {
        axios.post(`http://localhost:3001/product/create`,values)
        .then((result) => {
            return dispatch({
                type:CREATE_PRODUCT,
                payload: result.data
            })
        }).catch((err) => {
            console.log(`err`, err)
        });
    }

}