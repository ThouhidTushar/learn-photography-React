
import React, { useEffect, useState } from 'react';
import "./Services.css"


const Services = () => {

	const [services, setServices] = useState([])

	useEffect(() => {
		fetch('../../../services.json')
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div>
			<div className='row'>


				{
					services.map(service => <div className='col-md-3'>
						<div>
							<div className="card">
								<div className="logo-image">
									<img className='img-fluid w-50' src={service.img} alt="" />
								</div>
								<h4>Name : {service.name}</h4>
								<h6>Age: {service.age}</h6>
								<h6>Role: {service.role}</h6>
								<h6>Salary: ${service.salary}</h6>

							</div>
						</div>
					</div>)
				}
			</div>
		</div>
	);
};

export default Services;