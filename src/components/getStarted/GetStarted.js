import React from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';

const Getstarted = styled.div`
  text-align: center;
  max-width: 100vw;
  background: black;
  padding: 20px;
  overflow-x: hidden;
  min-height: fit-content;
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight:700;
  padding-top: 15px;
  color: white;
  
  
  @media screen and (max-width: 790px) {
      font-size: 2.5rem;
    }
  @media screen and (max-width: 410px) {
      font-size: 2rem;
      margin-top: 3rem;
    }
  @media screen and (max-width: 300px) {
      font-size: 1.8rem;
      margin-top: 2rem;
    }
    `;

const Heading2 = styled.h1`
  font-size: 1.4rem;
  padding: 0px 8%;
  padding-bottom: 20px;
  font-weight: 500;
  /* margin-bottom: 3rem; */
  letter-spacing: 2px;
  color: white;
  
  @media screen and (max-width: 790px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 410px) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 0.7rem;
    /* margin-bottom: 1.5rem; */
    }
    `;

const ColumnWrapper = styled.div`
display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  `;

const Column = styled.div`
  flex: 1;
  color: #ccc;
  background-color: #080500;
  text-align: left !important;
  min-width: 199px;
  max-width: 200px;
  padding: 1.2rem;
  border: 3px solid #ffd996;
  border-radius: 10px;
  box-shadow: 1px 5px 15px #281d0f;
  
  @media screen and (max-width: 300px) {
    min-width: 150px !important;
  }
`;

const ColumnImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;


const GetStarted = () => {
  return (
    <>
      <Getstarted id="getst">
        <Slide  direction="down" duration="700">
          <Heading>
            GET STARTED TODAY! 
          </Heading>
        </Slide>
        <Slide  direction="down" duration="700">
          <Heading2>
            Whatever your interest is, there are people around you who share the same on Gameday. Find them, connect and make your dream leisure time a reality. Join the wait list to be a member of the Gamedey community !
          </Heading2>
        </Slide>
        <ColumnWrapper>
          <Slide  direction="left" duration="600">
            <Column>
              <ColumnImage src="/" alt="get started img for create team" />
              <h2 className="columnHeading">Create team &#x2728;</h2>
              <p className="columnContent">Find your community! Locate on Gameday people with shared interests, around you.</p>
            </Column>
            <Column>
              <h2 className="columnHeading">Send Invites</h2>
              <p className="columnContent">Column content...</p>
            </Column>
          </Slide>
          <Slide  direction="right" duration="600">
            <Column>
              <h2 className="columnHeading">Find Intreast</h2>
              <p className="columnContent">Column content...</p>
            </Column>
            <Column>
              <h2 className="columnHeading">Book Facility</h2>
              <p className="columnContent">Column content...</p>
            </Column>
          </Slide>
        </ColumnWrapper>
      </Getstarted>
    </>
  );
};

export default GetStarted;
