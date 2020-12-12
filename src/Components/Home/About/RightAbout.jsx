import React, { useState, useEffect } from 'react'

const RightAbout = () => {
    const [AboutOffSet, SetAboutOffSet] = React.useState(0);
    const handleSCroll = () => SetAboutOffSet(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleSCroll);
        return () => {
            window.removeEventListener("scroll", handleSCroll)
        }
    }, []);

    return (
        <div>
            <div className="about__me__right" style={{ transform: `translateY(-${AboutOffSet * 0.2}px)` }}>
                <h5 className="text-muted" >
                    Welcome To My Portfolio Find below
                    Industrial Experince & Skills.
                                </h5>
                <div className="experiance text-muted">
                    <p>* Built Web application using Python, Django, JavaScript, JQuery, HTML
                    and template languages to design server applications and client interfaces.
                                 </p>
                    <p>* Good experience in developing web applications implementing Model,View,Forms Control architecture using Python/Django web application framework.</p>
                    <p>
                        * Knowledge in development of applications using Python, HTML, ReactJS JavaScript, CSS, & understanding of JQuery.
                                </p>
                </div>
                <div className="majors">
                    <h2 className="text-muted"> Skills</h2>
                    <strong>Python :</strong>
                    <div class="myProgress"><div id="myBar">60%</div></div>
                    <strong>Django :</strong>
                    <div class="myProgress"><div id="myBar2">80%</div></div>
                    <strong>React JS :</strong>
                    <div class="myProgress"><div id="myBar3">50%</div></div>
                    <strong>JavaScript:</strong>
                    <div class="myProgress"><div id="myBar4">50%</div></div>
                    <strong>Mysql :</strong>
                    <div class="myProgress"><div id="myBar5">60%</div></div>
                    <strong>Bootstrap :</strong>
                    <div class="myProgress"><div id="myBar6">75%</div></div>
                    <strong>HTML :</strong>
                    <div class="myProgress"><div id="myBar7">80%</div></div>
                    <strong>CSS :</strong>
                    <div class="myProgress"><div id="myBar8">50%</div></div>
                    <strong>CSS (SASS) :</strong>
                    <div class="myProgress"><div id="myBar9">40%</div></div>
                    <strong>Git :</strong>
                    <div class="myProgress"><div id="myBar10">40%</div></div>

                </div>

            </div>

        </div>
    )
}

export default RightAbout
