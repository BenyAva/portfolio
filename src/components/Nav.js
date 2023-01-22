import React, { useState, useEffect } from 'react'

const Nav = (props) => {
  

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a onClick={() => {props.setPage(0)}} class="navbar-brand" href="#">BA</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a onClick={() => {props.setPage(0)}} class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a onClick={() => {props.setPage(1)}} class="nav-link" href="#">About Me</a>
                    </li>
                    <li class="nav-item">
                    <a onClick={() => {props.setPage(2)}} class="nav-link" href="#">Projects</a>
                    </li>
                    <li class="nav-item">
                    <a onClick={() => {props.setPage(3)}} class="nav-link">Skills</a>
                    </li>
                    <li class="nav-item">
                    <a onClick={() => {props.setPage(4)}} class="nav-link">Contact Me</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>


        </>
    )
}

export default Nav