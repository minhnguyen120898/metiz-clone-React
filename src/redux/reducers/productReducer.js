
const initialState = {
    products: [],
    error: false,
    loading: false,
    filter: [],
    productDetail : [],
    searchValue : ""
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
        case 'GET_SEARCH' : {
            return {
                ...state,
                searchValue : action.searchValue
            }
        }
        default: 
            return state;
    }
}

export default productReducer;