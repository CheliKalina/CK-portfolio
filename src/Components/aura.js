import React from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ts from '../Assets/stack_icons/ts.png';
import particle from '../Assets/stack_icons/particle.png';
import { faAngular, faHtml5, faCss3Alt, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import firebase from '../Assets/stack_icons/firebase.png';
import aura_device from '../Assets/aura/Aura_device.png';
import aura_logo from '../Assets/aura/aura_logo.png';
import aura_supportlogo from '../Assets/aura/aura_supportlogo.png';
import aura_video from '../Assets/aura/aura_video.mov';

const color1 = {
    backgroundColor: '#46b5e8'
}
const color2 = {
    backgroundColor: '#f1f9fe'
}
const color3 = {
    backgroundColor: 'white'
}
const quote = {
    color: '#46b5e8',
    fontSize: '.8vw',
    fontWeight: 'bold',
    bordeRight: '1px solid white'

}

const AuraIntro = () => (
    <div className='aura-contain'>
        <img className="aura-device" src={aura_device} alt='Aura device' />
        <div className='halo'></div>
    </div>
)

const AuraInfo = () => (
    <div className='contain'>
        <div className='title-row'>
            <img src={aura_logo} alt='Aura logo' className='logo-holder-aura' />
            <div className='title-text'>
                <h3 className='text' style={{color: '#46b5e8'}}>Aura Smart Air</h3>
                <h6 className='text'>Customer Support Platform</h6>
            </div>

            <div className='traffic-light'>
                <div className='color-sample' style={color1}></div>
                <div className='color-sample' style={color2}></div>
                <div className='color-sample' style={color3}></div>
            </div>
        </div>
        <div className='quote-holder'>
            <p className='text-quote' style={quote}>"Cheli demonstrated adaptability &amp; quick learning qualities throughout her internship, which enabled her to quickly become an important part of the team."</p>
            <p className='quote-author-aura' >— Eldar Shnaiderman <i>Co-Founder &amp; CTO @ Aura Air</i></p>
        </div>
        <div className='bullets'>
            <div>
                <h6 className='text'>+ UI redesign &amp; implementation</h6>
                <h6 className='text'>+ Search platform by customer email</h6>
                <h6 className='text'>+ Search individual customer id </h6>
            </div>
            <div>
                <h6 className='text'>+ Firebase dynamic data</h6>
                <h6 className='text'>+ Fetch using Particle API</h6>
                <h6 className='text'>+ Shopify data integration</h6>
            </div>
        </div>

        <div className='stack'>
            <FontAwesomeIcon icon={faAngular} className='stackIcon-2 _w' />
            <img src={ts} alt="TypeScript" style={{ width: '2.5vw', opacity: '0.7' }} />
            <FontAwesomeIcon icon={faJsSquare} className='stackIcon-2 _w' />
            <FontAwesomeIcon icon={faHtml5} className='stackIcon-2 _w' />
            <FontAwesomeIcon icon={faCss3Alt} className='stackIcon-2 _w' />
            <img src={firebase} alt="Firebase" style={{ width: '2.3vw', opacity: '0.7' }} />
            <img src={particle} alt="Particle" style={{ width: '2.3vw', opacity: '0.7' }} />
        </div>
    </div>
)

const AuraVid = () => (
    <video controls="controls" src={aura_video} autoPlay className="video" >
        Your browser does not support the HTML5 Video element. </video>
)

const AuraLogo = () => (
    <div className='flex' >
            <img src={aura_supportlogo} alt='Aura Support logo' className='logo-holder-end' />
    </div>
)

export { AuraIntro, AuraInfo, AuraVid, AuraLogo }
