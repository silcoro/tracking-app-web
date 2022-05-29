import {
    GET_PRODUCT,
    CREATE_PRODUCT

} from './constants.js';


export const initialState = {

    productsOrigin: [],
    products:[],
    create_product:{}
}

export default function reducer(state= initialState, action){    
    if (action.type === GET_PRODUCT) {
        return{
            ...state,
            productsOrigin:action.payload,
            products:action.payload
        }
    }
    
    if (action.type ===CREATE_PRODUCT) {
        return{
            ...state,
            create_product:action.payload
        }
    }
    return state
}

