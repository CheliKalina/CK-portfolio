import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const FlexColumn = styled.div(props => ({
  width: '65vw',
  height: '75vh',
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

const Header = styled.h1(props => ({
  paddingRight: '15vw',
  width: '9vw',
  height: '100%',
  borderRight: '1px solid black',
  fontWeight: 'bold',
  


}))
const Text = styled.p(props => ({
  fontSize: '1vw',
  width: '40vw',
  lineHeight: '1vh'

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
      <Header className="black-dec">design</Header>
        <Holder>
          <Text>+ My creative journey began at an early age, exploring the arts through any medium I could find. </Text>
          <Text>+ With a creative eye and a desire to build on this skillset, I found myself drawn to the design world. </Text>
          <Text>+ Through the Communications Design program at SU, I learned how to translate ideas into reality. </Text>
        </Holder>
      </FlexRow>
      <FlexRow>
        <Header className="black-dec">frontend</Header>
        <Holder>
          <Text>+ After spending some time in Tel Aviv, I signed up for an intensive 6 month programming bootcamp. </Text>
          <Text>+ As a Frontend developer with a design background, I apply UX / UI to all of my coding endeavors. </Text>
          <Text>+ Design guides me as I write clear, concise, reusable code while building effective user interfaces. </Text>
        </Holder>
      </FlexRow>
      <FlexRow>
        <Header>contact</Header>
        <Holder>
          <Text>+ kalinacheli@gmail.com</Text>
          <Text>+ 052 940 2744</Text>
          <Text ><a href="https://www.linkedin.com/in/cheli-kalina-8212abb3/" alt='LinkedIn' target="_blank" className="black-dec">+ LinkedIn </a> || 
          <a href='https://drive.google.com/file/d/1Vc7Bq9AaKlQfLer6jb4BJ_ItNX5PYbiC/view?usp=sharing' className="black-dec" target="_blank">  Resume</a>
</Text>
        </Holder>
      </FlexRow>
    </FlexColumn>    

</div>
  )
}

export default About
