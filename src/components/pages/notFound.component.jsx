import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/footer.component';
import Header from '../partials/header.component';
function NotFound(props) {
    return (
       <>
            <Header />
            <div className="not-found">
                <h1>404</h1>
                <h3>Không tìm thấy trang</h3>
                <p>Vui lòng click vào đường dẫn bên dưới để quay lại trang chủ:</p>
                <Link to="/">Trang chủ</Link>
            </div>
            <Footer />
       </>
    );
}

export default NotFound;