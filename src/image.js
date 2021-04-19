import React from 'react';
import Angulalogo from './images/Angular_full_color_logo.svg.png'
import Css3 from './images/css-3-logo.png'
import Html_5 from './images/html-logo.png'
import Js from './images/600px-JavaScript-logo.png'
import Saas from './images/saas.png'

export default function image() {
    return (
        <div class = " container row mx-auto m-5">
            <div class="col-2 ">
                <img src={Angulalogo} alt="" class="img-fluid pixel" />
            </div>

            <div class="col-2 mx-5">
                <img src={Css3} alt="" class="img-fluid pixel"/>
            </div>

            <div class="col-2 mx-3">
                <img src={Html_5} alt="" class="img-fluid pixel"/>
            </div>

            <div class="col-2 mx-3">
                <img src={Js} alt="" class="img-fluid pixel"/>
            </div>

            <div class="col-2 mx-2">
                <img src={Saas} alt="" class="img-fluid pixel"/>
            </div>
        </div>
    )
}
