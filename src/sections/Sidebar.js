// import { Logo } from "../assets/images";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarContent,
	SidebarMenu,
	SidebarLink,
	SidebarIcon,
	LinkedinIcon,
	InstagramIcon,
	TwitterIcon,
} from "./Sidebarelements";
// import { HashLink as Link } from "react-router-hash-link";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			<SidebarContainer isOpen={isOpen} onClick={toggle}>
				{/* <img
					src={Logo}
					alt="logo"
					className="mt-1 w-[25px] mt-8 ml-8 absolute"
				/> */}
				<Icon onClick={toggle} className="mr-40 mt-2">
					<CloseIcon />
				</Icon>
				<SidebarContent>
					<SidebarMenu>
						{/* <Link smooth to="/"> */}
						<SidebarLink onClick={toggle} href="#home">
							Home
						</SidebarLink>
						{/* </Link> */}
						{/* <Link smooth to="/"> */}
						<SidebarLink onClick={toggle} href="#about-us">
							About Us
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#faqs">
							FAQs
						</SidebarLink>
						{/* </Link> */}
						{/* <Link smooth to="/"> */}
						<SidebarLink
							onClick={toggle}
							href="/"
						>
							Sign In
						</SidebarLink>
						{/* </Link> */}
					</SidebarMenu>
					<SidebarIcon>
						<LinkedinIcon />
						<InstagramIcon />
						<TwitterIcon />
					</SidebarIcon>
				</SidebarContent>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
