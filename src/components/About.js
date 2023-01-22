import React, { useState, useEffect } from 'react'

const About = (props) => {

    const austin = require('./images/austinImg.jpg')

    return (
        <div className='about-me container-fluid'>
            <h1 className='Me'>Me.</h1>
            <div className='block-1'>
                <p className='info'>I am a creative and ambitious web developer from Austin, Texas. Born and raised in this vibrant city, I have always had a passion for technology and problem-solving. After a successful career as a Mercedes Benz technician, I decided to pursue my passion for web development and I am loving every moment of it. I believe that web development is the perfect way for me to use my skills and creativity to bring ideas to life. I am excited to be part of the growing tech community in Austin and I am always looking for new challenges to push myself to be the best I can be.</p>

                <img className='aImg' src={austin}/>
            </div>
        </div>
    )
}

export default About