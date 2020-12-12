import React from 'react'
import LeftProfileAbout from './LeftProfileAbout'
import RightAbout from './RightAbout'

const AboutHome = () => {
    return (
        <div className="About">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1"
                    d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,160C672,149,768,139,864,165.3C960,192,1056,256,1152,282.7C1248,309,1344,299,1392,293.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>
            <div className="about__me">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-12  mx-auto">
                            <LeftProfileAbout />
                        </div>
                        <div className="col-lg-8 col-md- col-12 ml-auto">
                            <RightAbout />
                        </div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,106.7C960,117,1200,203,1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export default AboutHome
