import React from 'react';
import './Experience.css';
import LeftParaRightImage from './LeftParaRightImage';
import RightParaRightImage from './RightParaRightImage';

const Experience = () => {
	return (
		<div className='experience-wrapper'>
			<div className="experience-container">
				<h1>Experience</h1>
				<hr />
				<LeftParaRightImage />
				<p>The Royal Palace Incorporates the Five sense of traditional Indian welcome namely, fragrance, music, ambience, regional Indian paintings and frescoes, and mouth-watering Indian Cuisines. Here, we start with a traditional welcome of Namaskar and welcome our guest with Tika, Aarti and Garland which is how we welcome guest at our homes.
				</p>
				<RightParaRightImage />
			</div>
		</div>
	)
}

export default Experience