import React from 'react';

function Footer(props) {
    return (
        <footer className="footer container-fluid">
            <div className="container">
                <div className="list-social">
                    <ul className="list-social__inline">
                        <li>
                            <a href="./">
                                <img src="https://metiz.vn/static/assets/websites/images/social/icon_facebook_hover.png" alt="social"/>
                            </a>
                        </li>
                        <li>
                            <a href="./">
                                <img src="https://metiz.vn/static/assets/websites/images/social/icon_instagram_hover.png" alt="social"/>
                            </a>
                        </li>
                        <li>
                            <a href="./">
                                <img src="https://metiz.vn/static/assets/websites/images/social/icon_youtube_hover.png" alt="social"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <div className="row footer__content">
                        <div className="col-12 col-sm-4">
                            <img src="https://metiz.vn/static/assets/websites/images/logo_footer.png" alt=""/>
                            <h3 className="footer__address">Tầng 1 Helio Center,
                                <span>
                                    <br/>
                                </span> Đường 2/9,
                                <span>
                                    <br/>
                                </span>
                                Hải Châu, Đà Nẵng 
                            </h3>
                        </div>
                        <div className="col-12 col-sm-4">
                            <h2>METIZ CINEMA</h2>
                            <ul className="list">
                                <li><a href="./">Giới thiệu</a></li>
                                <li><a href="./">Tuyển dụng</a></li>
                                <li><a href="./">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-4">
                            <h2>THÔNG TIN CHUNG</h2>
                            <ul className="list">
                                <li><a href="./">Điều khoản chung</a></li>
                                <li><a href="./">Câu hỏi thường gặp</a></li>
                                <li><a href="./">Điều khoản giao dịch</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row footer__content2">
                        <div className="col-12 col-sm-9">
                            <p>Tên Doanh Nghiệp: Công Ty TNHH KHỞI PHÁT.</p>
                            <p>Giấy CNĐKKD: 0400668112 - Ngày cấp: 05/11/2008. Đăng ký thay đổi lần thứ 11 ngày 21/12/2016</p>
                            <p>Cơ quan cấp: Phòng Đăng ký kinh doanh - Sở kế hoạch và đầu tư Thành phố Đà Nẵng</p>
                            <p>Địa chỉ đăng ký kinh doanh: 22 đường 2/9, Phường Bình Hiên, Q.Hải Châu, Tp.Đà Nẵng, Việt Nam.</p>
                            <p>Điện thoại: <a href="tel:0236 3630 689">0236 3630 689</a></p>
                        </div>
                        <div className="col-12 col-sm-3">
                            <a href="./">
                                <img className="icon-notify" src="https://metiz.vn/static/assets/websites/images/icon-notify.png" alt=""/>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <p>MỘT SẢN PHẨM ĐẾN TỪ KHỞI PHÁT, LTD.</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <img className="footer__endImg" src="https://metiz.vn/static/assets/websites/images/logo_bottom.png" alt=""/>
                        </div>
                        <div className="col-12 col-sm-4">
                            <p className="text-right">BẢN QUYỀN © 2017 Metiz CINEMA</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;