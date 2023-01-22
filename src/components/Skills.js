import React, { useState, useEffect } from 'react'

const Skills = (props) => {

    return (
        <div className='s-block container-fluid'>
            <div className='l-block'>
                <div class="sCard card text-bg-dark mb-3">
                    <div class="card-header">Front-end</div>
                        <div class="card-body">
                        <h5 class="card-title">HTML</h5>
                        <h5 class="card-title">CSS</h5>
                        <h5 class="card-title">JavaScript</h5>
                        <h5 class="card-title">Python</h5>
                        <h5 class="card-title">TypeScript</h5>
                        <h5 class="card-title">React</h5>
                    </div>
                </div>

                <div class="sCard card text-bg-dark mb-3">
                    <div class="card-header">Back-end</div>
                        <div class="card-body">
                        <h5 class="card-title">Node.js</h5>
                        <h5 class="card-title">Express.js</h5>
                        <h5 class="card-title">Django</h5>

                        
                        
                    </div>
                </div>

                <div class="sCard card text-bg-dark mb-3">
                    <div class="card-header">Databases</div>
                        <div class="card-body">
                        <h5 class="card-title">PostgreSQL</h5>
                        <h5 class="card-title">MongoDB</h5>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills