import React from 'react';
import { About, AboutRectangles} from "./AboutUsElements";
import './About.css';
import { Slide, Fade } from 'react-awesome-reveal';
import { aboutleft1 } from '../../assets/images';
import { aboutleft2 } from '../../assets/images';
import { billboard } from '../../assets/images';
import SwipeToSlide from '../carousell/carousell';


const AboutUs = () => {
  return (
    <>
      <About className=" flex flex-col   h-fit w-100vw  bg-[#f2af1s] items-center justify-center" id="about-us">
        <AboutRectangles>
          <img src={aboutleft1} alt="" className="Aboutrectangles1"/>
          <img src={aboutleft2} alt="" className="Aboutrectangles2"/>
        </AboutRectangles>
        <div className='  top-0 flex-col md:flex-row lg:flex-row mt-14 flex justify-start lg:justify-between md:justify-betweem lg:px-12 md:p12 px-8 items-center w-full '>
          <div className=' flex self-start text-left gap-5  flex-col lg:mb-0 md:mb-0 mb-8 font-bold lg:text-[1.8rem] md:text-[1.8rem] sm:text-[2.2rem] text-[1.4rem] whitespace-normal  w-full'>
            <Slide direction="left" duration="600">
              <h2 className="">
                PERSONAL GROWTH
              </h2>
              <h2 className="">
                COMMUNITY-DRIVEN
              </h2>
              <h2 className="">
                DIVERSITY
              </h2>
              <h2 className="">
                OPPORTUNITIES
              </h2>
            </Slide>
          </div>
          <div className="  flex  lg:justify-between md:justify-between  w-[70%] lg:w-[40%] md:w-[60%] h-full">
              <img src={billboard} alt="" className="AboutBanner w-full"/>
          </div>
        </div>
        <div className='heightt'>
        </div>
          <SwipeToSlide className="relative caro" />
      </About>
    </>
  )
};

export default AboutUs;
