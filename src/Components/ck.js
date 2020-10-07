import React from 'react';
import '../App.css'
import Ztext from 'react-ztext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import port_video from '../Assets/port_video.mov';
import react_logo from '../Assets/stack_icons/react.png';
import { faHtml5, faCss3Alt, faJsSquare, faFontAwesome, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import firebase_b from '../Assets/stack_icons/firebase_b.png';
import fe_watch from '../Assets/fe/fe_watch.png'

const Ck3D = () => (
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
            <FontAwesomeIcon icon={faCircleNotch} style={{ fontSize: '7vw', borderColor: 'black', transform: 'rotate(45deg)', padding: '1.5vw' }} />
            <div className='title-text'>
                <h3 className='text _w'>This Portfolio</h3>
                <h6 className='grey'>Design &amp; Code</h6>
            </div>

            <div className='traffic-light'>
                <div className='color-sample'></div>
                <div className='color-sample'></div>
                <div className='color-sample'></div>
            </div>
        </div>

        <div style={{ height: '20vw', width: '29vw', display: 'flex', flexDirection: 'column', marginBottom: '2.5vw' }}>
            <div style={{ height: '3vw', width: '28vw', display: 'flex', flexDirection: 'row', paddingLeft: '1.5vw', justifyContent: 'space-between' }}>
                <h6 className='text-lgery'></h6>
            </div>
        </div>
    </div>
)

const CkVid = () => (
    <video controls="controls" src={port_video} autoPlay className="video" >
    Your browser does not support the HTML5 Video element. </video>
)

const CkLogo = () => (
    <div className='flex' >
        <div className='logo-holder'>
            <FontAwesomeIcon icon={faCircleNotch} className="_w" /></div>
        <div className="options _w">
            <a href='https://drive.google.com/file/d/1Vc7Bq9AaKlQfLer6jb4BJ_ItNX5PYbiC/view?usp=sharing' className="text-dec _w" target="_blank" rel="noopener noreferrer">resume</a>
        </div>
    </div>
)

export { Ck3D, CkInfo, CkVid, CkLogo }

// const CkAssets = [
//     {
//         page: <Ztext
//             depth='4rem'
//             direction='both'
//             event='pointer'
//             eventRotation='40deg'
//             eventDirection='default'
//             fade={false}
//             layers={10}
//             perspective='900px'>
//             <FontAwesomeIcon icon={faCircleNotch} className='z-layer' style={{ fontSize: '17vw', transform: 'rotate(45deg)' }} />
//         </Ztext>,
//         alt: 'CK 3d logo image',
//         class: 'first-img'

//     },
//     {
//         page: <Info />,
//         alt: 'CK info page',
//         class: 'first-img'

//     },
//     {
//         page: port_video,
//         alt: 'CK portfolio video walk through',
//         class: 'first-img'

//     },
//     {
//         page: <LogoSlide/>,
//         alt: 'CK logo / resume',
//         class: 'first-img'

//     }];

// export default CkAssets;