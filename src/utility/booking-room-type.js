import deluxeroom from '../assets/Booking/deluxeroom.jpg';
import queenroom from '../assets/Booking/queenroom.jpg';
import kingroom from '../assets/Booking/kingroom.jpg';
import penthouseroom from '../assets/Booking/penthouseroom.jpg';
import executivesuite from '../assets/Booking/executivesuite.jpg';
import presidentialsuite from '../assets/Booking/presidentialsuite.jpg';

const roomTypeArr = [
    {
        id: 'r1',
        type: "Deluxe Room",
        desc: "Extra fancy and of very high quality. It is bigger, more luxurious, and has a great view. Modernized decoration, can accommodate up to 2 persons, totally soundproofed and equipped with best-in-class amenities. Get free parking, WiFi and breakfast all inclusive with 24-hour room service!",
        imgurl: deluxeroom,
        imgPosition: 'left',
        price: 3500,
        amenities: ["fa-solid fa-car", "fa-solid fa-wifi", "fa-solid fa-utensils", "fa-solid fa-broom"],
        rating: 3
    },
    {
        id: 'r2',
        type: "Queen Room",
        desc: "Medium sized rooms with a queen sized bed, en suite shower and WC or en suite shower over bath and WC and can accommodate up to 2 persons. Get free parking, wifi, breakfast all inclusive with 24-hour room service and a mini fridge!",
        imgurl: queenroom,
        imgPosition: 'right',
        price: 5000,
        amenities: ["fa-solid fa-car", "fa-solid fa-wifi", "fa-solid fa-utensils", "fa-solid fa-broom", "fa-solid fa-box-archive"],
        rating: 4,
    },
    {
        id: 'r3',
        type: "King Room",
        desc: "Large sized rooms with a king sized bed, en suite shower and WC with a jacuzzi and can accommodate up to 2 persons. Get free parking, wifi, breakfast all inclusive with 24-hour room service, a mini fridge and pool access",
        imgurl: kingroom,
        imgPosition: 'left',
        price: 7500,
        amenities: ["fa-solid fa-car", "fa-solid fa-wifi", "fa-solid fa-utensils", "fa-solid fa-broom", "fa-solid fa-box-archive", "fa-solid fa-water-ladder"],
        rating: 4,
    },
    {
        id: 'r4',
        type: "Penthouse Room",
        desc: "Large sized rooms on the highest floor of hotel with a mind blowing view and breezes all the time. Get free parking, wifi, breakfast, 24-hour room service, a mini fridge, pool access equipped with tablet and TV",
        imgurl: penthouseroom,
        imgPosition: 'right',
        price: 12500,
        amenities: ["fa-solid fa-car", "fa-solid fa-wifi", "fa-solid fa-utensils", "fa-solid fa-broom", "fa-solid fa-box-archive", "fa-solid fa-water-ladder", "fa-solid fa-tv"],
        rating: 5,
    },
    {
        id: 'r5',
        type: "Executive Suite",
        desc: "A stylish one-bedroom suite with king sized bed decorated in neutral tones, 46 square meters in size and with a separate living and dining area. Get free parking, wifi, breakfast, 24-hour room service, a mini fridge, pool and gym access equipped with tablet and TV",
        imgurl: executivesuite,
        imgPosition: 'left',
        price: 15000,
        amenities: ["fa-solid fa-car", "fa-solid fa-wifi", "fa-solid fa-utensils", "fa-solid fa-broom", "fa-solid fa-box-archive", "fa-solid fa-water-ladder", "fa-solid fa-tv", "fa-solid fa-dumbbell"],
        rating: 5,
    },
    {
        id: 'r6',
        type: "Presidential Suite",
        desc: "Fit for royalty, every inch of this vast suite with 334 square metres interiors, has been designed with your utmost comfort in mind. Get free parking, wifi, breakfast, 24-hour room service, a mini fridge, pool and gym access equipped with tablet and TV with in-room cocktail station",
        imgurl: presidentialsuite,
        imgPosition: 'right',
        price: 25000,
        amenities: ["fa-solid fa-car", "fa-solid fa-wifi", "fa-solid fa-utensils", "fa-solid fa-broom", "fa-solid fa-box-archive", "fa-solid fa-water-ladder", "fa-solid fa-tv", "fa-solid fa-dumbbell", "fa-solid fa-martini-glass-citrus"],
        rating: 5,
    },

]

export default roomTypeArr;