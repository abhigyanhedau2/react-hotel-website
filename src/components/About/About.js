import React from 'react';
import './About.css';
import img from '../../assets/About/aboutimg1.jpg';
import Parallax from './Parallax';
import aboutDataArr from '../../utility/about-data';

const About = () => {

	const parallaxList = aboutDataArr.map(item => {
		return <Parallax key={item.imgurl} imgurl={item.imgurl} h1={item.h1} p1={item.p1} p2={item.p2} p3={item.p3} />
	})

	return (
		<div className='about-wrapper'>
			<div className="parallax" style={{ backgroundImage: 'url(' + img + ')' }}>
				<div className="parallax-one-content">
					<h1>About Us</h1>
					<hr />
					<h2>The Royal Palace</h2>
				</div>
			</div>
			{parallaxList}
		</div>
	)
}

export default About;