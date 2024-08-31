import React from 'react'

const SkillsList = ({ skills }) => {
    return (
        <ul className='row'>
            {skills.map((skill) => (
                <li className='col-md-5 col-lg-5 col-xl-5' style={{ listStyleType: 'circle' }}>
                    {skill}
                </li>
            ))}
        </ul>
    )
}

export default SkillsList