import { Link } from 'react-router-dom';
import card1img from '../assets/Home/card1img.jpg';
import card2img from '../assets/Home/card2img.jpg';
import card3img from '../assets/Home/card3img.jpg';
import card4img from '../assets/Home/card4img.jpg';

const homeCardDataArr = [
    {
        id: 'c1',
        heading: 'Enjoy a Royal Experience',
        desc: 'In our hotel, you get a rich and royal stay experince. Rooms are very spacious and extravagant. The housekeeping staff are polite and work to the best of their abilities on a daily basis. The restaurant serves royal Indian food and other cuisines for everyone. In-house and rooftop restaurants and bars are also available at our hotel. Hotel has 3 pools and a beach which the guests can access and enjoy themselves.',
        imgurl: card1img,
        imgPosition: 'left',
        link: <Link to="/experience"><button>{`Read More >`}</button></Link>,
    },
    {
        id: 'c2',
        heading: 'Comfortable and Luxurious Rooms',
        desc: "Hotel has Comfortable rooms with daily cleaning and room service. it is equipped with all the necessary and luxurious amenities and furniture. Wi-Fi is accessible in every part of the hotel. We guarantee you a peaceful and royal stay with a lot of recreational activites to do around the hotel. With 24-hour room service, we're always at the edge of our seat to help you.",
        imgurl: card2img,
        imgPosition: 'right',
        link: <Link to="/booking"><button>{`Read More >`}</button></Link>,
    },
    {
        id: 'c3',
        heading: 'Delicious Royal Food and Diverse Cuisine',
        desc: 'Our restaurants have mouthwatering and appetising food with a variety of cuisines to enjoy from. Our speciality, the Indian Royal Food which are prepared from fresh and healthy organic ingredients cooked by our experinced chefs presented elegantly. Our recipes feature local flavors which you should surely try out, which are rare delicacies.',
        imgurl: card3img,
        imgPosition: 'left',
        link: <Link to="/restaurant"><button>{`Read More >`}</button></Link>,
    },
    {
        id: 'c4',
        heading: 'Recreational Activities',
        desc: 'Hotels are a great place for recreational activities such as swimming, meditation, reading, playing games and dancing, etc.. and it is our responsibility to make sure you enjoy yourself during the stay at our hotel and thus, we have pools, jogging tracks, sporting grounds for sports such as basketball, badminton, lawn tennis, etc.. so as to make your stay more enjoyable and memorable',
        imgurl: card4img,
        imgPosition: 'right',
        link: <Link to="/recreational"><button>{`Read More >`}</button></Link>,
    }
]

export default homeCardDataArr