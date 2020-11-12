import React from 'react';
import styled from 'styled-components';
import '../App.css'


const dec = {
    textDecoration: 'none',
    color: 'black', 

  } 
  
const FlexColumn = styled.div(props => ({
  width: '65vw',
  height: '85vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '15vh 0',

}))
const FlexRow = styled.div(props => ({
  height: '15%',
  width: '80%',
  display: 'flex',

}))

const Text = styled.p(props => ({
  fontSize: '.8vw',
  width: '40vw',
  lineHeight: '1vh',
  color: 'grey',
  textAlign: 'left'

}))

const Holder = styled.div(props => ({
  width: '5vw',
  height: '70%',
  padding: '0 8vw',

}))


function About() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <FlexColumn>
      <FlexRow>
      <div className='about-header'>design</div>
        <Holder>
          <Text>+ My creative journey began at an early age, exploring the arts through any medium I could find. </Text>
          <Text>+ With a creative eye and a desire to build on this skillset, I found myself drawn to the design world. </Text>
          <Text>+ Through the Communications Design program at SU, I learned how to translate ideas into reality. </Text>
        </Holder>
      </FlexRow>
      <FlexRow>
        <div className='about-header'>frontend</div>
        <Holder>
          <Text>+ After spending some time in Tel Aviv, I signed up for an intensive 6 month programming bootcamp. </Text>
          <Text>+ As a Frontend developer with a design background, I apply UX / UI to all of my coding endeavors. </Text>
          <Text>+ Design guides me as I write clear, concise, reusable code while building effective user interfaces. </Text>
        </Holder>
      </FlexRow>
      <FlexRow>
        <div className='about-header'>contact</div>
        <Holder>
          <Text>+ kalinacheli@gmail.com</Text>
          <Text>+ 052 940 2744</Text>
          <Text >+<a href="https://www.linkedin.com/in/cheli-kalina-8212abb3/" alt='LinkedIn' target="_blank" style={dec} rel="noopener noreferrer"> LinkedIn </a> || 
          <a href={'https://docs.google.com/document/d/15EtAk4f-ivYSYvbUlOs7V72n1ARfXOen-XkQqi9eYU0/edit?usp=sharing'} style={dec} target="_blank" rel="noopener noreferrer"> Resume</a>
</Text>
        </Holder>
      </FlexRow>
    </FlexColumn>    

</div>
  )
}

export default About
