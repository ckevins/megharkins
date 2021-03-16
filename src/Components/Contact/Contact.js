import React from "react";
import megSitting from '../Home/Meg2018-5.jpg';


export function Contact () {
    return (
        <div className='contact'>
            <img className='home-image' src={megSitting} alt='pic of Meg sitting'/>
            <div className='home-text'>
                <h1>Meg Harkins</h1>
                <p>megharkins27@gmail.com</p>
            </div>
        </div>
    )
}
