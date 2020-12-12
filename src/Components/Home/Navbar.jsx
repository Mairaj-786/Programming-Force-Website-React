import React, { useState, useEffect } from 'react'
import Benifit from './Benifit'

const Navbar = () => {
    const [Nav, SetNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", handelScrollNav);
    }, []);

    const handelScrollNav = () => {
        if (window.scrollY > 10) {
            SetNav(true)
        } else {
            SetNav(false)
        }
    }
    return (
        <>
            <div className="Navbar">
                <nav className={`navbar navbar-expand-lg ${Nav ? 'fixed-top' : ''} `}>
                    <div className="container">
                        <a className="navbar-brand" href="#">Programming<br /> Force</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">About Us <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Our Team</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Careers</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Perks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Life at PF</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar
