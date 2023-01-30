import React, { useState, useEffect } from 'react'
import resumePdf from '../Beni_resume.pdf'
const Links = (props) => {

    return (
        <div className='c-main container-fluid'>
            <h1 className='c-name'>Contact Me.</h1>
            <div className='c-block container'>
                <div className='c-small container-fluid'>

                    <a href='https://github.com/BenyAva' target='blank' class="button-54" role="button">GitHub</a>

                    <a href='https://www.linkedin.com/in/benigno-avalos-dev' target='blank' class="button-54" role="button">LinkedIn</a>
                    
                    <a href={resumePdf} target='blank' class="button-54" role="button">Resume</a>
                    
                    <a href="mailto:benignoavalos0@gmail.com" target='blank' class="button-54" role="button">Email</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Links