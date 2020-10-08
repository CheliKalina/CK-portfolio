import React, { useState } from 'react';
import '../App.css';
import nikon_bookf from '../Assets/nikon/nikon_bookb.png'
import nikon_bookb from '../Assets/nikon/nikon_bookf.png'
import nikon_black from '../Assets/nikon/nikon_black.png'
import nikon_hero from '../Assets/nikon/nikon_hero.png'
import nikon_video from '../Assets/nikon/nikon_video.mov'
import nikon_iphones from '../Assets/nikon/nikon_iphones.png'
import nikon_mock from '../Assets/nikon/nikon_mock.png'
import ai_b from '../Assets/adobe_icons/ai_b.png';
import ps_b from '../Assets/adobe_icons/ps_b.png';
import id_b from '../Assets/adobe_icons/id_b.png';
import ae_b from '../Assets/adobe_icons/ae_b.png';
import xd_b from '../Assets/adobe_icons/xd_b.png';

const color1 = {
    backgroundColor: 'black'
}
const color2 = {
    backgroundColor: 'grey'
}
const color3 = {
    backgroundColor: '#ED3823'
}
const quote = {
    color: '#ED3823'
}
const quotetext = {
    color: '#ED3823',
    width: '35vw'

}
const voice = {
    color: 'grey',
    fontSize: '1vw'
}



function NikonIntro() {
    const [state, setState] = useState(true);
    return (
        <div onMouseEnter={() => setState(false)} onMouseLeave={() => setState(true)} >
            {state ? <img src={nikon_bookb} alt="Nikon Manual Front" className="hero-5" /> :
                <img src={nikon_bookf} alt="Nikon Manual Back" className="hero-5" />}
        </div>
    )
}

const NikonInfo = () => (
    <div className='contain'>
        <div className='title-row'>
            <img src={nikon_black} alt='Boop logo' className='logo-holder' />
            <div className='title-text'>
                <h3 className='text _w'>Nikon: USA Site Redesign</h3>
                <h6 className='text _g'>Capture Your Presence</h6>
            </div>

            <div className='traffic-light'>
                <div className='color-sample' style={color1}></div>
                <div className='color-sample' style={color2}></div>
                <div className='color-sample' style={color3}></div>
            </div>
        </div>
        <div className='quote-holder'>
            <p className='text-quote' style={quotetext}>"When I have a camera in my hand, I know no fear."</p>
            <p className='quote-author' style={quote}>— A. E.</p>
        </div>
        <div className='bullets'>
            <div>
                <h6 className='text _b'>+ Target: Passionate memory creators</h6>
                <h6 className='text _b'>+ Objective: Redesign Nikon USA website</h6>
                <h6 className='text _b'>+ Purpose: Emphasize product education </h6>
                <h6 className='text _b'>+ Deliverables: rebrand, ui &amp; ads </h6>
            </div>
            <div>
                <h6 className='text' style={voice}>EDUCTAIONAL</h6>
                <h6 className='text' style={voice}>COMPREHENSIVE</h6>
                <h6 className='text' style={voice}>INTERACTIVE</h6>
                <h6 className='text' style={voice}>2017</h6>
            </div>
        </div>

        <div className='stack-adobe'>
            <img src={ps_b} alt="Photoshop Logo" className="adobe-logos" />
            <img src={ai_b} alt="Illustrator Logo" className="adobe-logos" />
            <img src={id_b} alt="Indesign Logo" className="adobe-logos" />
            <img src={xd_b} alt="XD Logo" className="adobe-logos" />
            <img src={ae_b} alt="XD Logo" className="adobe-logos" />
        </div>
    </div>
)
const NikonHero = () => (

    <img src={nikon_hero} alt="Nikon Hero" className="hero" />

)
const NikonVid = () => (
    <video controls="controls" src={nikon_video} autoPlay className="video" >
        Your browser does not support the HTML5 Video element. </video>
)
const NikonImg1 = () => (
    <img src={nikon_iphones} alt="Iphone UI" className="hero-3" />

)
const NikonImg2 = () => (
    <img src={nikon_mock} alt="Nikon Mockup" className="hero-2" />
)

const NikonLogo = () => (
    <img src={nikon_black} alt="Nikon Logo" className='logo-holder-end' />

)

export { NikonIntro, NikonInfo, NikonHero, NikonVid, NikonImg1, NikonImg2, NikonLogo }

