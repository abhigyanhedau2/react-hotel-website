const foodItemsArr = [
    {
        id: 'bf1',
        category: 'Breakfast',
        name: 'Bacon and Eggs',
        desc: 'Fried or grilled slices of bacon and one or more fried eggs, eaten especially as part of a traditional English breakfast.',
        imgurl: require('../assets/Restaurant/Breakfast/baconandeggs.jpg'),
        price: 450
    },
    {
        id: 'bf2',
        category: 'Breakfast',
        name: 'Idli',
        desc: 'Savoury rice cake, originating from the Indian subcontinent,  made by steaming a batter consisting of fermented black lentils and rice.',
        imgurl: require('../assets/Restaurant/Breakfast/idli.jpg'),
        price: 150
    },
    {
        id: 'bf3',
        category: 'Breakfast',
        name: 'Cornflakes and Milk',
        desc: 'Very healthy, protein-rich meal which is essential for an active body all day.',
        imgurl: require('../assets/Restaurant/Breakfast/cornflakesandmilk.jpg'),
        price: 120
    },
    {
        id: 'bf4',
        category: 'Breakfast',
        name: 'Upma',
        desc: 'South Indian breakfast, cooked as a thick porridge from dry-roasted semolina or coarse rice flour.',
        imgurl: require('../assets/Restaurant/Breakfast/upma.jpg'),
        price: 160
    },
    {
        id: 'bf5',
        category: 'Breakfast',
        name: 'Pancakes',
        desc: 'Flat thin and round cake, prepared from a starch-based batter that may contain eggs, milk and butter',
        imgurl: require('../assets/Restaurant/Breakfast/pancakes.jpg'),
        price: 300
    },
    {
        id: 'bf6',
        category: 'Breakfast',
        name: 'Aloo Paratha',
        desc: 'Indian breakfast flatbreads made with whole wheat flour, mashed potatoes, spices & herbs.',
        imgurl: require('../assets/Restaurant/Breakfast/alooparatha.jpg'),
        price: 150
    },
    {
        id: 'bf7',
        category: 'Breakfast',
        name: 'Scrambled Eggs',
        desc: 'Eggs stirred, whipped or beaten together while being gently heated, typically with salt, butter, oil and sometimes other ingredients.',
        imgurl: require('../assets/Restaurant/Breakfast/scrambledeggs.jpg'),
        price: 175
    },
    {
        id: 'bf8',
        category: 'Breakfast',
        name: 'Poha',
        desc: 'Flattened rice, steam cooked with onions, spices and herbs.',
        imgurl: require('../assets/Restaurant/Breakfast/poha.jpg'),
        price: 100
    },
    {
        id: 'bf9',
        category: 'Breakfast',
        name: 'Omelette',
        desc: 'Beaten eggs, fried with butter or oil in a frying pan.',
        imgurl: require('../assets/Restaurant/Breakfast/omelette.jpg'),
        price: 120
    },
    {
        id: 'lh1',
        category: 'Lunch',
        name: 'Masala Bhindi',
        desc: 'Okra, whole and ground spices cooked with onion and tomatoes',
        imgurl: require('../assets/Restaurant/Lunch/bhindi.jpg'),
        price: 175
    },
    {
        id: 'lh2',
        category: 'Lunch',
        name: 'Chicken Wings',
        desc: 'Unbreaded chicken wing section that is generally deep-fried and then coated or dipped in a sauce consisting of a vinegar-based cayenne pepper hot sauce',
        imgurl: require('../assets/Restaurant/Lunch/chickenwings.jpg'),
        price: 300
    },
    {
        id: 'lh3',
        category: 'Lunch',
        name: 'Shahi Egg Curry',
        desc: 'Boiled Eggs dipped in a Tomato & Cashew Gravy makes a lip smacking egg curry',
        imgurl: require('../assets/Restaurant/Lunch/eggcurry.jpg'),
        price: 200
    },
    {
        id: 'lh4',
        category: 'Lunch',
        name: 'Chicken Fried Steak',
        desc: 'Tenderized cube steak, dipped in a milk or egg wash, dredged with seasoned flour, and fried in a skillet or deep-fried.',
        imgurl: require('../assets/Restaurant/Lunch/chickenfriedsteak.jpg'),
        price: 550
    },
    {
        id: 'lh5',
        category: 'Lunch',
        name: 'Paneer Butter Masala',
        desc: 'Rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter',
        imgurl: require('../assets/Restaurant/Lunch/paneerbuttermasala.jpg'),
        price: 350
    },
    {
        id: 'lh6',
        category: 'Lunch',
        name: 'Caesar Salad',
        desc: 'Green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg.',
        imgurl: require('../assets/Restaurant/Lunch/caesarsalad.jpg'),
        price: 250
    },
    {
        id: 'lh7',
        category: 'Lunch',
        name: 'Dal Makhani',
        desc: 'Made with urad dal and other pulses, and includes butter and cream.',
        imgurl: require('../assets/Restaurant/Lunch/dalmakhani.jpg'),
        price: 300
    },
    {
        id: 'lh8',
        category: 'Lunch',
        name: 'Barbecue Ribs',
        desc: 'Pork or beef ribs that are cooked using the low, indirect heat and smoke of a barbecue pit or the high, direct heat of a grill',
        imgurl: require('../assets/Restaurant/Lunch/barbecueribs.jpg'),
        price: 750
    },
    {
        id: 'lh9',
        category: 'Lunch',
        name: 'Rajma',
        desc: 'Red kidney beans in a thick gravy with many Indian whole spices,',
        imgurl: require('../assets/Restaurant/Lunch/rajma.jpg'),
        price: 300
    },
    {
        id: 'sk1',
        category: 'Snacks',
        name: 'Veg Cutlet',
        desc: 'Coating a cutlet of veggies with breading or batter and either frying or baking it.',
        imgurl: require('../assets/Restaurant/Snacks/vegcutlet.jpg'),
        price: 150
    },
    {
        id: 'sk2',
        category: 'Snacks',
        name: 'French Fries',
        desc: 'Batonnet or allumette-cut deep-fried potatoes, disputed origin from Belgium and France.',
        imgurl: require('../assets/Restaurant/Snacks/frenchfries.jpg'),
        price: 125
    },
    {
        id: 'sk3',
        category: 'Snacks',
        name: 'Samosa',
        desc: 'Fried pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas.',
        imgurl: require('../assets/Restaurant/Snacks/samosa.jpg'),
        price: 100
    },
    {
        id: 'sk4',
        category: 'Snacks',
        name: 'Cheese Balls',
        desc: 'Puffed corn snack, coated with a mixture of cheese or cheese-flavored powders.',
        imgurl: require('../assets/Restaurant/Snacks/cheeseballs.jpg'),
        price: 150
    },
    {
        id: 'sk5',
        category: 'Snacks',
        name: 'Kachori',
        desc: 'Spicy deep-fried snack, originating from the Indian subcontinent',
        imgurl: require('../assets/Restaurant/Snacks/kachori.jpg'),
        price: 100
    },
    {
        id: 'sk6',
        category: 'Snacks',
        name: 'Noodles',
        desc: 'Unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.',
        imgurl: require('../assets/Restaurant/Snacks/noodles.jpg'),
        price: 150
    },
    {
        id: 'sk7',
        category: 'Snacks',
        name: 'Manchurian',
        desc: 'Roughly chopping and deep-frying ingredients such as chicken, cauliflower, prawns, fish, mutton, and paneer, and then sautéeing it in a sauce flavored with soy sauce.',
        imgurl: require('../assets/Restaurant/Snacks/manchurian.jpg'),
        price: 150
    },
    {
        id: 'sk8',
        category: 'Snacks',
        name: 'Hash Browns',
        desc: 'Finely chopped potatoes that have been fried until browned.',
        imgurl: require('../assets/Restaurant/Snacks/hashbrowns.jpg'),
        price: 250
    },
    {
        id: 'sk9',
        category: 'Snacks',
        name: 'Veg Sandwich',
        desc: 'Vegetables and sliced cheese placed on or between slices of bread',
        imgurl: require('../assets/Restaurant/Snacks/sandwich.jpg'),
        price: 200
    },
    {
        id: 'dn1',
        category: 'Dinner',
        name: 'Palak Panner',
        desc: 'Paneer in a thick paste made from puréed spinach, called palak',
        imgurl: require('../assets/Restaurant/Dinner/palakpanner.jpg'),
        price: 300
    },
    {
        id: 'dn2',
        category: 'Dinner',
        name: 'Tandoori Chicken',
        desc: 'Roasted chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven',
        imgurl: require('../assets/Restaurant/Dinner/tandoorichicken.jpg'),
        price: 500
    },
    {
        id: 'dn3',
        category: 'Dinner',
        name: 'Macroni and Cheese',
        desc: 'Dish of cooked macaroni pasta and a cheese sauce, most commonly cheddar.',
        imgurl: require('../assets/Restaurant/Dinner/macandcheese.jpg'),
        price: 350
    },
    {
        id: 'dn4',
        category: 'Dinner',
        name: 'Chicken Biryani',
        desc: 'Savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.',
        imgurl: require('../assets/Restaurant/Dinner/chickenbiryani.jpg'),
        price: 550
    },
    {
        id: 'dn5',
        category: 'Dinner',
        name: 'Chicken Tikka Masala',
        desc: 'Roasted marinated chicken chunks in spiced orange gravy.',
        imgurl: require('../assets/Restaurant/Dinner/chickentikkamasala.jpg'),
        price: 400
    },
    {
        id: 'dn6',
        category: 'Dinner',
        name: 'Veg Pulao',
        desc: 'Rice cooked in stock or broth, adding spices, and other veggies',
        imgurl: require('../assets/Restaurant/Dinner/vegpulao.jpg'),
        price: 250
    },
    {
        id: 'dn7',
        category: 'Dinner',
        name: 'Dal Tadka',
        desc: 'Cooked spiced lentils are finished with a tempering made of ghee/ oil and spices.',
        imgurl: require('../assets/Restaurant/Dinner/daltadka.jpg'),
        price: 200
    },
    {
        id: 'dn8',
        category: 'Dinner',
        name: 'Barbecue Chicken',
        desc: 'Chicken parts or entire chickens that are barbecued, grilled or smoked.',
        imgurl: require('../assets/Restaurant/Dinner/bbqchicken.jpeg'),
        price: 500
    },
    {
        id: 'dn9',
        category: 'Dinner',
        name: 'Kadhai Paneer',
        desc: 'Paneer cooked in spicy kadai masala, bell peppers, tomatoes and kasuri methi.',
        imgurl: require('../assets/Restaurant/Dinner/kadhaipaneer.jpg'),
        price: 350
    },
    {
        id: 'ds1',
        category: 'Desserts',
        name: 'Blueberry Icecream',
        desc: 'Icecream made with sugar, water, cream and ofcourse blueberries',
        imgurl: require('../assets/Restaurant/Desserts/blueberry.jpg'),
        price: 120
    },
    {
        id: 'ds2',
        category: 'Desserts',
        name: 'Gulab Jamun',
        desc: 'Sweet confectionary or dessert, originating in the Indian subcontinent',
        imgurl: require('../assets/Restaurant/Desserts/gulabjamun.jpeg'),
        price: 100
    },
    {
        id: 'ds3',
        category: 'Desserts',
        name: 'Chocolate Icecream',
        desc: 'Icecream made with sugar, water, cream and ofcourse sweet sweet chocolate',
        imgurl: require('../assets/Restaurant/Desserts/chocolate.jpg'),
        price: 120
    },
    {
        id: 'ds4',
        category: 'Desserts',
        name: 'Apple Pie',
        desc: 'Pie filled with apples served with whipped cream, ice cream, or cheddar cheese.',
        imgurl: require('../assets/Restaurant/Desserts/applepie.jpg'),
        price: 175
    },
    {
        id: 'ds5',
        category: 'Desserts',
        name: 'Vanilla Icecream',
        desc: 'Icecream made with sugar, water, cream and ofcourse sweet milk',
        imgurl: require('../assets/Restaurant/Desserts/vanilla.jpg'),
        price: 120
    },
    {
        id: 'ds6',
        category: 'Desserts',
        name: 'Rasgulla',
        desc: 'Ball-shaped dumplings of chhena and semolina dough, cooked in light sugar syrup made of sugar. ',
        imgurl: require('../assets/Restaurant/Desserts/rasgulla.jpg'),
        price: 100
    },
    {
        id: 'ds7',
        category: 'Desserts',
        name: 'Strawberry Icecream',
        desc: 'Icecream made with sugar, water, cream and ofcourse strawberries',
        imgurl: require('../assets/Restaurant/Desserts/strawberry.jpg'),
        price: 120
    },
    {
        id: 'ds8',
        category: 'Desserts',
        name: 'Trifle',
        desc: 'Thin layer of sponge fingers commonly soaked in sherry or another fortified wine, custard and a fruit element',
        imgurl: require('../assets/Restaurant/Desserts/trifle.jpg'),
        price: 200
    },
    {
        id: 'ds9',
        category: 'Desserts',
        name: 'Brownie with Icecream',
        desc: 'Brownie served with vanilla icecream topped with chocolate syrup',
        imgurl: require('../assets/Restaurant/Desserts/brownie.jpg'),
        price: 250
    },
    {
        id: 'bv1',
        category: 'Beverages',
        name: 'Mango Lassi',
        desc: 'Blend of yogurt, water, spices and mango.',
        imgurl: require('../assets/Restaurant/Beverages/mango.jpeg'),
        price: 80
    },
    {
        id: 'bv2',
        category: 'Beverages',
        name: 'Coffee',
        desc: 'Brewed milk drink prepared from roasted coffee beans',
        imgurl: require('../assets/Restaurant/Beverages/coffee.jpg'),
        price: 120
    },
    {
        id: 'bv3',
        category: 'Beverages',
        name: 'Tea',
        desc: 'Aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis',
        imgurl: require('../assets/Restaurant/Beverages/tea.jpeg'),
        price: 90
    },
    {
        id: 'bv4',
        category: 'Beverages',
        name: 'Lemonade',
        desc: 'Sweetened lemon-flavored beverage.',
        imgurl: require('../assets/Restaurant/Beverages/lemonade.jpg'),
        price: 75
    },
    {
        id: 'bv5',
        category: 'Beverages',
        name: 'CocaCola',
        desc: 'Beverage served from the widely known company CocaCola',
        imgurl: require('../assets/Restaurant/Beverages/cocacola.jpg'),
        price: 120
    },
    {
        id: 'bv6',
        category: 'Beverages',
        name: 'Fanta',
        desc: 'Beverage served from the widely known company Fanta',
        imgurl: require('../assets/Restaurant/Beverages/fanta.png'),
        price: 120
    },
    {
        id: 'bv7',
        category: 'Beverages',
        name: 'Sprite',
        desc: 'Beverage served from the widely known company Sprite',
        imgurl: require('../assets/Restaurant/Beverages/sprite.png'),
        price: 120
    },
    {
        id: 'bv8',
        category: 'Beverages',
        name: 'Falooda',
        desc: 'Rose syrup, vermicelli, and sweet basil seeds mixed with milk, often served with ice cream.',
        imgurl: require('../assets/Restaurant/Beverages/falooda.jpg'),
        price: 150
    },
    {
        id: 'bv9',
        category: 'Beverages',
        name: 'Buttermilk',
        desc: 'Fermented dairy drink made with butter and milk',
        imgurl: require('../assets/Restaurant/Beverages/buttermilk.png'),
        price: 80
    },
]

export default foodItemsArr;