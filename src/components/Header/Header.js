import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Header.css"


const Header = () => {
	return (
		<div>
			<Navbar bg="" variant="">
				<Container>
					<NavLink to="/home" className="items"><h1>Aamari</h1></NavLink>
					<Nav className="me-auto">
						<NavLink to="/home" className="items">Home</NavLink>
						<NavLink to="/services" className="items">Services</NavLink>
						<NavLink to="/about" className="items">About</NavLink>
						<NavLink to="/photogallery" className="items">Photo Gallery</NavLink>
					</Nav>
				</Container>
			</Navbar>

		</div>
	);
};

export default Header;