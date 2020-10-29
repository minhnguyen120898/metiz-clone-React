import { getProduct, getProductDetail } from "../../api/productApi";

export const fetchProducts = () => {

    return async (dispatch) => {
        try {
            const res = await getProduct();
            dispatch(setProduct(res.data));
        } catch (error) {
            fetchProductFailled(error);
        }
        
    };
}

export const fetchProductDetail = (id) => {

    return async (dispatch) => {
        try {
            const res = await getProductDetail(id);
            dispatch(setProductDetail(res.data));
        } catch (error) {
            fetchProductFailled(error);
        }
    }
}

export const setProduct = (product) => {
    return {
      type: "FETCH_PRODUCTSUCCESS",
      dataProduct: product,
    };
};

export const setProductDetail = (productDetail) => {
    return {
        type : "FETCH_PRODUCTDETAIL",
        dataProduct: productDetail
    }
}

export const fetchProductFailled = (error) => { 
    return {
        type: "FETCH_PRODUCTFAILURE",
        error,
    }
}

export const commingSoonProduct = (product) => {
    return {
        type: "COMINGSOON_PRODUCTS",
        product,
    }
}

export const showingProduct = (product) => {
    return {
        type: "SHOWING_PRODUCTS",
        product,
    }
}