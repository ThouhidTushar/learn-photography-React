import React from 'react';
import Header from '../Header/Header';
import './Banner.css'

const Banner = () => {
	return (
		<div className="banner-container" >
			<div className="">
				<div className="row d-flex banner align-items-center justify-content-center">
					<Header></Header>
					<div className="col-md-6">
						<h1 className="title">
							Learn With Us <br /> We Are The Best In Town
						</h1>
						<p className="text-white text-center mt-3 mx-5">
							Learn Wedding Photography to Make your career a diverse and creative one. <br /> You can work all over the world if you can create your unique style.
						</p>
						<button className="mt-3 about-btn">About Us</button>
					</div>
					<div className="col-md-6"></div>
				</div>
			</div>

		</div>
	);
};

export default Banner;