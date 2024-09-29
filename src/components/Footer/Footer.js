import React from 'react';
import { styled } from "styled-components";
import { useState } from 'react';
import { Slide, Fade } from 'react-awesome-reveal'
import { FaInstagram, FaLinkedin, FaTwitter, FaForward } from 'react-icons/fa';
import './footer.css';




const Footerr = () => {

  const Foooter = styled.div`
  padding-top: 2rem;
  overflow-x: hidden;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    gap: 4rem ; 
    `
  const FooterHeading = styled.h1`
    color: whitesmoke;
    margin-bottom: 50px;
    /* padding-bottom: 2rem; */
    width: 80%;
    font-size: 2.2rem;
    text-align: center;
    font-weight: 800;
    @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 1.7rem;
  }
    @media screen and (max-width: 460px) {
    font-size: 1.4rem;
  }
    @media screen and (max-width: 330px) {
    font-size: 1rem;
  }
    @media screen and (max-width: 290px) {
    font-size: 0.7rem;
  }
  `
  const FooterLinkSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width:100%;
    color: whitesmoke;
    
    @media screen and (max-width: 460px) {
      align-items: center;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 60px;
    }
    `
  const FooterLink1 = styled.h3`
    font-size: 1.3rem;
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    `
  const FooterLink2 = styled.h3`
    font-size: 1.3rem;
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 460px) {
      /* margin-top: -75px; */
    }
    `
  const FooterLink3 = styled.h3`
    font-size: 1.3rem;
    @media screen and (max-width: 320px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 460px) {
      /* margin-top: -45px; */
    }
  `
  const FooterIconSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  `
  
  const SendIcon = styled(FaForward)`
  color: #fff;
  `
  const LinkedinIcon = styled(FaLinkedin)`
  color: #fff;
  `

const InstagramIcon = styled(FaInstagram)`
  color: #fff;
  padding-left: 5px;
  `

  const TwitterIcon = styled(FaTwitter)`
  color: #fff;
  padding-left: 5px;
  `

const Gamedeyy = styled.h1`
    font-size: 5rem;
    font-weight: 800;
    justify-content: center;
    width:100%;
    display:flex;
    color: whitesmoke;
    margin-bottom: 10px;

    @media screen and (max-width: 500px) {
      font-size: 2.6rem;
    }
    `
  const CopyrightText = styled.h3`
    color: whitesmoke;
    width:100%;
    display:flex;
    justify-content: center;
    // padding-bottom: 20px;
    font-size: 0.7rem;
    font-weight: 300;
    @media screen and (max-width: 400px) {
      font-weight: 400;
      font-size: 0.6rem;
    }
    @media screen and (max-width: 300px) {
      font-weight: 400;
      font-size: 0.5rem;
    }
    `
  const FooterLink = styled.span`
  // width:18%;
  background-color:#6363d3;
  border-radius: 30px;
  text-align: center;
  height:90%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    height: 60%;
  }
  `

  const SendBtn = styled.h2`
    color: white;
  `
    
  const currentYear = new Date().getFullYear();

  return (
    <Foooter className="foooter flex flex-col justify-between ">
      <div className='flex justify-center w-[100%]'>
        <FooterHeading>
          <Slide  direction="up" duration="600">
              Intrested in receiving Gamedey updates directly to your email Join Our Waitlist Today!
          </Slide>
        </FooterHeading>
    </div>
    <div className='flex justify-center w-[100%] flex-col'>
      <Slide  direction="left" duration="600">
        <FooterLinkSection>
            <a href="#about-us">
              <FooterLink1 >
                About Us
              </FooterLink1>
            </a>
            <a href="#home">
              <FooterLink2 >
                Contact Us
              </FooterLink2>
            </a>
            <a href="#faqs">
              <FooterLink3 >
                FAQs
              </FooterLink3>
            </a>
        </FooterLinkSection>
      </Slide>
      <Slide  direction="up" duration="600">
        <FooterIconSection>
          <a href='https://www.linkedin.com/company/gamedey/'><LinkedinIcon /></a>
          <a href='https://www.instagram.com/gamedeyapp/'><InstagramIcon /></a>
          <a href='https://x.com/GamedeyApp/'><TwitterIcon /></a>
        </FooterIconSection>
      </Slide>
    </div>
    <div className='flex justify-center w-[100%] flex-col'>  
      <Gamedeyy>
        gamedey
      </Gamedeyy>
      <CopyrightText>
        Copyright © {currentYear} Gamedey. Made with ❤ by Gamedey.co          
      </CopyrightText>
    </div>
    </Foooter>
  );
}

export default Footerr;
