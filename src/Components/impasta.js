import React from 'react';
import '../App.css'
import imp_noodle from '../Assets/impasta/impasta_noodle.gif'
import logo_impasta from '../Assets/proj_logos/logo_impasta.png'
import imp_hero from '../Assets/impasta/imp_hero.png'


const ImpastaIntro = () => {
    return (
        <img src={imp_noodle} alt={'Impasta Gif'} className='hero-5' />
    )
}

const ImpHero = () => {
    return (
        <img src={imp_hero} alt={'Impasta Hero'} className='hero' />
    )
}



const ComingI = () => {
    return (
        <div>
            <img src={logo_impasta} alt={'Logo'} className='logo-holder-end' />
            <p>Coming Soon... </p>
        </div>
    )
}


export { ImpastaIntro, ImpHero, ComingI };
