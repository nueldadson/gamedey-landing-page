import React from 'react';
import './Slidein.css';

const Slidein = () => {
  return (
      // <div className="hideslide sizee">
      //   <div className="container1">
      //   </div>
      //   <div className="container2">
      //   </div>
      //   <div className="container3">
      //   </div>
      //   <div className="container4">
      //   </div>
      //   <div className="container5">
      //   </div>
      // </div>
      <div className="slide-in-div hideslide">
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="slide-in hideslide"></div>
        <div className="introtext">
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
  )
}

export default Slidein;
