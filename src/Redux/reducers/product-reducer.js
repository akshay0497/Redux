import { ProductionActionTypes } from "../constants/product-action-types"

const initialState = {
    productList: []
}

export const productReducer = (state =initialState, action) => {
    switch (action.type) {
        case ProductionActionTypes.ALL_PRODUCTS:
            return {...state, productList:action.payload};
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type, payload}) =>{
    switch (type) {
        case ProductionActionTypes.SELECTED_PPRODUCT:
            return {...state, ...payload};
            case ProductionActionTypes.REMOVE_PRODUCT:
                return {};
        default:
            return state;
    }
}