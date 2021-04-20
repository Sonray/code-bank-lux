import React from 'react';
import "./css/helps.css"

export default function helps() {
    return (
        <div class="m-5 pt-5">
            <h2 className='d-flex justify-content-center pb-3 bts1'>
                Help us grow this project. Partner with us today.
            </h2>
            
            <div className='d-flex justify-content-center bts'>
                <button class=" btn-primary nav-item mx-5 p-2">Become a Contributor</button>
                <button class=" btn-danger nav-item sizebtn p-2">Donate</button>
            </div>
        </div>
    )
}
