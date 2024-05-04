import { ProductionActionTypes } from "../constants/product-action-types";

export const allProducts = (products) => {
    return {
        type: ProductionActionTypes.ALL_PRODUCTS,
        payload: products
    };
};

export const selectedProducts = (product) => {
    return {
        type: ProductionActionTypes.SELECTED_PPRODUCT,
        payload: product
    };
};


export const removeProducts = () => {
    return {
        type: ProductionActionTypes.REMOVE_PRODUCT,
    };
};
