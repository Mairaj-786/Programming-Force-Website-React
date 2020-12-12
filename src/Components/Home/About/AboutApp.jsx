import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutHome from './AboutHome'

const AboutApp = () => {
    return (
        <div className="AboutApp">
            <AboutHome />
        </div>
    )
}

export default AboutApp
