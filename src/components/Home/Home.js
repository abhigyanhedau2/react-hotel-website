import React from 'react';
import './Home.css';
import LeftImageCardItem from './LeftImageCardItem';
import RightImageCardItem from './RightImageCardItem';
import homeCardDataArr from '../../utility/home-card-data';
import ImageSlider from './ImageSlider';

const Home = () => {

    const homeCardList = homeCardDataArr.map(item => {
        if (item.imgPosition === 'left')
            return <LeftImageCardItem key={item.id} heading={item.heading} desc={item.desc} imgurl={item.imgurl} link={item.link} />

        else
            return <RightImageCardItem key={item.id} heading={item.heading} desc={item.desc} imgurl={item.imgurl} link={item.link} />
    })

    return (
        <div className="home-wrapper">
            <ImageSlider />
            {homeCardList}
        </div>
    )
}

export default Home