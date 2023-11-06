import React from 'react';
import { useState, useEffect } from 'react';
import './Slidein.css';

const Slidein = () => {
  const[isVisible, setIsVisible] = useState(true);

  useEffect( () => {
    const timer =setTimeout( () => {
      setIsVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
      <div className="slide-in-div hideslide">
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="introtext hideslide">
          <h2 className="introtext1">
            meet
          </h2>
          <h2 className="introtext2">
            empower
          </h2>
          <h2 className="introtext3">
            elevate
          </h2>
          <h2 className="introtext4">
            ignite
          </h2>
          <h2 className="introtext5">
            grow
          </h2>
        </div>
      </div>
  ) : null;
}

export default Slidein;
