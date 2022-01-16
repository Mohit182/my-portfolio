import React from 'react'
import './Web.css'
function Web() {
    return (
        <div className='web'>
            <div className='web-option'>
                <a href='#project'>
                <i className="fi fi-rr-edit-alt option-icon"></i>Projects
                </a>
            </div>
            <div className='web-option'>
                <a href='#Skills'>
                <i className="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className='web-option'>
                <a href='Experience'>
                <i className="fi fi-rr-briefcase option-icon"></i>Experience
                </a>
            </div>
            <div className='web-option'>
                <a href='Contact'>
                <i className="fi fi-rr-user option-icon"></i>Contact
                </a>
            </div>
        </div>
    )
}

export default Web
