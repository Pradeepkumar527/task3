import React from 'react';
import data from './data/data.json';
import profilepic from './1077114.svg';
export default function Resume(props) {
		fetch('https://jsonplaceholder.typeicode.com/posts')
		.then(response=>response.json())
		.then(data=>console.log(data))

		let info=data.profile[props.location.data.id]
		console.log(info.name)
	return (
		<div className="row justify-content-center">
			<div className="col-lg-3 m-2">
				<div className="card shadow">
					<div className="card-body text-center">
						<img  src={profilepic}  />
						<h1>{info.basics.name}</h1>
                 <div className="card-text">
                         <h4 className="text-secondary"> {info.basics.role}</h4>
                 </div>
                 <a href={"tel"+info.basics.phone}><h4>{info.basics.phone}</h4></a>
                 <a href={"mailto"+info.basics.email}><h5>{info.basics.email}</h5></a>
					</div>
				</div>
			</div>

			<div className="col-lg-8 m-2">
				<div className="card shadow">
					<div className="card-body">
						<h2>Career Objective:</h2>
						<hr/>
						<h3>{info.career}</h3>
					</div>

					<div className="card-body">
						<h2>Personal Details:</h2>
						<hr/>
						<h5>{info.pname}</h5>
						<h5>{info.paddress}</h5>
						<h5>{info.pmobile}</h5>
						<h5>{info.pdob}</h5>
						<h5>{info.page}</h5>
						<h5>{info.pgender}</h5>
						<h5>{info.pnation}</h5>
						<h5>{info.plang}</h5>
					</div>

					<div className="card-body">
						<h2>Educational Details:</h2>
						<hr/>
						<h5>{info.pbtech}</h5>
						<h5>{info.pinter}</h5>
						<h5>{info.p10}</h5>
					</div>
				</div>
			</div>
		</div>

		)
}