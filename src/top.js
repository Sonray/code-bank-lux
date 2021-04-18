import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function top() {
    return (
        <div className={'col-5 pinky' }>
            <p>
                <h1 className="text-center">
                    A place for the most 
                    useful code snipets 
                    you need in your project.
                </h1>
            </p>
            <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo 
            </p>
            <div>
                <button class=" btn-primary" >Get Started</button>
                <button class=" btn-light text-primary" >Learn More</button>
            </div>
        </div>
    )
}
