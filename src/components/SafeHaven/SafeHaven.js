import React from 'react';
import styled from "styled-components";
import { Slide } from 'react-awesome-reveal';
import { gallery1, gallery2, gallery3, gallery4, gallery5 } from '../../assets/images';
import TypingAnimation from "../typingAnimation/TypingAnimation";
import './safehaven.css';

const Safehavenn = styled.div`
padding: 4rem 2rem;
background-color: white;
/* float: right; */
`;

const Heading = styled.h1`
color: black;
font-size: 2.5rem;
padding: 0px 8%;
font-weight: 700;
/* margin-bottom: 2rem; */

@media screen and (max-width: 727px) {
  font-size: 2rem;
  padding: 0px 4%;
}
@media screen and (max-width: 608px) {
  /* font-size: rem; */
  margin-bottom: 0.5rem;
  padding: 0px 0%;
  /* margin-top: 3rem; */
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
    /* padding: 0px 0%; */
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;
;
const MiniGallery = styled.div`
  display: flex;
  justify-content: center;
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
          <Slide direction="up" duration="600" className="mini-gallery img1">
            <img src={gallery1} alt=""  className="imhs"/>
          </Slide>
          <Slide direction="up" duration="600" className="mini-gallery img1">
            <img src={gallery2} alt="" className="imhs"/>
          </Slide>
          <Slide direction="up" duration="600" className="mini-gallery img1">
            <img src={gallery3} alt="" className="imhs"/>
          </Slide>
          <Slide direction="up" duration="600" className="mini-gallery img1">
            <img src={gallery4} alt="" className="imhs"/>
          </Slide>
          <Slide direction="up" duration="600" className="mini-gallery img1">
            <img src={gallery5} alt="" className="imhs"/>
            </Slide>
        </MiniGallery>
      </Safehavenn>
    </>
  )
}

export default SafeHaven
