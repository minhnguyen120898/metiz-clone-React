import instanceAxios from "./instanceAxios";

export const getProduct = () => {
    const url = `/products`;

    return instanceAxios.get(url);
}

export const getProductDetail = (productID) => {
    const url = `/products/${productID}`;

    return instanceAxios.get(url);
}



