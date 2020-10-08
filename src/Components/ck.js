import React from 'react';
import '../App.css'
import Ztext from 'react-ztext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import port_video from '../Assets/port_video.mov';
import react_logo from '../Assets/stack_icons/react.png';
import { faHtml5, faCss3Alt, faJsSquare, faFontAwesome, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import firebase_b from '../Assets/stack_icons/firebase_b.png';

const color1 = {
    backgroundColor: 'black'
}
const color2 = {
    backgroundColor: 'grey'
}
const color3 = {
    backgroundColor: 'lightgrey'
}

const CkIntro = () => (
    <Ztext
        depth='4rem'
        direction='both'
        event='pointer'
        eventRotation='40deg'
        eventDirection='default'
        fade={false}
        layers={10}
        perspective='900px'>
        <FontAwesomeIcon icon={faCircleNotch} className='z-layer' style={{ fontSize: '17vw', transform: 'rotate(45deg)' }} />
    </Ztext>
)

const CkInfo = () => (
    <div className='contain'>
        <div className='title-row'>
            <FontAwesomeIcon icon={faCircleNotch} className='logo-holder-c' />
            <div className='title-text'>
                <h3 className='text _w'>This Portfolio</h3>
                <h6 className='text _lg'>Frontend &amp; Design</h6>
            </div>

            <div className='traffic-light'>
                <div className='color-sample' style={color1}></div>
                <div className='color-sample' style={color2}></div>
                <div className='color-sample' style={color3}></div>
            </div>
        </div>
        <div className='quote-holder'>
            <h6 className='text'><b>Design teaches empathy, coding teaches logic; together, they empower me to create.</b></h6>
        </div>
        <div style={{ paddingLeft: '1.5vw' }}>
            <h6 className='text _lg'>+ Cheli Kalina is a Developer / Designer located in Tel Aviv</h6>
            <h6 className='text _lg'>+ Frontend: you can view this website's code on <a href='https://github.com/CheliKalina/CK-portfolio/tree/master' alt='Github' target='_blank' rel="noopener noreferrer" className='text text-dec'>GitHub</a></h6>
            <h6 className='text _lg'>+ Design: for comparison - view original design portfolio
            <a href='https://chelikalina.com' target='_blank' rel="noopener noreferrer" className='text text-dec'> pt. 1</a></h6>
        </div>

        <div className='stack'>
            <img src={react_logo} alt="React" style={{ width: '2.3vw', opacity: '0.7'  }} />
            <FontAwesomeIcon icon={faJsSquare} className='stackIcon-2' />
            <FontAwesomeIcon icon={faHtml5} className='stackIcon-2' />
            <FontAwesomeIcon icon={faCss3Alt} className='stackIcon-2' />
            <img src={firebase_b} alt="Firebase" style={{ width: '2.5vw', opacity: '0.7'  }} />
            <FontAwesomeIcon icon={faFontAwesome} className='stackIcon-2' />
            <FontAwesomeIcon icon={faBootstrap} className='stackIcon-2' />
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
            <FontAwesomeIcon icon={faCircleNotch} className="_b" /></div>
        <div className="options _b">
            <a href='https://drive.google.com/file/d/1Vc7Bq9AaKlQfLer6jb4BJ_ItNX5PYbiC/view?usp=sharing' className="text-dec" target="_blank" rel="noopener noreferrer">resume</a>
        </div>
    </div>
)

export { CkIntro, CkInfo, CkVid, CkLogo }
