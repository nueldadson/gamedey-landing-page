import React from 'react';
import styled from "styled-components";
import { Slide } from 'react-awesome-reveal';
import { gallery1, gallery2, gallery3, gallery4, gallery5 } from '../../assets/images';
import TypingAnimation from "../typingAnimation/TypingAnimation";
import './safehaven.css';

const Safehavenn = styled.div`
padding: 6rem 2rem;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Heading = styled.h1`
color: black;
font-size: 2.5rem;
padding: 0px 8%;
font-weight: 700;
align-self: self-start;

@media screen and (max-width: 727px) {
  font-size: 2rem;
  padding: 0px 4%;
}
@media screen and (max-width: 608px) {
  margin-bottom: 0.5rem;
  padding: 0px 0%;
}
`;

const Content = styled.h1`
color: black;
font-size: 1.7rem;
padding: 0px 8%;
margin-bottom: 3rem;
font-weight: 500;
@media screen and (max-width: 727px) {
  font-size: 1.1rem;
  padding: 0px 4%;
}
@media screen and (max-width: 608px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;
;
const MiniGallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center !important;
  max-width: 90vw;
  gap: 3rem;
  flex-wrap: wrap;
`;

const texts = ["FITNESS ENTHUSIASTS", "COACHES", "FACILITATORS"];


const SafeHaven = () => {
  return (
    <>
      <Safehavenn>
        <Heading>
          {/*  */}
          <TypingAnimation texts={texts} />
        </Heading>
        <Slide direction="left" duration="700">
          <Content>
            Join our vibrant community to connect, grow, and achieve your fitness goals together. Embrace support, unleash creativity, and celebrate success in a positive, uplifting environment. Be part of a transformative fitness experience where camaraderie and positive energy fuel your drive to reach new heights.
          </Content>

        </Slide>
        <MiniGallery>
          <Slide direction="up" duration="600"  className="imhs">
            <img src={gallery1} alt="" />
          </Slide>
          <Slide direction="up" duration="600"  className="imhs" >
            <img src={gallery2} alt="" />
          </Slide>
          <Slide direction="up" duration="600"  className="imhs" >
            <img src={gallery3} alt="" />
          </Slide>
          <Slide direction="up" duration="600"  className="imhs" >
            <img src={gallery4} alt="" />
          </Slide>
          <Slide direction="up" duration="600"  className="imhs" >
            <img src={gallery5} alt="" />
            </Slide>
        </MiniGallery>
      </Safehavenn>
    </>
  )
}

export default SafeHaven
