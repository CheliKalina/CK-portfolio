import React, { useState } from 'react';
import logo from './Assets/proj_logos/c_logo.png';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import About from './Components/about.js';
import Project from './Components/project.js';
import { CkIntro, CkInfo, CkVid, CkLogo } from './Components/ck.js';
import { AuraIntro, AuraInfo, AuraVid, AuraLogo } from './Components/aura.js';
import { FeIntro, FeInfo, FeHero, FeVid, FeImg1, FeImg2, FeImg3, FeImg4, FeImg5, FeImg6, FeLogo } from './Components/fe.js';
import { BoopIntro, BoopInfo, BoopHero, BoopVid, BoopImg1, BoopImg2, BoopImg3, BoopLogo } from './Components/boop.js';
import { NikonIntro, NikonInfo, NikonHero, NikonVid, NikonImg1, NikonImg2, NikonLogo } from './Components/nikon.js';
import { CondIntro, CondInfo, CondHero, CondImg1, CondImg2, CondImg3, CondImg4, CondImg5, CondLogo } from './Components/cond.js';

function App() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const pages = [

    {
      id: 1,
      arr: [
        { page: <CkIntro /> },
        { page: <CkInfo /> },
        { page: <CkVid /> },
        { page: <CkLogo /> }
      ]
    }
    ,
    {
      id: 2,
      arr: [
        { page: <AuraIntro /> },
        { page: <AuraInfo /> },
        { page: <AuraVid /> },
        { page: <AuraLogo /> }
      ]
    }
    ,
    {
      id: 3,
      arr: [
        { page: <FeIntro /> },
        { page: <FeInfo /> },
        { page: <FeHero /> },
        { page: <FeVid /> },
        { page: <FeImg1 /> },
        { page: <FeImg2 /> },
        { page: <FeImg3 /> },
        { page: <FeImg4 /> },
        { page: <FeImg5 /> },
        { page: <FeImg6 /> },
        { page: <FeLogo /> },

      ]
    }
    ,
    {
      id: 4,
      arr: [
        { page: <BoopIntro /> },
        { page: <BoopInfo /> },
        { page: <BoopHero /> },
        { page: <BoopVid /> },
        { page: <BoopImg1 /> },
        { page: <BoopImg2 /> },
        { page: <BoopImg3 /> },
        { page: <BoopLogo /> },

      ]
    }
    ,
    {
      id: 5,
      arr: [
        { page: <NikonIntro /> },
        { page: <NikonInfo /> },
        { page: <NikonHero /> },
        { page: <NikonVid /> },
        { page: <NikonImg1 /> },
        { page: <NikonImg2 /> },
        { page: <NikonLogo /> },

      ]
    }
    ,
    {
      id: 6,
      arr: [
        { page: <CondIntro /> },
        { page: <CondInfo /> },
        { page: <CondHero /> },
        { page: <CondImg1 /> },
        { page: <CondImg2 /> },
        { page: <CondImg3 /> },
        { page: <CondImg4 /> },
        { page: <CondImg5 /> },
        { page: <CondLogo /> },

      ]
    }
    ,
  ]

  const slides = [
    { key: 1, id: 1, bg: 'ck slide' },
    { key: 2, id: 2, bg: 'aura slide', },
    { key: 3, id: 3, bg: 'fe slide' },
    { key: 4, id: 4, bg: 'boop slide' },
    { key: 5, id: 5, bg: 'nikon slide' },
    { key: 6, id: 6, bg: 'cond slide' },
    { key: 7, id: 7, bg: 'alexir slide' },
    { key: 8, id: 8, bg: 'impasta slide' },
    { key: 9, id: 9, bg: 'hangry slide' },
  ]
  const [dateTime] = useState(new Date());

  return (
    <div className="App">
      <Navbar className='nav' expand="lg">
        <Navbar.Brand href="/"><img src={logo} alt={'logo'} className="App-logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="/about">about</Nav.Link>
            <Nav.Link className="nav-link" href="/contact">contact</Nav.Link>
            <Nav.Link className="nav-link" href="http://chelikalina.com/" target="_blank">CK pt.1</Nav.Link>
          </Nav>
          <div className="nav-link" style={{ float: 'right' }}>{`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}</div>
        </Navbar.Collapse>
      </Navbar>
      <div className='mobile'>
        <h5>At this point in time, this Portfolio is only available to view on desktop.</h5>
        <p>Apologies for the inconvenience!</p>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} prevIcon={<div className="square"></div>} nextIcon={<div className="square"></div>} indicators={false}>
        {slides.map(slide =>
          <Carousel.Item className={slide.bg} key={slide.key} >
            {pages.map(proj =>
              proj.id === slide.id ? <Project project={proj.arr} /> : null
            )
            }
          </Carousel.Item>
        )}
      </Carousel >
    </div >

  );
}

export default App;