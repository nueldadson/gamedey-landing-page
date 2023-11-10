import React from 'react'
import styled from "styled-components"
// import { HashLink as faqLink } from "react-router-hash-link";
import FAQ from "./FAQ"
import { Slide } from "react-awesome-reveal";

const FAQsectionn = styled.div`
  padding: 0rem 5rem 5rem 5rem;
  background-color: white;
  /* display: flex; */
  /* align-items: center ; */
  
  @media screen and (max-width: 600px) {
    padding: 2.5rem;
  }
  @media screen and (max-width: 400px) {
      padding: 1.5rem;
    }
  @media screen and (max-width: 300px) {
      padding: 0.8rem;
    }
`;
const FAQHeading = styled.h1`
font-size: 3rem;
font-weight: 800;
display: flex;
align-items: center;
justify-content: center;
/* margin-bottom: 6rem; */
`;
const FAQContent = styled.h2`
font-weight: 800;
display: flex;
align-items: center;
justify-content: center;
font-size: 2em;

@media screen and (max-width: 600px) {
  font-size: 1.3em;
}
@media screen and (max-width: 400px) {
  font-size: 1em;
}
@media screen and (max-width: 300px) {
  font-size: 0.7em;
}
`
const FAQContent2 = styled.h2`
font-weight: 800;
display: flex;
color: #946aef;
align-items: center;
justify-content: center;
font-size: 2em;

@media screen and (max-width: 600px) {
  font-size: 1.3em;
}
@media screen and (max-width: 400px) {
  font-size: 1em;
}
@media screen and (max-width: 300px) {
  font-size: 0.7em;
}
`

const FAQBtn = styled.h2`
align-items: center;
justify-content: center;
/* width: fit-content; */
display: flex;
color: #fff;
margin-top: 20px;
font-size: 1rem;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-bottom: 3rem;
`

const Spann = styled.span`
  border: none;
  outline: none;
  background: #946aef;
  border-radius: 12px;
  padding:12px 26px;
  
  @media screen and (max-width: 500px) {
    padding:10px 30px;
    font-size: 0.7rem;
  font-weight: bold;
  }
  &:hover {
  transition: all 0.2s ease-in-out;
  background: #f2af1a;
    color: #fff;
  }
&:hover {
    transition: all 0.2s ease-in-out;
    background: #f2af1a;
    color: #fff;
  }
`



const FAQsection = () => {
  return (
    <>
      <FAQsectionn id="faqs">
        <FAQHeading>
          FAQs
        </FAQHeading>
        <Slide  direction="up" duration="600">
          <FAQ
          question="What is Gamedey?"
          answer="Gamedey is a social platform for fitness enthusiasts of all backgrounds, where you can connect, have fun, and unleash your competitive spirit!"
          />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQ
        question="Which kind of people would I connect with on Gamedey?"
        answer="You can find people from all walks of life. Find anyone that suits the field that you would like to connect with."
        />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQ
        question="Can I reach out to a Coach or Facilitator in another location?"
        answer="Oh yes! Gamedey is boundless and borderless, so you can search for people in a different country as you. If they have a Gamedey account, they are reachable by anyone from anywhere."
        />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQ
        question="Can I be a Coach and a Facilitator at the same time?"
        answer="Technically, yes you can. When everyone signs up on Gamedey, they have individual accounts until they decide to upgrade to a Coach or/and facilitator account if they wish to share their expertise and get paid for doing so."
        />
        </Slide>
        <Slide  direction="up" duration="600">
        <FAQ
        question="Why should I join Gamedey?"
        answer="Join Gamedey to experience a thriving community that embraces your passion for fitness. Gain expert coaching, easy access to premium sporting facilities, and support from like-minded individuals."
        />
        </Slide>
      </FAQsectionn> 
        <Slide  direction="up" duration="600">
          <FAQContent>
            Still searching for an answer?
          </FAQContent>
        </Slide>
        <Slide  direction="up" duration="650">
          <FAQContent2>
            Feel free to ask us
          </FAQContent2>
        </Slide>
        <Slide  direction="up" duration="700">
          <faqLink  smooth to="/">
            <FAQBtn>
              <Spann>
                Contact us
              </Spann>
            </FAQBtn>
          </faqLink>
        </Slide>
    </>
  )
}

export default FAQsection;
