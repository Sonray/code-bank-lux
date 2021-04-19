import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./top.css";

export default function top() {
    return (
        <div className='pinky top' >
            
                <h1 className="col-4 text_center">
                    A place for the most 
                    useful code snipets 
                    you need in your project.
                </h1>
            
            <p className="col-6 desc ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae  
            </p>
            <div className=" col-5 top_buttons">
                <button class=" btn-primary" >Get Started</button>
                <button class=" btn-light text-primary" >Learn More</button>
            </div>
        </div>
    )
}
