import React from 'react';
import { About, AboutRectangles} from "./AboutUsElements";
import './About.css';
import { Slide, Fade } from 'react-awesome-reveal';
import { aboutleft1 } from '../../assets/images';
import { aboutleft2 } from '../../assets/images';
import { billboard } from '../../assets/images';
// import SwipeToSlide from "../carousell/carousell";


const AboutUs = () => {
  return (
    <>
      <About className=" flex   h-[800px] w-100vw  bg-[#f2af1s] items-center justify-center" id="about-us">
        <AboutRectangles>
          <img src={aboutleft1} alt="" className="Aboutrectangles1"/>
          <img src={aboutleft2} alt="" className="Aboutrectangles2"/>
        </AboutRectangles>
        <div className=' absolute top-0 flex-col md:flex-row lg:flex-row mt-14 flex justify-start lg:justify-between md:justify-betweem lg:px-12 md:p12 px-8 items-center w-full '>
          <div className=' flex self-start text-left lg:gap-7   flex-col lg:mb-0 md:mb-0 mb-8 font-bold text-[1.8rem] aboutwords w-full'>
            <Slide direction="left" duration="600">
              <h2 className="w-full">
                PERSONAL GROWTH
              </h2>
              <h2 className="w-full">
                COMMUNITY-DRIVEN
              </h2>
              <h2 className="w-full">
                DIVERSITY
              </h2>
              <h2 className="w-full">
                OPPORTUNITIES
              </h2>
            </Slide>
          </div>
          <div className="  flex lg:justify-between md:justify-between  w-[70%] lg:w-[40%] md:w-[60%] h-full">
              <img src={billboard} alt="" className="AboutBanner w-full"/>
          </div>
        </div>
        {/* <SwipeToSlide /> */}
      </About>
    </>
  )
};

export default AboutUs;
