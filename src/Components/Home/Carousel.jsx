import React, { useState, useEffect } from 'react'
import Contact from './Contact/Contact';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skill/Skills';


const Carousel = () => {
    // parallex H1
    const [OffSetY, setOffSetY] = useState(0);
    const handleScroll = () => setOffSetY(window.pageYOffset);


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    return (
        <>
            <div className="Carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h1 className=" text-center">Welcome To MyBlog</h1>
                            <img src="/images/slide1.jpg" className="d-block w-100" alt="..." style={{ transform: `translateY(-${OffSetY * 0.4}px)` }} />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <Skills />
            <Portfolio />
            <Contact />


        </>
    )
}

export default Carousel
