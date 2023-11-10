import React, { Component } from "react";
import { Slide } from 'react-awesome-reveal';
import Slider from "react-slick";

// import "../../../node_modules/slick-carousel/slick/slick.css"; 
// import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 
import './carousell.css'

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 4,
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
    const settings2 = {
      className: "center",
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      swipeToSlide: true,
      autoplay: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    }
    const settings3 = {
      className: "center",
      infinite: true,
      slidesToShow: 2,
      swipeToSlide: true,
      autoplay: true,
      arrows: false,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    }
    const settings4 = {
      className: "center",
      infinite: true,
      slidesToShow: 1,
      swipeToSlide: true,
      arrows: false,
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
          <Slider {...settings}>
          <div>
            <img src={require('../../assets/images/Rectangle 51.png')} alt="" className=""/>
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 52.png')} alt="" className=""/>
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 53.png')} alt="" className=""/>
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 54.png')} alt="" className=""/>
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 55.png')} alt="" className=""/>
            <h3 className="extra">5</h3>
          </div>
          {/* <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
        </Slider>
      </div>
        
      <div className="carousell2">
        {/* <h2>Swipe To Slide</h2> */}
        <Slider {...settings2}>
          <div>
            {/* <h3>1</h3> */}
            <img src={require('../../assets/images/Rectangle 51.png')} alt="" className=""/>
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 52.png')} alt="" className=""/>
            {/* <h3>2</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 53.png')} alt="" className=""/>
            {/* <h3>3</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 54.png')} alt="" className=""/>
            {/* <h3>4</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 55.png')} alt="" className=""/>
            <h3 className="extra">5</h3>
          </div>
          {/* <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
        </Slider>
      </div>
        
      <div className="carousell3">
        {/* <h2>Swipe To Slide</h2> */}
        <Slider {...settings3}>
          <div>
            {/* <h3>1</h3> */}
            <img src={require('../../assets/images/Rectangle 51.png')} alt="" className=""/>
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 52.png')} alt="" className=""/>
            {/* <h3>2</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 53.png')} alt="" className=""/>
            {/* <h3>3</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 54.png')} alt="" className=""/>
            {/* <h3>4</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 55.png')} alt="" className=""/>
            <h3 className="extra">5</h3>
          </div>
          {/* <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div> */}
        </Slider>
      </div>

      <div className="carousell4">
        {/* <h2>Swipe To Slide</h2> */}
        <Slider {...settings4}>
          <div>
            {/* <h3>1</h3> */}
            <img src={require('../../assets/images/Rectangle 51.png')} alt="" className=""/>
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 52.png')} alt="" className=""/>
            {/* <h3>2</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 53.png')} alt="" className=""/>
            {/* <h3>3</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 54.png')} alt="" className=""/>
            {/* <h3>4</h3> */}
          </div>
          <div>
            <img src={require('../../assets/images/Rectangle 55.png')} alt="" className=""/>
            <h3 className="extra">5</h3>
            </div>
          {/* <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
            </div>
          <div>
            <h3>8</h3>
          </div> */}
        </Slider>
      </div>
      </>
    );
  }
}