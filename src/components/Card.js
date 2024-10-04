import React from 'react';
import starIcon from '../images/star.png';

export default function Card ({image, rate, votes, country, description, price}) {
    return (
        <div className="card">
            <img src={image} alt='thumbnail' className='thumbnail'/>

            <div className='card-status'>
                <img src={starIcon} alt='star-icon' className='star'/>
                <span>{rate}</span>
                <span className='grey'>({votes}) &#x2022;</span>
                <span className='grey'>{country}</span>
            </div>
            <p>{description}</p>
            <p><span className='bold'>From {price}</span> / person</p>
        </div>
    );
}