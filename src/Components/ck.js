import React from 'react';
import '../App.css'
import Ztext from 'react-ztext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import port_video from '../Assets/port_video.mov';
import react_logo from '../Assets/stack_icons/react.png';
import { faHtml5, faCss3Alt, faJsSquare, faFontAwesome, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import firebase from '../Assets/stack_icons/firebase.png';

const color1 = {
    backgroundColor: 'black'
}
const color2 = {
    backgroundColor: 'grey'
}
const color3 = {
    backgroundColor: 'lightgrey'
}
const lg = {
    color: 'lightgrey'
}

const CkIntro = () => (
    <Ztext
        depth='6rem'
        direction='both'
        event='pointer'
        eventRotation='40deg'
        eventDirection='default'
        fade={false}
        layers={20}
        perspective='900px'>
        <FontAwesomeIcon icon={faCircleNotch} className='z-layer' style={{ fontSize: '17vw', transform: 'rotate(45deg)' }} />
    </Ztext>
)

const CkInfo = () => (
    <div className='contain'>
        <div className='title-row'>
            <div className='title-text'>
            <FontAwesomeIcon icon={faCircleNotch} className='logo-holder-c' style={{ color: 'grey' }} />
                <div className='title-text-marg'>
                <h4 className='text _w'>This Portfolio</h4>
                <h6 className='text _lg'>Frontend &amp; Design</h6>
                </div>
            </div>

            <div className='traffic-light'>
                <div className='color-sample' style={color3}></div>
                <div className='color-sample' style={color2}></div>
                <div className='color-sample' style={color1}></div>
            </div>
        </div>

         <div className='quote-holder'>
            <h6 className='text _lg'><b>Design teaches empathy, coding teaches logic; together, they empower me to create.</b></h6>
        </div>
        <div style={{ paddingLeft: '1.5vw' }}>
            <h6 className='text _g'>+ Cheli Kalina is a Developer / Designer located in Tel Aviv</h6>
            <h6 className='text _g'>+ Frontend: you can view this website's code on <a href='https://github.com/CheliKalina/CK-portfolio/tree/master' alt='Github' target='_blank' rel="noopener noreferrer" className='text _lg text-dec'>GitHub</a></h6>
            <h6 className='text _g'>+ Design: for comparison - view original design portfolio
            <a href='https://chelikalina.com' target='_blank' rel="noopener noreferrer" className='text _lg text-dec'> pt. 1</a></h6>
        </div>
        <div className='stack'>
            <img src={react_logo} alt="React" style={{ width: '2.3vw', opacity: '0.6' }} />
            <FontAwesomeIcon style={lg} icon={faJsSquare} className='stackIcon-2' />
            <FontAwesomeIcon style={lg} icon={faHtml5} className='stackIcon-2' />
            <FontAwesomeIcon style={lg} icon={faCss3Alt} className='stackIcon-2' />
            <img src={firebase} alt="Firebase" style={{ width: '2.5vw', opacity: '0.5' }} />
            <FontAwesomeIcon style={lg} icon={faFontAwesome} className='stackIcon-2' />
            <FontAwesomeIcon style={lg} icon={faBootstrap} className='stackIcon-2' />
        </div> 
    </div>
)

const CkVid = () => (
    <video controls="controls" src={port_video} autoPlay className="video" >
        Your browser does not support the HTML5 Video element. </video>
)

const CkLogo = () => (
    <div className='flex' >
        <div className='logo-holder-end-c'>
            <FontAwesomeIcon icon={faCircleNotch} className="_g" /></div>
        <div className="options _g">
        <a href={'https://docs.google.com/document/d/15EtAk4f-ivYSYvbUlOs7V72n1ARfXOen-XkQqi9eYU0/edit?usp=sharing'} className="text-dec _g"target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    </div>
)

export { CkIntro, CkInfo, CkVid, CkLogo }
