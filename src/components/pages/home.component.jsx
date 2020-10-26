import React from 'react';
import Header from '../partials/header.component';
import Footer from '../partials/footer.component';
import Slider from '../home/slider';
import ProductSlider from '../home/productSlider';
import News from '../home/news';
function Homepage(props) {
    return (
        <div className="wrapper">
            <Header />
            <main>
                <Slider />
                <ProductSlider />
                <News />
            </main>
            <Footer />
        </div>
    );
}

export default Homepage;