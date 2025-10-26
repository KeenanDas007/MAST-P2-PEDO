import React from 'react';
import { Dish } from './MenuScreen';

interface ChefDashboardScreenProps {
  onEditDish: () => void;
  onBack: () => void;
}

const ChefDashboardScreen: React.FC<ChefDashboardScreenProps> = ({ onEditDish, onBack }) => {
  const dishes: Dish[] = [
    {
      id: '1',
      name: 'GOURMET CHICK BURGER',
      description: 'FRIED CHICKEN BREAST CRISP AND THIGHS FRIED',
      price: 12.99,
      image: '/burger.jpg'
    }
  ];

  return (
    <div className="screen">
      <div className="screen-header">
        <button onClick={onBack} className="back-button">BACK TO MENU</button>
        <h2>WELCOME CHEF</h2>
      </div>

      <div className="chef-controls">
        <button>REMOVE DISH</button>
        <button>UPDATE MENU</button>
        <button onClick={onEditDish}>EDIT CURRENT DISH</button>
        <button onClick={onEditDish}>ADD DISH</button>
      </div>

      <div className="dishes-list">
        <h3>Current Dishes</h3>
        {dishes.map(dish => (
          <div key={dish.id} className="dish-item">
            <img src={dish.image} alt={dish.name} />
            <div className="dish-info">
              <h4>{dish.name}</h4>
              <p>{dish.description}</p>
              <p className="price">${dish.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDashboardScreen;