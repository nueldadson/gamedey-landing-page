import React from 'react';
import { styled } from "styled-components";
import { useState } from 'react';
import { Slide, Fade } from 'react-awesome-reveal'
import { FaInstagram, FaLinkedin, FaTwitter, FaForward } from 'react-icons/fa';
import './footer.css';




const Footerr = () => {

  const EmailInputExample = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  }

  const Foooter = styled.div`
  padding-top: 2rem;
  overflow-x: hidden;
    max-width: 100vw;
    min-height: 100vh;
    /* height: 100vh; */
    /* max-height: 1000px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* gap: 2rem ; */
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
  const EmailSection = styled.div`
    border-radius: 15px;
    border: 3px solid white;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35%;
    margin-bottom: 100px;

    @media screen and (max-width: 868px) {
      width: 60%;
      border-radius: 25px;
      height: 70px;
    }
    @media screen and (max-width: 460px) {
      width: 85%;
      height: 55px;
      border-radius: 40px;
  }
  `
  const FooterLinkSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    color: whitesmoke;
    
    @media screen and (max-width: 460px) {
      align-items: start;
      flex-direction: column;
      gap: 0.4rem;
      margin-bottom: 80px;
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
    color: whitesmoke;
    margin-bottom: 20px;

    @media screen and (max-width: 500px) {
      font-size: 2.6rem;
    }
    `
  const CopyrightText = styled.h3`
    color: whitesmoke;
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
  width:18%;
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
    

  return (
    <Foooter className="foooter">
        <FooterHeading>
      <Slide  direction="up" duration="600">
          Intrested in receiving Gamedey updates directly to your email Subscribe today!
      </Slide>
        </FooterHeading>
        <EmailSection>
      {/* <Slide  direction="up" duration="600"> */}
          <input
            type="email"
            id="email"
            name="email"
            // value={email}
            placeholder="Email"
            required
            />
          <FooterLink>
            <SendBtn>
              <SendIcon />
            </SendBtn>
          </FooterLink>
      {/* </Slide> */}
        </EmailSection>
      <Slide  direction="left" duration="600">
        <FooterLinkSection>
            <FooterLink1 smooth to="#about">
              About Us
            </FooterLink1>
            <FooterLink2 smooth to="#contact-us">
              Contact Us
            </FooterLink2>
            <FooterLink3 smooth to="#faqs">
              FAQs
            </FooterLink3>
        </FooterLinkSection>
      </Slide>
      <Slide  direction="up" duration="600">
        <FooterIconSection>
          <LinkedinIcon />
          <InstagramIcon />
          <TwitterIcon />
        </FooterIconSection>
      </Slide>
        <Gamedeyy>
          gamedey
        </Gamedeyy>
        <CopyrightText>
          Copyright © 2023 Gamedey. Made with ❤ by Gamedey.co
          
          </CopyrightText>
    </Foooter>
  );
}

export default Footerr;
