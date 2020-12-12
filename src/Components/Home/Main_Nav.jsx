import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Main_Nav = () => {
    // fixed nav
    const [NavState, setNavState] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 180) {
            setNavState(true)
        } else {
            setNavState(false)
        }

    }
    // ham show on mobile
    const [ShowLinks, SetShowLinks] = React.useState(false);
    return (
        <>
            {/* Add fixed-top class for make sticky navbar */}
            <nav class={`navbar navbar-expand-lg navbar-light bg-light ${NavState ? 'fixed-top NavBGSet' : ''}`}>
                {/* add class on Click bars */}
                <button class="navbar-toggler" onClick={() => { SetShowLinks(!ShowLinks) }} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className={`${ShowLinks ? 'fa fa-times' : 'fa fa-bars'}`}></i>

                </button>
                {/* toggle NavBar */}
                <div class={`collapse navbar-collapse ${ShowLinks ? 'Hide_nave' : ''}`} id="navbarNav">
                    <ul class='navbar-nav m-auto font-weight-bold'>

                        <li class="nav-item">
                            <Link class="nav-link  pl-5" to="/">Home</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link pl-5 " to="/Aboutme">About me</Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-5" href="/#skill">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-5" href="/#Portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link pl-5" href="/#Contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <div className="Main_Nav mx-auto">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-2">
                            <i className='fa fa-bars' onClick={() => { SetShowLinks(!ShowLinks) }}></i>

                        </div>
                        <div className="col-lg-12">
                            <div className={`nav ${NavState ? 'fixed-top bgSet ' : ''}`}>
                                <div className="nav mx-auto">
                                    <ul className={` mt-1 mx-auto font-weight-bold ${ShowLinks ? 'Hide_nav' : ''}`}>
                                        <img src={` ${NavState ? '/images/Mairaj.png' : ''}`} className={` ${NavState ? 'setLogo' : ''}`} />
                                        <li className="nav-link" activeClassName="active"><Link to="/" className={`nav ${NavState ? 'text' : ''}`}>Home</Link></li>
                                        <li className="nav-link"><a href="/#skill" className={`nav ${NavState ? 'text' : ''}`}>Skills</a></li>
                                        <li className="nav-link"><a href="/#Portfolio" className={`nav ${NavState ? 'text' : ''}`}>Portfolio</a></li>
                                        <li className="nav-link"><a href="/#Contact" className={`nav ${NavState ? 'text' : ''}`}>Contact</a></li>
                                        <li className="nav-link"><Link to="/aboutme" className={`nav ${NavState ? 'text' : ''}`}>Aboutme</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>

    )
}


export default Main_Nav
