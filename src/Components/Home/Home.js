import React from "react";
import megSitting from './Meg2018-5.jpg';

export function Home () {
    return (
        <div className='home'>
            <img className='page-image' src={megSitting} alt='pic of Meg sitting'/>
            <div className='page-text'>
                <h1>Meg Harkins</h1>
                <h3 className='page-specific-text'>Actress | Writer</h3>
            </div>
        </div>
    )
}
