import React from 'react';
import '../App.css';
import logo_cond from '../Assets/proj_logos/logo_cond.png';
import con_pickles from '../Assets/cond/con_pickles.gif'
import con_hero from '../Assets/cond/con_hero.jpg'
import con_cart from '../Assets/cond/con_cart.png'
import con_must from '../Assets/cond/con_must.png'
import con_mag from '../Assets/cond/con_mag.png'
import con_spice from '../Assets/cond/con_spice.png'
import con_relish from '../Assets/cond/con_relish.png'
import ai from '../Assets/adobe_icons/ai.png';
import ps from '../Assets/adobe_icons/ps.png';
import id from '../Assets/adobe_icons/id.png';


const color1 = {
    backgroundColor: '#0090D5'
}
const color2 = {
    backgroundColor: '#f6ec0e'
}
const color3 = {
    backgroundColor: 'red'
}
const tag = {
    color: 'red'
}
const quote = {
    color: '#f6ec0e'
}
const quotetext = {
    color: '#f6ec0e',
    width: '35vw',
    fontWeight: 'bold',
}
const voice = {
    color: '#0090D5'
}

const CondIntro = () => (
    <img src={con_pickles} alt="Condoms and Pickles" className='hero-5' />
    )


const CondInfo = () => (
    <div className='contain'>
        <div className='title-row'>
            <div className='title-text'>
            <img src={logo_cond} alt='Condoments logo' className='logo-holder' style={{margin: '0 1vw'}}/>
            <div>
                <h4 className='text _w'>Condoments</h4>
                <h6 className='text' style={tag}>Cover Your Wieners</h6>
            </div>
            </div>

            <div className='traffic-light'>
                <div className='color-sample' style={color1}></div>
                <div className='color-sample' style={color2}></div>
                <div className='color-sample' style={color3}></div>
            </div>
        </div>
        <div className='quote-holder'>
            <p className='text-quote' style={quotetext}> "Put some mustard on my roll 'cause you're barking up my soul."</p>
            <p className='quote-author' style={quote}>— Archies</p>
        </div>
        <div className='bullets'>
            <div>
                <h6 className='text _w'>+ Target: Youths of America</h6>
                <h6 className='text _w'>+ Objective: Encourage Contraception</h6>
                <h6 className='text _w'>+ Sponsorship: Mad Magazine </h6>
                <h6 className='text _w'>+ Deliverables: brand, packaging &amp; ads </h6>
            </div>
            <div>
                <h6 className='text' style={voice}>PUNNY</h6>
                <h6 className='text' style={voice}>COMICAL</h6>
                <h6 className='text' style={voice}>FRANK</h6>
                <h6 className='text' style={voice}>2017</h6>
            </div>
        </div>
        <div className='stack-adobe'>
            <img src={ps} alt="Photoshop Logo" className="adobe-logos" />
            <img src={ai} alt="Illustrator Logo" className="adobe-logos" />
            <img src={id} alt="Indesign Logo" className="adobe-logos" />
        </div>
    </div>
)
const CondHero = () => (
    <img src={con_hero} alt="Condoments Hero" className="hero" />

)
const CondImg1 = () => (
    <img src={con_must} alt="Iphone UI" className="hero-5" />

)
const CondImg2 = () => (
    <img src={con_mag} alt="Condments Magazine" className="hero-4" />
)
const CondImg3 = () => (
    <img src={con_cart} alt="Iphone UI" className="hero-5" />

)
const CondImg4 = () => (
    <img src={con_spice} alt="Condoments Spice Billboard" className="hero-5" />

)
const CondImg5 = () => (
    <img src={con_relish} alt="Condments Relish Subway" className="hero-5" />
)

const CondLogo = () => (
    <img src={logo_cond} alt="Condoments Logo" className='logo-holder-end' />

)

export { CondIntro, CondInfo, CondHero, CondImg1, CondImg2, CondImg3, CondImg4, CondImg5, CondLogo }

