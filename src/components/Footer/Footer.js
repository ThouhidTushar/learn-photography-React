
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {

	faPhoneVolume,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
	return (
		<div>

			<div className="footer-container">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="left-container text-start">
								<h1> ~Aamari~ <br /> Learn Wedding Photography</h1>
								<div className="icons-container d-flex text-center ">
									<div className="icon">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
									<div className="icon">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
								</div>
								<p className="mt-4 ">

								</p>

								<p className="mt-5">
									<small>Aamari ©  All rights reserved.</small>
								</p>
							</div>
						</div>
						<div className="col-md-2">
							<div className="footer-menu-container">
								<ul>
									<li className="footer-menu">Home</li>
									<li className="footer-menu">Services</li>
									<li className="footer-menu">About</li>
									<li className="footer-menu">Photo Gallery</li>

								</ul>
							</div>
						</div>
						<div className="col-md-5">
							<div className="right-footer-container">
								<h3>Sign up for the newsletter</h3>
								<input
									className="footer-input"
									type="text"
									placeholder="Enter Email"
								/>
								<div className="phone d-flex align-items-center justify-content-center mt-4">
									<div className="foter-phone-icon">
										<FontAwesomeIcon icon={faPhoneVolume} />
									</div>
									<div>
										<h5>+8 8 800  54545454</h5>
									</div>
								</div>
								<div className="map d-flex align-items-center justify-content-center">
									<div className="foter-phone-icon">
										<FontAwesomeIcon icon={faMapMarkedAlt} />
									</div>
									<div>
										<p>
											Middle Piakpara
											<br /> Mirpur 1, Dhaka
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Footer;