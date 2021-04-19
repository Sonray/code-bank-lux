import React from 'react'

export default function navbar() {
    return (
        <div class="navbar navbar-expand-lg ">
            <div class="navbar col-md-6 pinky px-5">
                <h3 class="navbar-brand sp">CodeBank</h3>
            </div>
            <nav class="navbar-collapse d-flex navbar navbar-dark bg-primary width" id="navbarNav">
                <ul class="navbar-nav mx-4 float-md-left ">
                    <li class="nav-item mx-2">
                        < a class="nav-link text-white " href="#">How it works</a>
                    </li>
                    <li class="nav-item mx-2">
                        < a class="nav-link text-white" href="#">Blog</a>
                    </li>
                    <li class="nav-item mx-2">
                        < a class="nav-link text-white" href="#">Installations</a>
                    </li>
                    <li class="nav-item mx-2">
                        < a class="nav-link text-white" href="#">Resources</a>
                    </li>
                    <li class="nav-item mx-2">
                        <button class="btn btn-danger">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
