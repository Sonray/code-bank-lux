import React from 'react'

export default function navbar() {
    return (
        <div class="navbar navbar-expand-lg ">
            <div class="navbar col-md-6 pinky">
                <h3 class="navbar-brand">CodeBank</h3>
            </div>
            <nav class="navbar-collapse d-flex navbar navbar-dark bg-primary" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item ">
                        < a class="nav-link text-white" href="#">How it works</a>
                    </li>
                    <li class="nav-item">
                        < a class="nav-link text-white" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        < a class="nav-link text-white" href="#">Installations</a>
                    </li>
                    <li class="nav-item">
                        < a class="nav-link text-white" href="#">Resources</a>
                    </li>
                    <li class="nav-item">
                        <button class="btn btn-danger">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}