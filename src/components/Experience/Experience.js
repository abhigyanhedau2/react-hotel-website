import React from 'react';
import './Experience.css';
import LeftParaRightImage from '../UI/Card/LeftParaRightImage';
import RightParaRightImage from '../UI/Card/RightParaRightImage';
import expimg1 from '../../assets/Experience/expimg1.png';
import expimg2 from '../../assets/Experience/expimg2.png';

const Experience = () => {

	const paragraphs = [
		{
			imgurl: expimg1,
			para: "The hotel is located in the centre of the city and hence, it is close to many palaces and forts in the city. It is surrounded with beautiful parks and nursuries, one must check out. The view from the hotel window is quite a spectacle, which portrays the royal lifestyle of the Indian Kings. There are a lot of activites such as Horse Riding, Trekking, Rifle Shooting, Sword Fighting which are provided by the hotel and can be enjoyed by the guests. the hotel surrounding is peaceful and provides a nice relaxing atmosphere in and around the hotel. Our Hotel resonates true Indian Hospitality. Being a truly Indian brand people have taken pride in associating with us. We're always eager to welcome our guests and provide them our best hospitality and food."
		},
		{
			imgurl: expimg2,
			para: "The hotel is located in the centre of the city and hence, it is close to many palaces and forts in the city. It is surrounded with beautiful parks and nursuries, one must check out. The view from the hotel window is quite a spectacle, which portrays the royal lifestyle of the Indian Kings. There are a lot of activites such as Horse Riding, Trekking, Rifle Shooting, Sword Fighting which are provided by the hotel and can be enjoyed by the guests. the hotel surrounding is peaceful and provides a nice relaxing atmosphere in and around the hotel. Our Hotel resonates true Indian Hospitality. Being a truly Indian brand people have taken pride in associating with us. We're always eager to welcome our guests and provide them our best hospitality and food."
		}
	]

	return (
		<div className='experience-wrapper'>
			<div className="experience-container">
				<h1>Experience</h1>
				<hr />
				<LeftParaRightImage imgurl={paragraphs[0].imgurl} para={paragraphs[0].para} />
				<p>The Royal Palace Incorporates the Five sense of traditional Indian welcome namely, fragrance, music, ambience, regional Indian paintings and frescoes, and mouth-watering Indian Cuisines. Here, we start with a traditional welcome of Namaskar and welcome our guest with Tika, Aarti and Garland which is how we welcome guest at our homes.
				</p>
				<RightParaRightImage imgurl={paragraphs[1].imgurl} para={paragraphs[1].para} />
			</div>
		</div>
	)
}

export default Experience