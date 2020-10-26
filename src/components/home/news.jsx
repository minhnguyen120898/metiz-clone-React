import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../redux/actions/newsAction';

function News(props) {
    const dispatch = useDispatch(); 
    const { news, loading, error} = useSelector(state => state.news);   
    
    useEffect(() => {
        dispatch(fetchNews());
    },[dispatch])

    return (
        <div className="news container-fluid">
            <div className="container">
                <h2 className="news__title">Khuyến mãi & ưu đãi</h2>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="news__box">
                            <h3>Khuyến mãi hấp dẫn</h3>
                            <p>Khám phá ngay hàng trăm lợi ích dành cho bạn trong chuyên mục Khuyến mãi & Ưu đãi hấp dẫn của Metiz Cinema.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="news__show-more">
                            <a href="./">Xem nhiều hơn</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {loading ? (
                        <p>loading...</p> 
                    ): error ? (
                        <p>{error.message}</p>     
                    ):(
                        news.slice(0,4) 
                        .map((e,i) => (
                            <div className="col-6 col-md-3 news__img" key={i}>
                                <img src={e.image} alt=""/>
                                <a href="./" className="news__img-wrap">
                                    <p>Xem phim Metiz rước lồng đèn xinh. </p>
                                    <h4 className="btn-details">chi tiết</h4>
                                </a>
                            </div>   
                        ))
                    )}
                </div>
                
            </div>
        </div>
    );
}

export default News;