import React, { useState } from 'react';
import logo from './Assets/proj_logos/c_logo.png';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons/'
import { Navbar, Nav } from 'react-bootstrap'

const Square = styled.div(props => ({
  height: '10px',
  width: '10px',
  background: 'black',
  borderRadius: '15%',

}))

const Hover = styled.div`
  & > div {
    &:hover {
      background: ${props => (props.shouldHover ? "transparent" : "none")};
      border: ${props => (props.shouldHover ? "1px solid black" : "none")};
      transform: scale(2, 2);
    }
  }
`;

function App() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const slides = [
    { id: 1, bg: 'ck' },
    { id: 2, bg: 'aura' },
    { id: 3, bg: 'fe' },
    { id: 4, bg: 'boop' },
    { id: 5, bg: 'nikon' },
    { id: 6, bg: 'cond' },
    { id: 7, bg: 'alexir' },
    { id: 8, bg: 'impasta' },
    { id: 8, bg: 'hangry' },
  ]

  return (
    <div className="App">
          <Navbar className='nav'expand="lg">
            <Navbar.Brand href="#"><img src={logo} alt={'logo'} className="App-logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="#home">work</Nav.Link>
                <Nav.Link className="nav-link" href="#link">about</Nav.Link>
                <Nav.Link className="nav-link" href="#link">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} prevIcon={<Hover shouldHover={true}><Square /></Hover>} nextIcon={<Hover shouldHover={true}><Square /></Hover>} indicators={false}>
        {slides.map(slide =>
          <Carousel.Item className={`slide ${slide.bg}`} key={slide.id}>
            {slide.bg}
          </Carousel.Item>
        )}
      </Carousel >
    </div>

  );
}

export default App;
