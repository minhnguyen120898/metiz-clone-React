import instanceAxios from "./instanceAxios";

export const getProduct = (valueSearch) => {
    
    let URLparams = "";
    URLparams+= (valueSearch ? (`&name_like=${valueSearch}`) : ""); 

    const url = `/products?${URLparams}`;
    return instanceAxios.get(url);
}

export const getProductDetail = (productID) => {
    const url = `/products/${productID}`;

    return instanceAxios.get(url);
}



