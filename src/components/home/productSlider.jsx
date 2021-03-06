import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commingSoonProduct, fetchProducts, showingProduct } from '../../redux/actions/productAction';
import Slider from "react-slick";
import { checkComingProduct, checkShowingProduct } from '../../common/filterProducts';

function ProductSlider() {
    const dispatch = useDispatch();
    const { products , loading, error, filter } = useSelector(state => state.product);

    const [movieState, setMovieState] = useState(true);

    const handleProducts = (params) => {
        let product = [];
        if(params === true) {
            product = products.filter((product) => checkShowingProduct(product.releaseDate));  
            dispatch(showingProduct(product));
            setMovieState(true);
        }
        else {
            product = products.filter((product) => checkComingProduct(product.releaseDate));               
            dispatch(commingSoonProduct(product));
            setMovieState(false);
        }
    }
    
    useEffect(() => {
        const actionProduct = fetchProducts();
        dispatch(actionProduct);
    },[dispatch]);

    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
        <div className="product container-fluid">
            <div className="container">
                <ul className="product__nav">
                    <li onClick = {() => handleProducts(true)} className={movieState? "active" : ""}>PHIM ĐANG CHIẾU</li>
                    <li onClick = {() => handleProducts(false)} className={movieState? "" : "active"}>PHIM SẮP CHIẾU</li>
                </ul>
                {loading ? (
                <p>Loading...</p>
                ) : error ? (
                    <p>{error.message}</p>
                ): (
                    <Slider {...settings}>
                        {filter
                        .map((e, i) => (                              
                            <div className="product__box" key={i}>
                                <a href={`/film/detail/${e.id}`} className="product__poster">                                    
                                    <img src={e.image} alt="images" className="product__img" />                                                           
                                </a>
                                <div className="product__content">
                                    <h3 className="product__title">
                                        {e.name}
                                    </h3>
                                    <p className="product__date">{e.releaseDate}</p>
                                </div>
                                <a href="./" className="product__book">ĐẶT VÉ</a>
                            </div>                                     
                        ))}
                    </Slider>      
                )}
            </div>
        </div>
    );
}

export default ProductSlider;