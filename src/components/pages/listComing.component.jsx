import React from 'react';
import ComingMovies from '../list/listComing';
import Footer from '../partials/footer.component';
import Header from '../partials/header.component';

function ListComing(props) {
    return (
        <div className="container-fluid">
            <Header />
            <ComingMovies />
            <Footer />
        </div>
    );
}

export default ListComing;