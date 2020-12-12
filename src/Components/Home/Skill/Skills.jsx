import React from 'react'

import Skill_Cards from './Skill_Cards'

const Skills = () => {
    return (
        <>
            <div className="Skills" id="skill">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#F6F9FA" fill-opacity="1"
                        d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,160C672,149,768,139,864,165.3C960,192,1056,256,1152,282.7C1248,309,1344,299,1392,293.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
                    </path>
                </svg>
                <h1 className="font-weight-bold text-center">Skills</h1>
                <Skill_Cards />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
                    <path fill="#F6F9FA" fill-opacity="1"
                        d="M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,160C672,149,768,139,864,165.3C960,192,1056,256,1152,282.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
            </div>
        </>
    )
}

export default Skills
