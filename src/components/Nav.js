import React from "react";
import { Logo } from "../assets/images";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants";
import { NavBtn, NavBtnLink } from './NavElements';
import "./nav.css";

const Nav = ({ isOpen, toggle }) => {
	const [isFixed, setIsFixed] = useState(false);

	const scrollThreshold = 100; // Adjust this value based on when you want the navbar to become fixed

	const handleScroll = () => {
		if (window.scrollY > scrollThreshold) {
			setIsFixed(true);
		} else {
			setIsFixed(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={` bg-[#f3f3e0]  shadow-md py-3 indexx w-full ${
				isFixed ? "fixed top-0 bg-white shadow-md" : " absolute"
			}`}
		>
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img
						src={Logo}
						alt="logo"
						className="mt-1 w-[30px]"
					/>
				</a>
				<h1 className="logotext font-bold max-lg:hidden">
    	          gamedey
	            </h1>
				<div className="contactusBTN flex justify-center">
        			Join The Waitlist
        		</div>
				<ul className="flex-1 flex justify-end mr-5 items-center gap-16 max-lg:hidden">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								className="font-montserrat  leading-normal text-coral-red text-sm font-bold"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
				<div
					className="flex gap-2 text-coral-red leading-normal max-lg:hidden wide:mr-24"
				>
					<h2 className="stroke font-bold mt-2">
            		  |
            		</h2>					
					<NavBtn>
        				<NavBtnLink>
            				<a href="#">Contact us</a>
        				</NavBtnLink>
        			</NavBtn>
				</div>
				<div className="">
					{/* <img src={hamburger} alt="hamburger icon" width={25} height={25} /> */}
					{/* dcrfrfrubububububbub */}
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faBars}
						className="iconn pr-18"
						onClick={toggle}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
