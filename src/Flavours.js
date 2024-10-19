import React from 'react';
import './Flavours.css';

const flavoursData = [
  {
    name: 'Espresso',
    description: 'A full-flavored, concentrated coffee.',
    image: 'https://www.thespruceeats.com/thmb/HJrjMfXdLGHbgMhnM0fMkDx9XPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-espresso-765702-hero-03_cropped-ffbc0c7cf45a46ff846843040c8f370c.jpg',
  },
  {
    name: 'Cappuccino',
    description: 'A coffee drink made with espresso and steamed milk.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg',
  },
  {
    name: 'Latte',
    description: 'Espresso mixed with steamed milk and a light layer of foam.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrc2tPztEd3gDD0g_tw2hoFgQzY6oclHt3FQ&s',
  },
  {
    name: 'Mocha',
    description: 'Espresso with steamed milk and chocolate syrup.',
    image: 'https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Mocha-1fc71f7.png?quality=90&resize=556,505',
  },
  {
    name: 'Americano',
    description: 'Espresso diluted with hot water.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQebG5qgdv-62p9OqjJ8e8YhYhu-3XdSnWv4g&s',
  },
  {
    name: 'Flat White',
    description: 'Espresso with a higher ratio of coffee to milk.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4m7fD3bzhtkgy2o3zoK_U1KP4hms9Lek_Ow&s',
  },
  {
    name: 'Macchiato',
    description: 'A shot of espresso topped with a small amount of steamed milk or foam.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSamQqtFdhRyesAb19i8f4FAdanGpyHW4Pg&s',
  },
  {
    name: 'Irish Coffee',
    description: 'A cocktail of hot coffee, Irish whiskey, and sugar, stirred, and topped with cream.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Irish_coffee_glass.jpg/1200px-Irish_coffee_glass.jpg',
  },
  {
    name: 'Cold Brew',
    description: 'Coffee brewed with cold water over an extended period, resulting in a smooth, less acidic flavor.',
    image: 'https://www.simplyrecipes.com/thmb/t9ZeQC3Nb2YUoQTnxUJrjJbnKEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Cold-Brew-Coffee-LEAD-16-428691bcdd594281b2f5dc6dbc8235e4.jpg',
  },
  {
    name: 'Turkish Coffee',
    description: 'Finely ground coffee simmered in water and served unfiltered, often sweetened.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMww-q7w9VzZXc3ZSxVYfVi1Ed_U900qKJ9g&s',
  },
];

const Flavours = () => {
  return (
    <div className="flavours-container">
      <h1 className="flavours-title">Coffee Flavours</h1>
      <div className="flavours-grid">
        {flavoursData.map((flavour, index) => (
          <div key={index} className="flavour-card">
            <img src={flavour.image} alt={flavour.name} className="flavour-image" />
            <h3>{flavour.name}</h3>
            <p>{flavour.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flavours;
