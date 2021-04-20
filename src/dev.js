import React from 'react'
import Saas from './images/saas_1.png'

export default function dev() {
    return (
        <div class="row  mx-5 my-5">
            <div class="col-sm-12 col-md-12 col-lg-6 margin-top-3 mt-4">
                <h3 class="text-danger mb-3">
                    Developers Helping Hand
                </h3>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo.
                </p>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. 
                </p>
                <div>
                    <button class=" btn-danger sizebtn1 p-2 ">Learn More</button>
                    <button class=" btn-outline-primary sizebtn1 p-2 m-4">View on GitHub</button>
                </div>
            </div>
            <div class="col-sm">
                <img src={Saas} alt="" class="img-fluid"/>
            </div>
        </div>
    )
}
