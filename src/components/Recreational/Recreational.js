import React from 'react';
import './Recreational.css';
import recimg1 from '../../assets/Recreational/recimg1.png';
import recimg2 from '../../assets/Recreational/recimg2.png';
import recimg3 from '../../assets/Recreational/recimg3.png';
import recimg4 from '../../assets/Recreational/recimg4.png';
import LeftParaRightImage from '../UI/Card/LeftParaRightImage';
import RightParaRightImage from '../UI/Card/RightParaRightImage';

const Recreational = () => {

	const paragraphs = [
		{
			heading: "Swimming",
			para: "Swimming is a great recreational activity for people of all ages. Recreational swimming can provide you with a low-impact workout and it's a good way to relax and feel good. And for that, our hotel has 3 pools which are available for the guests 24x7 without any extra cost, where guests can chill and relax. We also have a swim bar beside the pool so that the guests can enjoy a drink while chilling on the pool side. There is an outdoor kitchen attached to the swimming pool offering snacks. There are numerous waterfalls inside the pool. Upcycled fountain are also available at our pool. We provide the necessary swim clothes and equipments required and also have tubes and other safety gears.",
			imgurl: recimg1
		},
		{
			heading: "Meditation",
			para: "Meditation can help us in gaining a new perspective on stressful situations, increasing self-awareness focusing on the present, reducing negatibve emotions, increasing imagination and creativity, etc.. And therefore, our hotel provides a calm, peaceful and ideal meditation environment, where our guests can peacefully meditate and reduce their stress. Vacations are meant to forget all the stressful stuff and just enjoy and calm ourselves and meditation is a great way in which one can reduce anxiety, depression, stress and pain. We have a dedicated meditation park for our guests where they can freely meditate without any disturbance",
			imgurl: recimg2
		},
		{
			heading: "Jogging",
			para: "As we all know Jogging helps us to build strong bones, as it is a weight bearing exercise, helps in strengthing of muscles, improve cardiovascular fitness, burn plenty of calories. We have a dedicated jogging track in and around our hotel so that our guests can access it for their exercise and jogging. We also provide jogging shoes so that the experience of guests at our hotel should remain clutter-free. We have hydrating stations, snacks corner, etc along the jogging track so that our guests can stay hydrated and get a quick bite if they're hungry while jogging.",
			imgurl: recimg3
		},
		{
			heading: "Games",
			para: "Our hotel also has an adjoined ground where guests can play sports like Cricket, Football, Volleyball, etc. We provide all the equipments and things required to play these games, so that you can get a great experince while playing these games. All these services are free of cost and everyone can access them without spending a single penny. At our hotel, we also have many indoor games available for guests to play and have fun with their friends and family. There are various number of games present such as Table Tennis, Pool, Foosball, and many board games.",
			imgurl: recimg4
		}
	]


	return (
		<div className='recreational-wrapper '>
			<div className='recreational-container'>
				<h1 id="recreational-heading">Recreational Activities</h1>
				<hr />
				<LeftParaRightImage heading={paragraphs[0].heading} para={paragraphs[0].para} imgurl={paragraphs[0].imgurl} />
				<RightParaRightImage heading={paragraphs[1].heading} para={paragraphs[1].para} imgurl={paragraphs[1].imgurl} />
				<LeftParaRightImage heading={paragraphs[2].heading} para={paragraphs[2].para} imgurl={paragraphs[2].imgurl} />
				<RightParaRightImage heading={paragraphs[3].heading} para={paragraphs[1].para} imgurl={paragraphs[1].imgurl} />
			</div>
		</div>
	)
}

export default Recreational