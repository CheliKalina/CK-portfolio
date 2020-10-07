import React, { useState } from 'react';
import logo from './Assets/proj_logos/c_logo.png';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import Project from './Components/project.js';
import { CkInfo, CkLogo, Ck3D, CkVid } from './Components/ck.js';

function App() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const pages = [

     { id: 1,
       arr: [
        { page: <Ck3D/> },
        { page: <CkInfo /> },
        { page: <CkVid/> },
        { page: <CkLogo /> }
      ]}
    ,
    { id: 2,
      arr: [
        { page: '1' },
        { page: '2'},
        { page: '3' },
        { page: '4' }
      ]}
    ,
  ]

  const slides = [
    { key: 1, id: 1, bg: 'ck slide' },
    { key: 2, id: 2, bg: 'aura slide',},
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

      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} prevIcon={<div className="square"></div>} nextIcon={<div className="square"></div>} indicators={false}>
        {slides.map(slide =>
          <Carousel.Item className = { slide.bg } key = { slide.key } >
          {pages.map(proj => 
          proj.id === slide.id ? <Project project={proj.arr}/> : null
          )
          }
          </Carousel.Item>
        )}
      </Carousel >
    </div >

  );
}

export default App;