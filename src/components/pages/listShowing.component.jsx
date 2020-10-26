import React from 'react';
import Footer from '../partials/footer.component';
import Header from '../partials/header.component';
import ShowingMovies from '../list/listShowing';

function ListShowing(props) {

    return (
        <div className="container-fluid">
            <Header />
            <ShowingMovies />
            <Footer />
        </div>
    );
}

export default ListShowing;