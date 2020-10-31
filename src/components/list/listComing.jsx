import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkComingProduct } from '../../common/filterProducts';
import { fetchProducts, getSearch } from '../../redux/actions/productAction';

function ComingMovies() {

    const { products, loading, error, searchValue } = useSelector(state => state.product);
    const typingTimeOutRef = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(fetchProducts(searchValue));
    },[dispatch,searchValue]);

    const onChange = (value) => {

        const action = getSearch(value);
        
        if(typingTimeOutRef.current){
            clearTimeout(typingTimeOutRef.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            console.log(action);
            dispatch(action);
        },300); 
        
    };

    return (
        <div className="container">
            <div className="listMovies__top">
                <h1 className="listMovies__title">Phim sắp chiếu</h1>
                <div className="listMovies__search">
                    <label htmlFor="">Tìm Kiếm:</label>
                    <input
                        placeholder="Tìm kiếm phim ở đây"
                        value= {searchValue }
                        onChange={(value) => onChange(value.target.value)}
                    />
                </div>
            </div>
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