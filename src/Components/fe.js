import React from 'react';
import '../App.css'
import logo_fe from '../Assets/proj_logos/logo_fe.png';
import fe_watch from '../Assets/fe/fe_watch.png';
import fe_hero from '../Assets/fe/fe_hero.jpg';
import fe_insta from '../Assets/fe/fe_insta.png';
import fe_1 from '../Assets/fe/fe_1.png';
import fe_2 from '../Assets/fe/fe_2.png';
import fe_gym from '../Assets/fe/fe_gym.png';
import fe_mail from '../Assets/fe/fe_mail.png';
import fe_lockeroom from '../Assets/fe/fe_lockeroom.png';
import fe_video from '../Assets/fe/fe_video.mov';
import fe_gradient from '../Assets/fe/fe_gradient.png';
import ai from '../Assets/adobe_icons/ai.png';
import ps from '../Assets/adobe_icons/ps.png';
import id from '../Assets/adobe_icons/id.png';
import pr from '../Assets/adobe_icons/pr.png';
import xd from '../Assets/adobe_icons/xd.png';


const color1 = {
    backgroundColor: '#dd1f26'
}
const color2 = {
    backgroundColor: '#7C1F40'
}
const color3 = {
    backgroundColor: '#4f3390'
}
const quote = {
    color: '#dd1f26',
    
}
const voice = {
    color: '#4f3390',
}

const FeIntro = () => (
    <img className="watch" src={fe_watch} alt='Fe watch' />
)

const FeInfo = () => (
    <div className='contain'>
        <div className='title-row'>
            <img src={fe_gradient} alt='Fe logo' className='logo-holder' />
            <div className='title-text'>
                <h3 className='text _w'>Fe: Mars Fitness Experience</h3>
                <h6 className='text _g'>Lunge for Mankind</h6>
            </div>

            <div className='traffic-light'>
                <div className='color-sample' style={color1}></div>
                <div className='color-sample' style={color2}></div>
                <div className='color-sample' style={color3}></div>
            </div>
        </div>
        <div className='quote-holder'>
            <p className='text-quote' style={quote}>"I could either watch it happen or be a part of it."</p>
            <p className='quote-author' style={quote} >— Elon Musk</p>
        </div>
        <div className='bullets'>
            <div>
                <h6 className='text _lg'>+ Target: Thrill seeking adventurers</h6>
                <h6 className='text _lg'>+ Objective: Space travel preparation</h6>
                <h6 className='text _lg'>+ Technology: Skiin activewear monitoring </h6>
                <h6 className='text _lg'>+ Deliverables: brand, ui, packaging &amp; ads </h6>
            </div>
            <div>
                <h6 className='text' style={voice}>COSMOLOGICAL</h6>
                <h6 className='text' style={voice}>PHYSIOLOGICAL</h6>
                <h6 className='text' style={voice}>EXTRAORDINARY</h6>
                <h6 className='text' style={voice}>2018</h6>
            </div>
        </div>

        <div className='stack-adobe'>
            <img src={ps} alt="Photoshop Logo" className="adobe-logos" />
            <img src={ai} alt="Illustrator Logo" className="adobe-logos" />
            <img src={id} alt="Indesign Logo" className="adobe-logos" />
            <img src={pr} alt="Premiere Logo" className="adobe-logos" />
            <img src={xd} alt="XD Logo" className="adobe-logos" />
        </div>
    </div>
)
const FeHero = () => (
    <div className='center'>
        <img src={fe_hero} alt="Fe Starter Pack" className="hero" />
    </div>
)
const FeVid = () => (
    <video controls="controls" src={fe_video} autoPlay className="video" >
        Your browser does not support the HTML5 Video element. </video>
)
const FeImg1 = () => (
    <div className='center'>
        <img src={fe_mail} alt="Fe Stationary" className="hero" />
    </div>
)
const FeImg2 = () => (
    <img src={fe_gym} alt="Fe Gym" className="hero-2" />
)
const FeImg3 = () => (
    <img src={fe_lockeroom} alt="Fe Locker Room" className="hero-2" />
)
const FeImg4 = () => (
    <img src={fe_insta} alt="Fe Instagram" className="hero" />
)
const FeImg5 = () => (
        <img src={fe_1} alt="Fe Campaign" className="hero-2" />
)
const FeImg6 = () => (
        <img src={fe_2} alt="Fe Campaign" className="hero-2" />
)

const FeLogo = () => (
    <div className='flex' >
        <img src={logo_fe} alt='Fe logo' className='logo-holder-end' />
    </div>
)

export { FeIntro, FeInfo, FeHero, FeVid, FeImg1, FeImg2, FeImg3, FeImg4, FeImg5, FeImg6, FeLogo }
