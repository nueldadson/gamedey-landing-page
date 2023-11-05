import react from 'react';
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
// import FAQ from './components/faq/FAQ';
import FAQsection from './components/faq/FAQsection';

const App = () => {
	const [addDelayClass, setAddDelayClass] = useState(true);
	const [addSlideInn, setAddSlideInn] = useState(false);
	const [addClass, setAddClass] = useState(false);


	const disableScroll = () => {
	const scrollY = window.scrollY;
	document.body.style.overflow = 'hidden';
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
	};

	const enableScroll = () => {
	const scrollY = parseInt(document.body.style.top || '0', 10);
	document.body.style.overflow = '';
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo(0, scrollY);
	};

	//    disableScroll();
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
   setAddClass(true);
   enableScroll();
 }, 8000);
 
 return () => clearTimeout(timer3);

}, []);


	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

  return (
		<>
			{addDelayClass && <LoadingBar />}
			{/* <Slidein /> */}
			{addSlideInn && <Slidein />}
			<div className={` content ${addClass ? 'showcontent' : ''}`}>
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Nav isOpen={isOpen} toggle={toggle} />
				<Hero />
				<GetStarted />
				<SafeHaven />
				<FAQsection />
				<Footer />
			</div>
		</>
	)
}

export default App;
