import React, { useState, useEffect } from 'react'

const LeftProfileAbout = () => {
    // parallex animation
    const [AboutOffSet, SetAboutOffSet] = React.useState(0);
    const handleSCroll = () => SetAboutOffSet(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleSCroll);
        return () => {
            window.removeEventListener("scroll", handleSCroll)
        }
    }, []);
    const [StopAboutOffSet, SetStopAboutOffSet] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', handleStopOffset);
    }, [])
    const handleStopOffset = () => {
        if (window.scrollY > 700) {
            SetStopAboutOffSet(true)
        } else {
            SetStopAboutOffSet(false)
        }

    }
    // end parallex animations

    return (
        <div className={` about__me__left ${StopAboutOffSet ? 'ImgUp' : 'ImgUp2'}`} style={{ transform: `translateY(${AboutOffSet * 0.6}px)` }}>
            <img src="/images/my.jpg" alt="" />
            <p>I am Miraj Khan,<span className="text-muted">a super simple<br />
                                    Software Developer</span>
            </p>
            <ul className='d-flex about_me__Links'>
                <li className="nav-link"><a href="https://github.com/Mairaj-786"><i className="fa fa-github" alt="github"></i></a></li>
                <li className="nav-link"><a href="https://github.com/Mairaj-786"><i className="fa fa-linkedin" alt="github"></i></a></li>
                <li className="nav-link"><a href="https://mairajrind4@gmail.com"><i className="fa fa-envelope" alt="Message"></i></a></li>

            </ul>
        </div >
    )
}

export default LeftProfileAbout
