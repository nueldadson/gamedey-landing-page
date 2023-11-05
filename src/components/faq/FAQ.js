import React, { useState } from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  /* border: 1px solid #ccc; */
  margin: 10px;
  margin-bottom: 4rem;
  padding: 2px 10px;
  box-shadow: 3.3px 4px 3px gray;
  
  @media screen and (max-width: 350px) {
  margin-bottom: 2.5rem;
}
`;

const Question = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.8s ease;
`;

const Icon = styled.span`
  display: inline-block;
  transition: transform 0.8s ease;
  transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 10px;
`;

const QuestionText = styled.span`
  font-weight: bold;
  font-size: 1.5rem;

    @media screen and (max-width: 810px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 300px) {
      font-size: 0.8rem;
    }
`;

const Answer = styled.div`
  margin-top: 10px;
  padding: 0rem 2rem 0rem 2rem;
  max-height: ${props => (props.isOpen ? '500px' : '0')};
  overflow: hidden;
  font-size: medium;
  transition: max-height 0.8s ease;
`;

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FAQContainer >
      <Question onClick={toggleAnswer}>
        <Icon isOpen={isOpen}>{isOpen ? '▲' : '+'}</Icon>
        <QuestionText>{question}</QuestionText>
      </Question>
      <Answer isOpen={isOpen}>{answer}</Answer>
    </FAQContainer>
  );
};

export default FAQ;
