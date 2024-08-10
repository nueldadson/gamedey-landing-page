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
				<Sidebar isOpen={isOpen} toggleActive={toggleActive}  toggle={toggle} />
				{isActive && <Waitlist toggleActive={toggleActive} />}
				<Hero toggleActive={toggleActive} isActive={isActive}/>
				<AboutUs />
				<GetStarted />
				<SafeHaven />
	    <div id="mc_embed_shell">
  
<div id="mc_embed_signup">
    <form action="https://gamedey.us14.list-manage.com/subscribe/post?u=cd0e8d687a0483e5ef74ca4c5&amp;id=cc2b3a4692&amp;f_id=0033b8e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_self" novalidate="">
        <div id="mc_embed_signup_scroll">
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value="" /></div><div class="mc-field-group"><label for="mce-FNAME">Name <span class="asterisk">*</span></label><input type="text" name="FNAME" class="required text" id="mce-FNAME" required="" value=""></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_cd0e8d687a0483e5ef74ca4c5_cc2b3a4692" tabindex="-1" value="" />
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe" />
                <p style="margin: 0px auto;"><a href="http://eepurl.com/iWKdTY" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
</div>

				<FAQsection />
				<Footer />
			</div>
		</>
	)
}

export default App;
