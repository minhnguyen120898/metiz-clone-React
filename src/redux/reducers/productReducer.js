
const initialState = {
    products: [],
    error: false,
    loading: false,
    filter: [],
    productDetail : [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTSUCCESS': {
            return {
                ...state,
                products : action.dataProduct,
                filter : action.dataProduct
            }
        }
        case 'COMINGSOON_PRODUCTS' : {
            return {
                ...state,
                filter : action.product,
            }
        }
        case 'SHOWING_PRODUCTS' : {
            return {
                ...state,
                filter : action.product,
            }
        }
        case 'FETCH_PRODUCTDETAIL' : {
            return {
                ...state,
                productDetail : action.dataProduct,
            }
        }
        default: 
            return state;
    }
}

export default productReducer;