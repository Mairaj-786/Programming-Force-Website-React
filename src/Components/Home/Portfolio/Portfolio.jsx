import React, { useState } from 'react'
import Basic_portfolio from './Basic_Portfolio'
import More_Portfolio from './More_Portfolio'

const Portfolio = () => {
    const [Portfolio, SetPortfolio] = React.useState({ basic: true, more: false, text: 'View more' });

    const UpdateViewBtn = () => {
        SetPortfolio({ basic: !Portfolio.basic, more: !Portfolio.more, text: Portfolio.text === "View more" ? 'Base' : 'View more' })
    }
    return (
        <>
            <div className="Portfolio" id="Portfolio">
                <div className="container text-center">
                    <div className="row">
                        <div className="Port_text mx-auto col-lg-10 ">
                            <h1>MAIRAJ'S<span className="Portfolio_text">PORTFOLIO</span></h1>
                            <p className='w-75 mx-auto'>Providing outsourcing software development services using optimized and trending
                            tools. Our solutions are not only modern but exhibit great performance as well.
                    Let’s take a look at some of our exclusive projects.</p>
                            <button onClick={UpdateViewBtn} className="btn">View more</button>
                        </div>
                        {Portfolio.basic ? <Basic_portfolio Portfolio={Portfolio} /> : <More_Portfolio Portfolio={Portfolio} />}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
