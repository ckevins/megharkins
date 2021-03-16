import React from "react";
import megSitting from './Meg2018-5.jpg';

export function Home () {
    return (
        <div className='home'>
            <img className='home-image' src={megSitting} alt='pic of Meg sitting'/>
            <div className='home-text'>
                <h1>Meg Harkins</h1>
                <h3>Actress | Writer</h3>
            </div>
        </div>
    )
}
