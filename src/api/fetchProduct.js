import Axios from "axios";

export const getProduct = () => {
    let url = `http://localhost:3333/products?`;

    return Axios.get(url);
}

export const getProductDetail = (productID) => {
    let url = `http://localhost:3333/products/${productID}`;

    return Axios.get(url);
}