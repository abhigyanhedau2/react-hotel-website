import React, { useEffect } from 'react';
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

    // Scroll to the top of the page after component is mounted
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="home-wrapper">
            <ImageSlider />
            {homeCardList}
        </div>
    )
}

export default Home