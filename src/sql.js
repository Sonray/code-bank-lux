import React from 'react'
import Loading from './images/loading-cdr-181598565.jpg'
import Dash from './images/dashboard.png'
import Binary from './images/binary.jpg'

export default function sql() {
    return (
        <div class='sqlsection'>
            <div class=" row m-2">
                <div class="row col-12 col-md-6 col-sm-12 justify-content-center">                    
                    <img src={Loading} alt="" class="img-fluid col-md-5 pixel"/>
                    <div class=" col-md-7">
                        <h4>SQL Code Organisation</h4>
                        
                        <p >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        </p>
                    </div>
                </div>
                <div class="row col-12 col-md-6 col-sm-12 justify-content-center" >                    
                    <img src={Dash} alt="" class="rounded col-md-5 pixel"/>
                    <div class=" col-md-7">
                        <h4>SQL Code Organisation</h4>
                        
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        </p>
                    </div>
                </div>
            </div>
            <div class="row m-2">
                <div class="row col-sm m-5">                    
                    <img src={Binary} alt="" class="img-fluid col-md-5 pixel"/>
                    <div class=" col-md-7">
                        <h4>SQL Code Organisation</h4>
                        
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        </p>
                    </div>
                </div>
                <div class="row col-sm m-5">                    
                    <img src={Binary} alt="" class="img-fluid col-md-5 pixel"/>
                    <div class=" col-md-7">
                        <h4>SQL Code Organisation</h4>
                        
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
