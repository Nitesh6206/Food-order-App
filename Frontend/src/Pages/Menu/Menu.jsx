import React, { useEffect, useState } from 'react';
import Cards from '../../Component/Cards/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../Utils/api';
import './Menu.css'; // Import the CSS file

const Menu = () => {
  const [mealType, setMealType] = useState('All');
  const [foodType, setFoodType] = useState('All');
  const [menuItems, setMenuItems] = useState([]); 
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = async () => {
    try {
      const response = await api.get('/menu'); 
      setMenuItems(response.data.menu); 
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to fetch menu items.');
    } finally {
      setLoading(false);
    }
  };

  const filteredFoodItems = menuItems.filter((item) => {
    return (mealType === 'All' || item.meal === mealType) && (foodType === 'All' || item.type === foodType);
  });

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="menu-container">
      <h2 className="text-center text-dark mb-4">Menu</h2> 
      <div className="filter-section">
        <div>
          <label htmlFor="mealType" className="text-dark me-2">Filter by Meal Type:</label>
          <select
            id="mealType"
            className="form-select w-auto"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
          </select>
        </div>
        <div>
          <label htmlFor="foodType" className="text-dark me-2">Filter by Food Type:</label>
          <select
            id="foodType"
            className="form-select w-auto"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>
      </div>
      <div className="menu-items d-flex flex-wrap justify-content-center">
        {filteredFoodItems.length > 0 ? (
          filteredFoodItems.map((item) => (
            <Cards 
              key={item.id} 
              foodName={item.name} 
              imageUrl={item.imageUrl || 'https://via.placeholder.com/150'} 
              price={item.price} 
            />
          ))
        ) : (
          <div className="alert alert-info text-dark">No items match the selected filters.</div> 
        )}
      </div>
    </div>
  );
};

export default Menu;
