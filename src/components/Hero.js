import React from 'react';
import Card from './Card';

import heroImage from '../images/Group 77.png';
import thumbnail from '../images/image 12.png'

export default function Main () {
    return (
        <div>
            <div class Name='hero'>
                <div className='hero-image-c'>
                    <img src={heroImage} className='hero-image' alt='hero'/>
                </div>

                <h1 className='hero-title'>Online Experiences</h1>
                <p className='hero-text'>join uniqe intractive activities led by one-of-a-kind
                    hoasts-all without leaving home.</p>
            </div>
            <div className='hero-cards'>
                <Card 
                image={thumbnail} 
                rate="5.0" 
                votes="6" 
                country="USA" 
                description="Life lessons with Katie Zaferes" 
                price="$136"/>
            </div>
        </div>
    );
}