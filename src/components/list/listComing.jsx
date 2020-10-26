import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkComingProduct } from '../../common/filterProducts';
import { fetchProducts } from '../../redux/actions/productAction';

function ComingMovies() {

    const { products, loading, error } = useSelector(state => state.product);

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchProducts());
    },[dispatch]);

    return (
        <div className="container">
            <h1 className="listMovies__title">Phim sắp chiếu</h1>
            <div className="listMovies">            
                {loading ? (
                <p>Loading...</p>
                ) : error ? (
                    <p>{error.message}</p>
                ): (
                    products.filter((product) => checkComingProduct(product.releaseDate))
                    .map((e, i) => (
                        <div className="listMovies__item" key={i}>
                            <a href={`/film/detail/${e.id}`} className="listMovies__link">
                                <img src={e.image} alt="imgMovies"/>
                            </a> 
                            <p className="listMovies__name">{e.name}</p>
                            <p className="listMovies__type">Thể loại: {e.type}</p>
                            <p className="listMovies__time">{e.time} phút</p>
                            <p className="listMovies__premiere">Khởi chiếu: {e.releaseDate}</p>
                        </div>     
                    ))
                )}
            </div>
        </div>
    );
}

export default ComingMovies;