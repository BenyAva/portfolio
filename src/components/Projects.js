import React, { useState, useEffect } from 'react'

const Projects = (props) => {

    const cars = require('./images/cars.png')
    const game = require('./images/game.png')
    const musicApp = require('./images/musicApp.png')
    const NewYears = require('./images/NewYears.png')


    return (
        <div className='block-2 container-fluid'>
            <div className='p-main'>

            
            <h1 className='p-block'>Projects.</h1>
            <div className='p-middle'>

                <div class="card c-1">
                    <img src={cars} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">This web application is a full CRUD, built with Express.js and MongoDB, for managing and storing car information. It features a user-friendly interface and efficient data storage, making it a great tool for car enthusiasts and collectors.</p>
                        <div className='iconsC'>
                            <a class="fa-solid fa-browser disabled">Demo Not available</a>
                            <div id='fs'>
                            <a class="fa-brands fa-github disabled">front-end</a>
                            </div>
                            <a class="fa-brands fa-github disabled">back-end</a>
                        </div>
                    </div>
                </div>
                <div class="card c-1">
                    <img src={game} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">This is a choice-based game built with React and TypeScript, set in a medieval time period where the player takes the role of an assassin hiding from bounty hunters. The use of React and TypeScript provides a responsive and dynamic user interface for an immersive gaming experience. It offers a captivating and well-crafted story for players to engage with.</p>
                        <div className='iconsC'>
                            <a href='https://story-front-end.herokuapp.com/' target='blank' class="fa-solid fa-browser">demo</a>
                            <div id='fs'>
                            <a href='https://github.com/BenyAva/story_front_end' target='blank' class="fa-brands fa-github">front-end</a>
                            </div>
                            <a href='https://github.com/BenyAva/story_back_end' target='blank' class="fa-brands fa-github">back-end</a>
                        </div>
                    </div>
                </div>
                <div class="card c-1">
                    <img src={musicApp} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">This application is a full CRUD, built with React,JavaScript and Express. It's a tool to store and manage your favorite music and easily access music information. </p>
                        <div className='iconsC'>
                            <a href='https://my-music-app-182.herokuapp.com/' target='blank' class="fa-solid fa-browser">demo</a>
                            <div id='fs'>
                            <a href='https://github.com/tking36/front-end' target='blank' class="fa-brands fa-github">front-end</a>
                            </div>
                            <a href='https://github.com/tking36/back-end' target='blank' class="fa-brands fa-github">back-end</a>
                        </div>
                    </div>
                </div>
                <div class="card c-1">
                    <img src={NewYears} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">This is a CRUD web application that allows users to store and manage their New Year's resolutions using React, Django, and JavaScript. It provides a user-friendly experience for setting and tracking personal goals.</p>
                        <div className='iconsC'>
                            <a href='https://new-years-res.herokuapp.com/' target='blank' class="fa-solid fa-browser">demo</a>
                            <div id='fs'>
                            <a href='https://github.com/BenyAva/p4_front_end' target='blank' class="fa-brands fa-github">front-end</a>
                            </div>
                            <a href='https://github.com/ebo275/Project-4' target='blank' class="fa-brands fa-github">back-end</a>
                        </div>
                    </div>
                </div>


            </div>

            </div>
        </div>
    )
}

export default Projects

