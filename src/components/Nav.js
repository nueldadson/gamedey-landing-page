import React from "react";
import { Logo } from "../assets/images";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { navLinks } from "../constants";
import { NavBtn, NavBtnLink } from './NavElements';
import "./nav.css";

const Nav = ({ isOpen, toggle, toggleActive }) => {

	return (
		<header
			className=" bg-[#f3f3e0] flex shadow-md py-3 indexx w-full 
				fixed top-0  shadow-md
		"
		>
			<nav className="flex justify-between items-center w-full px-6 lg:px-10">
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
				<div onClick={toggleActive} className="contactusBTN flex justify-center  hidden max-lg:block">
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
        				<NavBtnLink onClick={toggleActive}>
            				Join The Waitlist
        				</NavBtnLink>
				</div>
				<div className="flex justify-end  hidden max-lg:block">
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faBars}
						className="iconn"
						onClick={toggle}
					/>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
