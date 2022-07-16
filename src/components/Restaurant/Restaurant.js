import React, { useState, useEffect } from 'react';
import './Restaurant.css';
import restaurantImg from '../../assets/Restaurant/restaurant.jpg';
import foodItemsArr from '../../utility/food-data';
import FoodItem from './FoodItem';

const Restaurant = () => {

	const [category, setCategory] = useState('all');
	const [menuItems, setMenuItems] = useState(foodItemsArr);

	const buttonNamesArr = [...new Set(foodItemsArr.map(item => item.category))];

	const buttonComponentList = buttonNamesArr.map(item => {
		return <button className='btn' key={item} id={item} onClick={(event) => { onClickHandler(event, item) }}>{item.toUpperCase()}</button>
	})

	buttonComponentList.unshift(<button className='btn active' key='all' id='all' onClick={(event) => { onClickHandler(event, 'all') }}>ALL DISHES</button>)


	function onClickHandler(event, enteredCategory) {

		// Getting all the buttons
		const btnComponents = [...document.getElementsByClassName('btn')];

		// Removing active class from all the buttons
		btnComponents.forEach(item => item.classList.remove('active'))

		// Adding active class to that button
		event.currentTarget.classList.add('active');

		// Setting the category
		setCategory(enteredCategory);
	}

	function shuffle(array) {
		let currentIndex = array.length, randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex !== 0) {

			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}

		return array;
	}

	useEffect(() => {

		let updatedItems;

		if (category === 'all') {
			const toShuffleArr = [...foodItemsArr];
			updatedItems = shuffle(toShuffleArr);
		} else {
			updatedItems = foodItemsArr.filter(item => {
				return item.category === category;
			})
		}

		setMenuItems(updatedItems);

	}, [category])

	const menuDisplayItems = menuItems.map(item => {
		return <FoodItem key={item.id} name={item.name} desc={item.desc} imgurl={item.imgurl} price={item.price} />
	});

	// Scroll to the top of the page after component is mounted
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])


	return (
		<div className='restaurant-wrapper'>
			<div className="restaurant-container">
				<h1>Restaurant</h1>
				<hr />
				<div className="restaurant-details">
					<p>The quality of customer service and food offered in our restaurant is going to be one of the most memorable aspects while your stay in our hotel as we know that customer service can make or break someone's experience! There is a great atmosphere that is felt from the very moment our guests walk through the door of the restaurant with a well-chosen soundtrack to accompany our guests' dining experience. When paired with food, service and music, the interior design of our restaurant contributes to the overall ambience felt in the space, whilst also moulding the guest experience. Furniture in the restaurant is comfortable which will provide you a relaxing and royal dining experience.</p>
					<img src={restaurantImg} alt="" />
				</div>
				<div className="menu">
					<h1>Dining and Room Service Menu</h1>
					<hr />
					<div className="button-row">
						{buttonComponentList}
					</div>
					<div className="food-items-wrapper">
						{menuDisplayItems}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Restaurant