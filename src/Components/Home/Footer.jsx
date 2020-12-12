import React from 'react'

const Footer = () => {
    return (
        <div className="Footer" id="footer" >
            <div className="container ">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer_inner pt-2">
                            <span>DISCLAMER PRIVACY POLICY</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer_inner pt-2">
                            <i className="fa fa-copyright"></i>
                            <span className="font-weight-bold ml-2">Mairaj Khan 2020</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer_inner pt-2">
                            <ul className="d-flex">
                                <li className="nav-link"><a href="https://web.facebook.com/?_rdc=1&_rdr"><i className="fa fa-facebook"></i></a></li>
                                <li className="nav-link"><a href="https://github.com/Mairaj-786"><i className="fa fa-github"></i></a></li>
                                <li className="nav-link"><a href="https://mail.google.com/mail/u/0/?ogbl"><i className="fa fa-google"></i></a></li>
                                <li className="nav-link"><a href="google"><i className="fa fa-linkedin"></i></a></li>
                                <li className="nav-link"><a href="/delete"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
