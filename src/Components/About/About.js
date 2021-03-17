import React from "react";
import megSitting from '../Home/Meg2018-5.jpg';
import celticKnot from '../Home/celtic-knot.png';


export function About () {
    return (
        <div className='about'>
            <img className='page-image' src={megSitting} alt='pic of Meg sitting'/>
            <img className='celtic-knot' src={celticKnot} alt='celtic knot'/>
            <div className='page-text'>
                <h1>Meg Harkins</h1>
                <p className='page-specific-text'>I'm Meg and I do all sorts of stuff. I act. I write. I know about history and can teach kids so they know stuff about history too!</p>
            </div>
        </div>
    )
}
