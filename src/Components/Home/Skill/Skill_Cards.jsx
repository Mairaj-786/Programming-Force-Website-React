import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Skill_Cards = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    const [StopAos, setStopAos] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', scrollHandle);

    }, []);
    const scrollHandle = () => {
        if (window.screenY > 200) {
            setStopAos(true)
        } else {
            setStopAos(false)
        }
    }

    return (
        <>
            <div className="skills_card mx-auto pb-5">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 col-12  mt-3">
                            <div data-aos='fade-up' className="Skill_IMG mx-auto">
                                <img src="./images/django.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12  mt-3">
                            <div data-aos="fade-up" className="Skill_IMG mx-auto">
                                <img src="/images/react.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12  mt-3">
                            <div data-aos="flip-up" className="Skill_IMG mx-auto">
                                <img src="/images/postgresql.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12  mt-3">
                            <div data-aos="flip-down" className="Skill_IMG mx-auto">
                                <img src="/images/boot.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12  mt-3">
                            <div data-aos="flip-right" className="Skill_IMG mx-auto">
                                <img src="/images/React.png" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12  mt-3">
                            <div data-aos="flip-right" className="Skill_IMG mx-auto">
                                <img src="/images/ajax.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skill_Cards
