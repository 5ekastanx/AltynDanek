import React, { useState } from 'react';
import fruitsimg from '../../Accests/fruits.jpg';
import './fructs.css';
import fruit2 from '../../Accests/fruit2.png';
import fruit1 from '../../Accests/fruit1.png';
import fruit3 from '../../Accests/fruit3.png';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

const items = [
  { id: 1, price: 120, title: 'Tomato', img: fruit1, price: 2.99 },
  { id: 2, price: 120, title: 'Fennel', img: fruit2, price: 3.49 },
  { id: 3, price: 120, title: 'Spring Onion', img: fruit3, price: 1.99 },
  { id: 4, price: 120, title: 'Apple', img: fruit1, price: 1.49 },
  { id: 5, price: 120, title: 'Cucumber', img: fruit2, price: 0.99 },
  { id: 6, price: 120, title: 'Lettuce', img: fruit3, price: 2.29 },
  { id: 7, price: 120, title: 'Carrot', img: fruit1, price: 1.79 },
  { id: 8, price: 120, title: 'Bell Pepper', img: fruit2, price: 2.99 },
];

const Fructs = () => {
  const [quantities, setQuantities] = useState({});
    const dispatch = useDispatch();
  
    const handleAddToCart = (item) => {
      dispatch(addItem({
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: quantities[item.id] || 1,
        image: item.img
      }));
    };
  

  const increase = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrease = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  const handleInputChange = (e, id) => {
    const value = parseInt(e.target.value);
    setQuantities((prev) => ({
      ...prev,
      [id]: isNaN(value) || value <= 0 ? 1 : value,
    }));
  };

  return (
    <div className="fruits">
      <div className="fruits_header fade-in" style={{ backgroundImage: `url(${fruitsimg})` }}>
        <h1>Fresh Fruits</h1>
      </div>

      <div className="section_fruits">
        <div className="container">
          <div className="card_grid3 fade-in">
            {items.map((item) => (
              <div className="card_fruit" key={item.id}>
                <div className="card_badge3">Organic</div>
                <div className="card_img3">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="card_content3">
                  <h3 className="card_title3">{item.title}</h3>
                  <p className="card_price3">${item.price.toFixed(2)}</p>
                  <div className="card_controls3">
                    <div className="quantity_selector3">
                      <button className="quantity_btn3 minus" onClick={() => decrease(item.id)}>-</button>
                      <input
                        type="number"
                        min="1"
                        value={quantities[item.id] || 1}
                        onChange={(e) => handleInputChange(e, item.id)}
                        className="quantity_input3"
                      />
                      <button className="quantity_btn3 plus" onClick={() => increase(item.id)}>+</button>
                    </div>
                    <select className="unit_selector3">
                      <option>kg</option>
                      <option>g</option>
                    </select>
                  </div>
                  <button onClick={() => handleAddToCart(item)} className="add_btn3">
                    <span>Add to Cart</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M6 15C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15Z" fill="white"/>
                      <path d="M14 15C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13C13.4477 13 13 13.4477 13 14C13 14.5523 13.4477 15 14 15Z" fill="white"/>
                      <path d="M16.5 4H4.5L3.5 1H1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M5 7H14.5L16 4H4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fructs;