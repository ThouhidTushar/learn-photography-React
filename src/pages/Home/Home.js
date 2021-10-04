import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from "react-router-dom";
import { Card, CardGroup, Col, Row } from 'react-bootstrap';

const Home = () => {

	const [teachers, setTeachers] = useState([])

	useEffect(() => {
		fetch('../../../Photographer.JSON')
			.then((res) => res.json())
			.then((data) => setTeachers(data));
	}, []);
	return (



		<div className='row'>

			<h1 className="head">Our Dedicated Teachers</h1>
			{
				teachers.map(teacher => <div className='col-md-3'>
					<div>
						<div className="card">
							<div className="logo-image">
								<img className='img-fluid w-50' src={teacher.img} alt="" />
							</div>
							<h4>Name : {teacher.name}</h4>
							<h6>Age: {teacher.age}</h6>
							<h6>Role: {teacher.role}</h6>
							<h6>Salary: ${teacher.salary}</h6>

						</div>
					</div>
				</div>)
			}
		</div>

	)
};

export default Home;