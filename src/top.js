import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/top.css";

export default function top() {
    return (

        
        <div class='top'>
            <div class='skewy bg-primary rsp'></div>

            <div class='pinktry length pinky rsp'>
                <div className={'col-6 pinky p-5 ' }>
                    <p>
                        <h2 className="">
                            A place for the most 
                            useful code snipets 
                            you need in your project.
                        </h2>
                    </p>
                    <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo 
                    </p>
                    <div>
                        <button class=" btn-primary sizebtn1 p-2 " >Get Started</button>
                        <button class=" btn-light text-primary sizebtn1 p-2 m-1 appear" >Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
