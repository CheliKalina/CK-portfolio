import React from 'react';
import '../App.css'
import ale_media from '../Assets/alexir/alexir_media.gif'
import logo_alexir from '../Assets/proj_logos/logo_alexir.png'
import ale_hero from '../Assets/alexir/ale_hero.png'


const AlexirIntro = () => {
    return (
        <img src={ale_media} alt={'Alexir Gif'} className='hero-6'/>
    )
}

const AleHero = () => {
    return (
        <img src={ale_hero} alt={'Alexir Hero'} className='hero'/>
    )
}


const ComingA = () => {
    return (
        <div>
        <img src={logo_alexir} alt={'Logo'} className='logo-holder-end'/>
        <p>Coming Soon... </p>
        </div>
    )
}


export {AlexirIntro, AleHero, ComingA};
