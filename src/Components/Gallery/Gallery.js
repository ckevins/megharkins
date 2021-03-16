import React from "react";
import megSitting from '../Home/Meg2018-5.jpg';


export function Gallery () {
    return (
        <div className='home'>
            <img className='page-image' src={megSitting} alt='pic of Meg sitting'/>
            <div className='page-text'>
                <h1>Meg Harkins</h1>
                <h3 className='page-specific-text'>Pictures!</h3>
            </div>
        </div>
    )
}
