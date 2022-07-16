import React from 'react';
import './RightParaRightImage.css';

const RightParaRightImage = () => {
    return (
        <div className='right-para-right-image-wrapper'>
            <div className="rpri-image-wrapper">
                <img src={require('../../assets/Experience/expimg2.png')} alt="..." />
            </div>
            <div className="rpri-para-wrapper">
                <p>The hotel is located in the centre of the city and hence, it is close to many palaces and forts in the city. It is surrounded with beautiful parks and nursuries, one must check out. The view from the hotel window is quite a spectacle, which portrays the royal lifestyle of the Indian Kings. There are a lot of activites such as Horse Riding, Trekking, Rifle Shooting, Sword Fighting which are provided by the hotel and can be enjoyed by the guests. the hotel surrounding is peaceful and provides a nice relaxing atmosphere in and around the hotel. Our Hotel resonates true Indian Hospitality. Being a truly Indian brand people have taken pride in associating with us. We're always eager to welcome our guests and provide them our best hospitality and food.</p>
            </div>
        </div>
    )
}

export default RightParaRightImage