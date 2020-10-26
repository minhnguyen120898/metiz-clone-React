import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
            <header className="header container-fluid wrapper">
                <div className="container">
                    <div className="header__info">
                        <div className="header__info__phone">
                            Hotline: <a href="tel:0236 3630 689">0236 3630 689</a>
                        </div>
                        <div className="header__info__opentime">
                            Giờ mở cửa: 8:00 - 22:00
                        </div>
                    </div>
                    <div className="header__container">
                        <Link to="/" className="header__logo">
                            <img src="https://metiz.vn/static/assets/websites/images/Metiz_logo/METIZ_LOGO_WEB.png" alt="logo"/>
                        </Link>
                        <div className="header__nav">
                            <ul className="nav header__nav__left">
                                <li><a href="./">Lịch chiếu</a></li>
                                <li className="header__dropdown">
                                    <p>Phim</p>
                                    <div className="header__dropdown-menu">
                                        <Link to="/showing">Phim đang chiếu</Link>
                                        <Link to="/coming">Phim sắp chiếu</Link>
                                    </div>
                                </li>
                                <li><Link to="/">Rạp</Link></li>
                                <li><Link to="/">Khuyến mãi</Link></li>
                                <li><Link to="/">Thành viên</Link></li>
                            </ul>
                            <ul className="nav header__nav__right">
                                <li><Link to="/Login">Đăng nhập</Link></li>
                                <li><Link to="/">Đăng ký</Link></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </header>
    );
}

export default Header;