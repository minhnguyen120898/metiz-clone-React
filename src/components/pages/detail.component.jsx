import React from 'react';
import Detail from '../detail/detai';
import Footer from '../partials/footer.component';
import Header from '../partials/header.component';

function DetailProducts(props) {
    return (
        <div>
            <Header />
            <Detail />
            <Footer />
        </div>
    );
}

export default DetailProducts;