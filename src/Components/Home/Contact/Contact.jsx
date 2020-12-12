import React from 'react'
const Contact = () => {

    return (
        <div className="contact mt-4" id="Contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F6F9FA" fill-opacity="1"
                    d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,160C672,149,768,139,864,165.3C960,192,1056,256,1152,282.7C1248,309,1344,299,1392,293.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                </path>
            </svg>
            <h1 className="font-weight-bold text-center text-white pb-5 mb-4">Contact</h1>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="right_side" data-aos="fade-down">
                            <div className="contact_form p-4 border text-center">
                                <h1>Lets'<span className="ml-2">connect</span></h1>
                                <div className="form-group">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="message"></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-info w-75" >Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ddd" fill-opacity="1" d="M0,224L120,192C240,160,480,96,720,106.7C960,117,1200,203,1320,245.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
        </div >
    )
}

export default Contact
