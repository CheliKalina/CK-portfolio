import React from 'react';
import '../App.css';
import masq_media from '../Assets/masq/masq_media.gif'
import logo_masq from '../Assets/proj_logos/logo_masq.png'


const MasqIntro = () => (
    <img className="hero-5" src={masq_media} alt='Masq Shoe' />

)


const ComingM = () => {
    return (
        <div>
        <img src={logo_masq} alt={'Logo'} className='logo-holder-end'/>
        <p>Coming Soon... </p>
        </div>
    )
}


export { MasqIntro, ComingM }