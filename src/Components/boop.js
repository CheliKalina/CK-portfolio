import React from 'react';
import '../App.css';
import boop_black from '../Assets/proj_logos/boop_black.png';
import boop_icons from '../Assets/boop/boop_icons.gif'
import boop_game from '../Assets/boop/boop_game.jpg'
import boop_video from '../Assets/boop/boop_video.mov'
import boop_vr from '../Assets/boop/boop_vr.png'
import boop_pack from '../Assets/boop/boop_pack.png'
import boop_mag from '../Assets/boop/boop_mag.png'
import ai_b from '../Assets/adobe_icons/ai_b.png';
import ps_b from '../Assets/adobe_icons/ps_b.png';
import id_b from '../Assets/adobe_icons/id_b.png';
import ae_b from '../Assets/adobe_icons/ae_b.png';
import xd_b from '../Assets/adobe_icons/xd_b.png';
import pr_b from '../Assets/adobe_icons/pr_b.png';

const color1 = {
    backgroundColor: '#F89D5E'
}
const color2 = {
    backgroundColor: '#95A7C3'
}
const color3 = {
    backgroundColor: '#75A8A1'
}
const quote = {
    color: '#95A7C3'
}
const voice = {
    color: '#75A8A1'
}

const BoopIntro = () => (
    <img src={boop_icons} alt="Children Gif" className="hero-5" />
)

const BoopInfo = () => (
    <div className='contain'>
        <div className='title-row'>
            <img src={boop_black} alt='Boop logo' className='logo-holder' />
            <div className='title-text'>
                <h3 className='text _w'>Boop: Social Learning</h3>
                <h6 className='text _g'>Play with Confidence</h6>
            </div>

            <div className='traffic-light'>
                <div className='color-sample' style={color1}></div>
                <div className='color-sample' style={color2}></div>
                <div className='color-sample' style={color3}></div>
            </div>
        </div>
        <div className='quote-holder'>
            <p className='text-quote' style={quote}>"Anyone who does anything to help a child in his life is a hero to me."</p>
            <p className='quote-author' style={quote}>— Mr. Rogers</p>
        </div>
        <div className='bullets'>
            <div>
                <h6 className='text _g'>+ Target: Parents of child with special needs</h6>
                <h6 className='text _g'>+ Secondary Target: Educational Institutions </h6>
                <h6 className='text _g'>+ Objective: Help children socialize</h6>
                <h6 className='text _g'>+ Deliverables: brand, game, ui &amp; ads </h6>
            </div>
            <div>
                <h6 className='text' style={voice}>EMPATHETIC</h6>
                <h6 className='text' style={voice}>EDUCTAIONAL</h6>
                <h6 className='text' style={voice}>INTERACTIVE</h6>
                <h6 className='text' style={voice}>2018</h6>
            </div>
        </div>

        <div className='stack-adobe'>
            <img src={ps_b} alt="Photoshop Logo" className="adobe-logos" />
            <img src={ai_b} alt="Illustrator Logo" className="adobe-logos" />
            <img src={id_b} alt="Indesign Logo" className="adobe-logos" />
            <img src={xd_b} alt="XD Logo" className="adobe-logos" />
            <img src={ae_b} alt="XD Logo" className="adobe-logos" />
            <img src={pr_b} alt="Premiere Logo" className="adobe-logos" />
        </div>
    </div>
)
const BoopHero = () => (

        <img src={boop_game} alt="Boop Board Game" className="hero" />

)
const BoopVid = () => (
    <video controls="controls" src={boop_video} autoPlay className="hero-3" >
        Your browser does not support the HTML5 Video element. </video>
)
const BoopImg1 = () => (
        <img src={boop_pack} alt="Boop Backpack" className="hero-5" />

)
const BoopImg2 = () => (
    <img src={boop_mag} alt="Boop Magazines" className="hero-4" />
)
const BoopImg3 = () => (
    <img src={boop_vr} alt="Child with VR" className="hero-4" style={{ width: '40vw' }} />
)
const BoopLogo = () => (
    <img src={boop_black} alt="Boop Logo" className='logo-holder-end' />

)

export { BoopIntro, BoopInfo, BoopHero, BoopVid, BoopImg1, BoopImg2, BoopImg3, BoopLogo }

