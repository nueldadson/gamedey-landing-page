import React from 'react';
import { Slide } from 'react-awesome-reveal';
import {heroIMG} from '../assets/images';
import {heroIMG2} from '../assets/images';
import {heroIMG3} from '../assets/images';
import './hero.css';


    const Hero = ({ toggleActive }) => {

    

    return (
        <div id="home" className="home relative flex flex-col font-bold justify-center items-center w-full  min-h-screen  px-4 lg:px-24 md:px-24  py-24 lg:py-24 md:py-24 " >
                        <img src={heroIMG} alt="Hero Image" className="bel lg:w-2/5 md:w-2/3 w-5/6  mb-2 pt-8"  />
                        <h1 className="bel text-2xl md:text-3xl lg:text-4xl text-center px-4 md:px-24 lg:px-60 py-4 md:py-2 lg:py-2 mb-4 md:mb-6 lg:mb-8" >
                            Gamedey is a social platform for fitness enthusiasts of all backgrounds, where you can connect, have fun, and unleash your competitive spirit! Playing games with your friends doesn't have to be a hassle anymore. No matter your hobby, skill level, or preferred time, Gamedey gives you the ultimate experience.
                        </h1>
                        <div onClick={toggleActive} className="text-white text-bold contactusBTN flex justify-center items-center gap-2 px-9 py-4 border hover:bg-red leading-none bg-coral-red rounded-full">
                			Get Started
                		</div>
                        <Slide direction="up" className="herosideimg1">
                            <img src={heroIMG2} alt="" className="img11"/>
                        </Slide>
                        <Slide direction="up" className="herosideimg2" >
                            <img src={heroIMG3} alt="" className="img11" />
                        </Slide>
                        </div>
    )
}

export default Hero;
