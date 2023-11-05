import React, { useState, useEffect, useRef } from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from 'styled-components';


const TypingContainer = styled.div`
  /* font-family: Arial, sans-serif; */
  color: #946aef ;
`;

const TypingText = styled.p`
  overflow: hidden;
  animation: ${props =>
    props.startAnimation ? 'typing 2s steps(40, end)' : 'none'},
    ${props =>
      props.startAnimation ? 'blink-caret 0.75s step-end infinite' : 'none'};
  color: ${props => (props.startAnimation ? '#946aef' : 'initial')}; /* Set color to purple for animated texts */

  /* @media (max-width: 768px) {
    font-size: 1rem; Adjust font size for smaller devices
  } */
`;

const spanStyle = {
    color: 'Black',
  };


const TypingAnimation = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [shouldContinue, setShouldContinue] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShouldContinue(true);
        } else {
          setShouldContinue(false);
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (shouldContinue) {
      const currentText = texts[currentTextIndex];
      let currentChar = 0;
      let reverseTimeout;

      const typingInterval = setInterval(() => {
        if (!shouldContinue) {
          clearInterval(typingInterval);
          return;
        }

        if (currentChar <= currentText.length) {
          setDisplayText(currentText.slice(0, currentChar));
          currentChar++;
        } else {
          clearInterval(typingInterval);

          if (currentTextIndex === 0) {
            reverseTimeout = setTimeout(() => {
              currentChar = currentText.length;
              const reverseInterval = setInterval(() => {
                setDisplayText(currentText.slice(0, currentChar));
                currentChar--;

                if (currentChar < 0) {
                  clearInterval(reverseInterval);

                  setTimeout(() => {
                    if (currentTextIndex + 1 < texts.length) {
                      setCurrentTextIndex(currentTextIndex + 1); // Move to the next text
                    }
                  }, 1000); // Delay before changing text
                }
              }, 100);
            }, 1000); // Delay before reversing
          } else if (currentTextIndex === 1) {
            reverseTimeout = setTimeout(() => {
              currentChar = currentText.length;
              const reverseInterval = setInterval(() => {
                setDisplayText(currentText.slice(0, currentChar));
                currentChar--;

                if (currentChar < 0) {
                  clearInterval(reverseInterval);

                  setTimeout(() => {
                    if (currentTextIndex + 1 < texts.length) {
                      setCurrentTextIndex(currentTextIndex + 1); // Move to the next text
                    }
                  }, 1000); // Delay before changing text
                }
              }, 100);
            }, 1000); // Delay before reversing
          } else {
            setTimeout(() => {
              if (currentTextIndex + 1 < texts.length) {
                setCurrentTextIndex(currentTextIndex + 1); // Move to the next text
              }
            }, 1000); // Delay before changing text
          }
        }
      }, 100);

      return () => {
        clearInterval(typingInterval);
        clearTimeout(reverseTimeout);
      };
    } else {
      // Reset animation state when visibility is lost
      setCurrentTextIndex(0);
      setDisplayText('');
    }
  }, [texts, currentTextIndex, shouldContinue]);

  return (
    <TypingContainer ref={containerRef}>
      <Slide  direction="left" duration="700">
        <TypingText startAnimation={shouldContinue}>
        <span style={spanStyle}>Gamedey is a Safe Haven for</span> {displayText}
        </TypingText>
      </Slide>
    </TypingContainer>
  );
};

export default TypingAnimation;
