import React from 'react'


const TopNav = () => {
    return (
        <div className="Top_Nav" id="home">
            <div className="container">
                <div className="row">
                    <div className="left mx-auto">
                        <div className="col-lg-6">
                            <ul className="d-flex">
                                <li className="nav-link bg_set"><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li className="nav-link bg_set"><a href="#"><i className="fa fa-github"></i></a></li>
                                <li className="nav-link bg_set"><a href="#"><i className="fa fa-google"></i></a></li>
                                <li className="nav-link bg_set"><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right mx-auto">
                        <div className="col-lg-6 ">
                            <h1>MAIRAJ'S</h1>
                            <p className="font-weight-bold">BLOG</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNav
