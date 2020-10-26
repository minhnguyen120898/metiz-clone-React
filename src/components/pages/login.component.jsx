import React from 'react';
import Footer from '../partials/footer.component';
import Header from '../partials/header.component';

function Login(props) {
    return (
        <div>
            <Header />
            <div className="login">
                <p className="login__title">Đăng nhập</p>
                <form action="" method="post">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" placeholder="Nhập email ở đây"/>
                        </div>
                        <div className="col-12 col-md-6">
                            <label htmlFor="email">Mật Khẩu:</label>
                            <input type="text" name="email" placeholder="Nhập mật khẩu ở đây"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="login__btn-login">Đăng nhập</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <a href="./" className="login__forgetPassword">Tìm lại mật khẩu</a>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;