import React from 'react';
import '../App.css'
import hangry_ from '../Assets/hangry/hangry_'
import logo_hangry from '../Assets/proj_logos/logo_hangry.png'
import hangry_hero from '../Assets/hangry/hangry_hero.png'


const HangryIntro = () => {
    return (
        <img src={hangry_} alt={'Hangry Polaroids'} className='hero-6' />
    )
}


const HangryHero = () => {
    return (
        <img src={hangry_hero} alt={'Hangry Hero'} className='hero' />
    )
}



const ComingH = () => {
    return (
        <>
            <img src={logo_hangry} alt={'Logo'} className='logo-holder-end' />
            <p>Coming Soon... </p>
        </>
    )
}

export { HangryIntro, HangryHero, ComingH };
