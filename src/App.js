import React from 'react';
import Sidebar from "./sections/Sidebar";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import LoadingBar from "./components/LoadingBar.js/LoadingBar";
import Slidein from "./components/animation/Slidein";
// import { Fade, Slide, Reveal, Bounce } from "react-awesome-reveal";
import "./App.css";
import Hero from './sections/Hero';
import GetStarted from './components/getStarted/GetStarted';
import SafeHaven from './components/SafeHaven/SafeHaven';
import Footer from './components/Footer/Footer';
import FAQsection from './components/faq/FAQsection';
import Waitlist from './components/waitlist';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => {
	const [addDelayClass, setAddDelayClass] = useState(true);
	const [addSlideInn, setAddSlideInn] = useState(false);
	const [addClass, setAddClass] = useState(false);


	// const disableScroll = () => {
	// const scrollY = window.scrollY;
	// document.body.style.overflow = 'hidden';
	// document.body.style.position = 'fixed';
	// document.body.style.top = `-${scrollY}px`;
	// };


	const disableScroll = () => {
		const scrollY = window.scrollY;
		const body = document.body;
		body.style.overflow = 'hidden';
		body.style.position = 'fixed';
		body.style.top = `-${scrollY}px`;
	  };
	  
	  const enableScroll = () => {
		const body = document.body;
		const scrollY = parseInt(body.style.top || '0', 10);
		body.style.overflow = '';
		body.style.position = '';
		body.style.top = '';
		window.scrollTo(0, -scrollY);
	  };
	  


	// const enableScroll = () => {
	// const scrollY = parseInt(document.body.style.top || '0', 10);
	// document.body.style.overflow = '';
	// document.body.style.position = '';
	// document.body.style.top = '';
	// window.scrollTo(0, scrollY);
	// };

	useEffect(() => {
		const delay = 2000;

 const timer = setTimeout(() => {
   setAddDelayClass(false);
 }, delay);

 const delay2 = 2000;

 const timer2 = setTimeout(() => {
	 setAddSlideInn(true);
}, delay2)

const timer3 = setTimeout(() => {
	 setAddSlideInn(false);
   setAddClass(true);
   enableScroll();
 }, 8000);
 
 return () => clearTimeout(timer3);

}, []);


	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	
	
    const [isActive, setisAct] = useState(false);
	// const canScroll =  disableScroll();
	
    const toggleActive = () => {
		setisAct(!isActive);
		if (isActive) {
			enableScroll();
		  } else {
			disableScroll();
		  }    };


  return (
		<>
			{addDelayClass && <LoadingBar />}
			{addSlideInn && <Slidein />}
			<div className={` content ${addClass ? 'showcontent' : ''}`}>
				<Nav isOpen={isOpen} toggle={toggle} toggleActive={toggleActive} />
				<Sidebar isOpen={isOpen} toggle={toggle} />
				{isActive && <Waitlist toggleActive={toggleActive} />}
				<Hero toggleActive={toggleActive} isActive={isActive}/>
				<AboutUs />
				<GetStarted />
				<SafeHaven />
				<FAQsection />
				<Footer />
			</div>
		</>
	)
}

export default App;
