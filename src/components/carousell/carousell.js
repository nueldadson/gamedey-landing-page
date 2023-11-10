import React, { Component, useEffect, useState } from "react";
import { Slide } from 'react-awesome-reveal';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 
import './carousell.css'

const SwipeToSlide = () => {
 
  const [slidesToShow, setSlidesToShow] = useState(4)

  useEffect( () => {
    const HandleResize = () => {
      if( window.innerWidth > 998 ) {
        setSlidesToShow(4);
      }
       else if( window.innerWidth > 768 ) {
        setSlidesToShow(3);
      }
       else if (window.innerWidth > 350) {
        setSlidesToShow(2);
      } else {
      setSlidesToShow(1);
      }
    };

    HandleResize();

    window.addEventListener('resize', HandleResize)

    return () => {
      window.removeEventListener('resize', HandleResize)
    }
}, []);

  const settings = {
    className: "center",
      infinite: true,
      slidesToShow,
      arrows: false,
      autoplaySpeed: 1000,
      swipeToSlide: true,
      autoplay: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
      }
    }
    return (
      <>
      <div className="carousell">
          <Slider {...settings}className="toShow">
          <div className="img1cont">
            <img src={require('../../assets/images/Rectangle 51.png')} alt="" className="img1"/>
          </div>
          <div className="img1cont">
            <img src={require('../../assets/images/Rectangle 52.png')} alt="" className="img1"/>
          </div>
          <div className="img1cont">
            <img src={require('../../assets/images/Rectangle 53.png')} alt="" className="img1"/>
          </div>
          <div className="img1cont">
            <img src={require('../../assets/images/Rectangle 54.png')} alt="" className="img1"/>
          </div>
          <div className="img1cont">
            <img src={require('../../assets/images/Rectangle 55.png')} alt="" className="img1"/>
          </div>
        </Slider>
      </div>
        
      </>
    );
  }

  export default SwipeToSlide;