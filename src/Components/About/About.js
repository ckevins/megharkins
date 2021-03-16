import React from "react";
import megSitting from '../Home/Meg2018-5.jpg';


export function About () {
    return (
        <div className='about'>
            <img className='home-image' src={megSitting} alt='pic of Meg sitting'/>
            <div className='home-text'>
                <h1>Meg Harkins</h1>
                <p>I'm Meg and I do all sorts of stuff. I act. I write. I know about history and can teach kids so they know stuff about history too!</p>
            </div>
        </div>
    )
}
