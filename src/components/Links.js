import React, { useState, useEffect } from 'react'
import resumePdf from '../resume.pdf'
const Links = (props) => {

    return (
        <div className='c-main container-fluid'>
            <h1 className='c-name'>Contact Me.</h1>
            <div className='c-block container'>
                <div className='c-small container-fluid'>

                    <button  class="button-54" role="button"><a href='https://github.com/BenyAva' target='blank'>GitHub</a></button>
                    <button class="button-54" role="button"><a href='https://www.linkedin.com/in/benigno-avalos-dev' target='blank'>LinkedIn</a></button>
                    <button class="button-54" role="button"><a href={resumePdf} target='blank'>Resume</a></button>
                    {/* <a href='https://github.com/BenyAva' target='blank'class="button-54" role="button">Button</a> */}
                   

                </div>
            </div>
        </div>
    )
}

export default Links