import React from "react";
import megSitting from '../Home/Meg2018-5.jpg';
import celticKnot from '../Home/celtic-knot.png';


export function Contact () {
    return (
        <div className='contact'>
            <img className='page-image' src={megSitting} alt='pic of Meg sitting'/>
            <img className='celtic-knot' src={celticKnot} alt='celtic knot'/>
            <div className='page-text'>
                <h1>Meg Harkins</h1>
                <p className='page-specific-text'>megharkins27@gmail.com</p>
            </div>
        </div>
    )
}
